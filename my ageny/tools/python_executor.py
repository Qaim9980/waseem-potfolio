"""
Python Code Interpreter Tool
Executes Python code in a safe Jupyter kernel environment
"""
import sys
import io
import traceback
import re
from typing import Dict, Any
from jupyter_client import KernelManager
import time


class PythonInterpreter:
    """
    Python code execution tool using Jupyter kernel
    """
    
    def __init__(self):
        self.km = None
        self.kc = None
        self._initialize_kernel()
    
    def _initialize_kernel(self):
        """Start a Jupyter kernel for code execution"""
        try:
            self.km = KernelManager()
            self.km.start_kernel()
            self.kc = self.km.client()
            self.kc.start_channels()
            
            # Wait for kernel to be ready
            time.sleep(2)
            
            # Pre-install common libraries
            self._preinstall_libraries()
            
        except Exception as e:
            print(f"Error initializing kernel: {e}")
            raise
    
    def _preinstall_libraries(self):
        """Pre-import commonly used libraries"""
        preinstall_code = """
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use('Agg')  # Non-interactive backend
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.metrics import accuracy_score, mean_squared_error, r2_score
import json
import os
import sys
from datetime import datetime
print("Libraries pre-loaded successfully!")
"""
        self.execute(preinstall_code)
    
    def execute(self, code: str, timeout: int = 60) -> Dict[str, Any]:
        """
        Execute Python code and return results
        
        Args:
            code: Python code to execute
            timeout: Maximum execution time in seconds (increased default)
            
        Returns:
            Dict with 'output', 'error', 'success' keys
        """
        if not self.kc:
            return {
                "success": False,
                "output": "",
                "error": "Kernel not initialized"
            }
        
        try:
            # Execute the code
            msg_id = self.kc.execute(code)
            
            output = []
            error = None
            
            # Collect outputs with better timeout handling
            start_time = time.time()
            idle_received = False
            
            while True:
                elapsed = time.time() - start_time
                if elapsed > timeout:
                    error = f"⚠️ Execution timeout ({timeout}s exceeded). Try breaking code into smaller chunks."
                    break
                
                try:
                    # Use shorter timeout for message checking
                    msg = self.kc.get_iopub_msg(timeout=1)
                    msg_type = msg['msg_type']
                    content = msg['content']
                    
                    if msg_type == 'stream':
                        output.append(content['text'])
                    
                    elif msg_type == 'execute_result':
                        output.append(str(content['data'].get('text/plain', '')))
                    
                    elif msg_type == 'display_data':
                        # Handle plots and visualizations
                        if 'text/plain' in content['data']:
                            output.append(str(content['data']['text/plain']))
                    
                    elif msg_type == 'error':
                        error = '\n'.join(content['traceback'])
                        # Clean up ANSI codes from traceback
                        error = re.sub(r'\x1b\[[0-9;]*m', '', error)
                    
                    elif msg_type == 'status' and content['execution_state'] == 'idle':
                        idle_received = True
                        break
                        
                except Exception:
                    # If idle was received, we're done
                    if idle_received:
                        break
                    # Otherwise, check if we've waited long enough
                    if elapsed > timeout:
                        break
                    continue
            
            output_text = ''.join(output).strip()
            
            # Truncate very long outputs
            if len(output_text) > 5000:
                output_text = output_text[:5000] + f"\n\n... (output truncated, {len(output_text)} total chars)"
            
            return {
                "success": error is None,
                "output": output_text,
                "error": error
            }
            
        except Exception as e:
            return {
                "success": False,
                "output": "",
                "error": f"Execution error: {str(e)}"
            }
    
    def shutdown(self):
        """Cleanup kernel resources"""
        if self.kc:
            self.kc.stop_channels()
        if self.km:
            self.km.shutdown_kernel()
    
    def __del__(self):
        """Ensure kernel is shutdown on deletion"""
        self.shutdown()


# Tool wrapper for LangChain
def python_interpreter_tool(code: str) -> str:
    """
    Execute Python code and return output
    
    Args:
        code: Python code to execute
        
    Returns:
        Execution output or error message
    """
    interpreter = PythonInterpreter()
    result = interpreter.execute(code)
    interpreter.shutdown()
    
    if result["success"]:
        return result["output"] if result["output"] else "Code executed successfully (no output)"
    else:
        return f"ERROR:\n{result['error']}"
