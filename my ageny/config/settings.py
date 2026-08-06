"""
Configuration settings for the AI/ML Engineer Agent
"""
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Agent configuration"""
    
    # Ollama Settings
    OLLAMA_BASE_URL = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
    OLLAMA_MODEL = os.getenv("OLLAMA_MODEL", "qwen2.5-coder:latest")
    
    # Agent Settings
    AGENT_TEMPERATURE = float(os.getenv("AGENT_TEMPERATURE", "0.1"))
    MAX_ITERATIONS = int(os.getenv("MAX_ITERATIONS", "15"))
    AGENT_VERBOSE = os.getenv("AGENT_VERBOSE", "true").lower() == "true"
    
    # Memory Settings
    ENABLE_MEMORY = os.getenv("ENABLE_MEMORY", "true").lower() == "true"
    MEMORY_DIR = os.getenv("MEMORY_DIR", "./agent_memory")
    
    # Output Settings
    OUTPUT_DIR = "./outputs"
    
    # Create necessary directories
    @staticmethod
    def initialize():
        """Create required directories"""
        os.makedirs(Config.MEMORY_DIR, exist_ok=True)
        os.makedirs(Config.OUTPUT_DIR, exist_ok=True)
