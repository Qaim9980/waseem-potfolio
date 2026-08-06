"""
Config package initialization
"""
from .settings import Config
from .prompts import SYSTEM_PROMPT
from .prompts_professional import SENIOR_AI_ARCHITECT_PROMPT
from .prompts_enhanced import ENHANCED_SENIOR_AI_ARCHITECT_PROMPT

__all__ = [
    'Config', 
    'SYSTEM_PROMPT', 
    'SENIOR_AI_ARCHITECT_PROMPT',
    'ENHANCED_SENIOR_AI_ARCHITECT_PROMPT'
]
