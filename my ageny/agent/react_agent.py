"""
Core ReAct Agent Implementation
Integrates LLM with tools following the Reason-Act-Observe pattern
"""
from typing import List, Dict, Any, Optional
from langchain_ollama import ChatOllama
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage
from langchain_core.tools import Tool
from config import (
    Config, 
    SYSTEM_PROMPT, 
    SENIOR_AI_ARCHITECT_PROMPT,
    ENHANCED_SENIOR_AI_ARCHITECT_PROMPT
)
from tools import (
    python_interpreter_tool,
    web_search_tool,
    memory_save_tool,
    memory_recall_tool
)
import re


class ReActAgent:
    """
    Autonomous AI/ML Engineer Agent using ReAct Pattern
    Supports both Standard and Professional (Senior AI Architect) modes
    """
    
    def __init__(self, model_name: Optional[str] = None, verbose: bool = True, 
                 professional_mode: bool = False, enhanced_mode: bool = False):
        self.verbose = verbose
        self.model_name = model_name or Config.OLLAMA_MODEL
        self.professional_mode = professional_mode
        self.enhanced_mode = enhanced_mode
        
        # Initialize LLM
        self.llm = ChatOllama(
            model=self.model_name,
            temperature=Config.AGENT_TEMPERATURE,
            base_url=Config.OLLAMA_BASE_URL,
            timeout=60
        )
        
        # Define available tools
        self.tools = {
            "python_interpreter": python_interpreter_tool,
            "web_search": web_search_tool,
            "memory_save": memory_save_tool,
            "memory_recall": memory_recall_tool,
        }
        
        # Conversation history
        self.conversation_history: List[Any] = []
        
        # Model comparison tracker (for enhanced mode)
        self.model_comparison_results = {}
        
        # Initialize system
        Config.initialize()
        
        if verbose:
            if enhanced_mode:
                print("✨ ENHANCED MODE: Principal AI/ML Architect (v3.0)")
                print("   ✅ Multi-Model Comparison")
                print("   ✅ SHAP Explainability & Feature Importance")
                print("   ✅ SMOTE for Imbalanced Data")
                print("   ✅ Advanced Hyperparameter Tuning")
                print("   ✅ Cross-Validation & Learning Curves")
                print("   ✅ ROC Curves & Professional Visualizations")
            elif professional_mode:
                print("🎓 PROFESSIONAL MODE: Senior AI Architect (v2.0)")
                print("   ✅ 4-Phase Workflow (EDA → Preprocessing → Modeling → Reporting)")
                print("   ✅ Model Comparison & Cross-Validation")
                print("   ✅ Hyperparameter Tuning")
                print("   ✅ Professional Reporting with Visualizations")
            else:
                print("⚡ STANDARD MODE: Enhanced ReAct Pattern (v1.0)")
                print("   ✅ Reasoning → Acting → Observing → Learning → Refining")
    
    def _parse_action(self, response: str) -> Optional[Dict[str, str]]:
        """
        Parse Action and Action Input from LLM response
        
        Returns:
            Dict with 'tool' and 'input' or None if no action found
        """
        # Look for Action: tool_name pattern
        action_match = re.search(r'Action:\s*(\w+)', response, re.IGNORECASE)
        
        if not action_match:
            return None
        
        tool_name = action_match.group(1).lower()
        
        # Look for Action Input
        input_match = re.search(
            r'Action Input:\s*\n?```(?:python)?\n?(.*?)\n?```',
            response,
            re.DOTALL | re.IGNORECASE
        )
        
        if not input_match:
            # Try without code blocks
            input_match = re.search(
                r'Action Input:\s*\n?(.*?)(?=\n\n|$)',
                response,
                re.DOTALL | re.IGNORECASE
            )
        
        if input_match:
            action_input = input_match.group(1).strip()
        else:
            action_input = ""
        
        return {
            "tool": tool_name,
            "input": action_input
        }
    
    def _execute_tool(self, tool_name: str, tool_input: str) -> str:
        """Execute a tool and return the result"""
        if tool_name not in self.tools:
            return f"Error: Unknown tool '{tool_name}'. Available tools: {', '.join(self.tools.keys())}"
        
        try:
            result = self.tools[tool_name](tool_input)
            return result
        except Exception as e:
            return f"Tool execution error: {str(e)}"
    
    def run(self, user_query: str, max_iterations: Optional[int] = None) -> str:
        """
        Run the agent to solve user's query
        
        Args:
            user_query: User's request
            max_iterations: Maximum reasoning loops (default from config)
            
        Returns:
            Final answer from the agent
        """
        max_iter = max_iterations or Config.MAX_ITERATIONS
        
        # Select prompt based on mode
        if self.enhanced_mode:
            system_prompt = ENHANCED_SENIOR_AI_ARCHITECT_PROMPT
            if self.verbose:
                print("\n✨ Using ENHANCED Mode - Principal AI Architect v3.0")
        elif self.professional_mode:
            system_prompt = SENIOR_AI_ARCHITECT_PROMPT
            if self.verbose:
                print("\n🎓 Using PROFESSIONAL Mode - Senior Architect v2.0")
        else:
            system_prompt = SYSTEM_PROMPT
            if self.verbose:
                print("\n⚡ Using STANDARD Mode - Enhanced ReAct v1.0")
        
        # Initialize conversation
        messages = [
            SystemMessage(content=system_prompt),
            HumanMessage(content=user_query)
        ]
        
        iteration = 0
        full_response = ""
        learnings = []  # Track learnings for summary
        
        while iteration < max_iter:
            iteration += 1
            
            if self.verbose:
                print(f"\n{'='*60}")
                print(f"ITERATION {iteration}")
                print(f"{'='*60}")
            
            # Get LLM response
            response = self.llm.invoke(messages)
            response_text = response.content
            full_response += f"\n{response_text}"
            
            if self.verbose:
                print(response_text)
            
            # Extract learning if present
            learning_match = re.search(
                r'Learning:\s*(.+?)(?=\n(?:Thought|Action|Final Answer)|\Z)',
                response_text,
                re.DOTALL | re.IGNORECASE
            )
            if learning_match:
                learning = learning_match.group(1).strip()
                learnings.append(learning)
                if self.verbose:
                    print(f"\n[💡 Learning Captured]: {learning[:100]}...")
            
            # Check if task is complete (Final Answer present)
            if "final answer:" in response_text.lower():
                # Extract final answer
                final_match = re.search(
                    r'Final Answer:\s*(.+)',
                    response_text,
                    re.DOTALL | re.IGNORECASE
                )
                if final_match:
                    final_answer = final_match.group(1).strip()
                    self.conversation_history.append({
                        "query": user_query,
                        "answer": final_answer,
                        "iterations": iteration,
                        "learnings": learnings
                    })
                    return final_answer
            
            # Parse and execute action
            action = self._parse_action(response_text)
            
            if not action:
                # No action found, prompt for continuation
                messages.append(AIMessage(content=response_text))
                messages.append(HumanMessage(
                    content="Continue with the next step. Remember to include Learning after each Observation. If task is complete, provide the Final Answer."
                ))
                continue
            
            # Execute tool
            tool_name = action["tool"]
            tool_input = action["input"]
            
            if self.verbose:
                print(f"\n[🔧 Executing Tool: {tool_name}]")
            
            observation = self._execute_tool(tool_name, tool_input)
            
            if self.verbose:
                print(f"\n[👁️ Observation]:")
                print(observation[:500] + "..." if len(observation) > 500 else observation)
            
            # Add to conversation
            messages.append(AIMessage(content=response_text))
            messages.append(HumanMessage(
                content=f"Observation: {observation}\n\nNow provide your Learning from this observation."
            ))
        
        return f"Maximum iterations ({max_iter}) reached. Learnings captured: {len(learnings)}\n\nLast response:\n{full_response}"
    
    def chat(self, user_message: str) -> str:
        """
        Simple chat interface (non-ReAct, direct response)
        """
        response = self.llm.invoke([
            SystemMessage(content="You are a helpful AI assistant."),
            HumanMessage(content=user_message)
        ])
        return response.content
