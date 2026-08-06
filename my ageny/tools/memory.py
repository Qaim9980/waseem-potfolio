"""
Memory System for Learning and Retrieval
Agent can save and recall learnings from past tasks
"""
import json
import os
from datetime import datetime
from typing import List, Dict, Optional
from pathlib import Path


class AgentMemory:
    """
    Persistent memory system for the agent to learn from past experiences
    """
    
    def __init__(self, memory_dir: str = "./agent_memory"):
        self.memory_dir = Path(memory_dir)
        self.memory_dir.mkdir(exist_ok=True)
        self.memory_file = self.memory_dir / "learnings.json"
        self._load_memory()
    
    def _load_memory(self):
        """Load existing memories from disk"""
        if self.memory_file.exists():
            with open(self.memory_file, 'r', encoding='utf-8') as f:
                self.memories = json.load(f)
        else:
            self.memories = []
    
    def _save_memory(self):
        """Persist memories to disk"""
        with open(self.memory_file, 'w', encoding='utf-8') as f:
            json.dump(self.memories, f, indent=2, ensure_ascii=False)
    
    def save(self, topic: str, content: str, tags: List[str] = None) -> str:
        """
        Save a learning/pattern for future use
        
        Args:
            topic: Topic or title of the learning
            content: Detailed content/solution/pattern
            tags: Optional tags for categorization
            
        Returns:
            Success message
        """
        try:
            memory_entry = {
                "id": len(self.memories) + 1,
                "topic": topic,
                "content": content,
                "tags": tags or [],
                "timestamp": datetime.now().isoformat(),
            }
            
            self.memories.append(memory_entry)
            self._save_memory()
            
            return f"✓ Learning saved: '{topic}' (ID: {memory_entry['id']})"
            
        except Exception as e:
            return f"Error saving memory: {str(e)}"
    
    def recall(self, query: str, max_results: int = 3) -> str:
        """
        Retrieve relevant past learnings
        
        Args:
            query: Search query
            max_results: Maximum memories to return
            
        Returns:
            Formatted string of relevant memories
        """
        if not self.memories:
            return "No past learnings found in memory."
        
        # Simple keyword-based search
        query_lower = query.lower()
        relevant = []
        
        for memory in self.memories:
            score = 0
            # Check topic
            if query_lower in memory['topic'].lower():
                score += 10
            # Check content
            if query_lower in memory['content'].lower():
                score += 5
            # Check tags
            for tag in memory.get('tags', []):
                if query_lower in tag.lower():
                    score += 3
            
            if score > 0:
                relevant.append((score, memory))
        
        # Sort by relevance and limit results
        relevant.sort(reverse=True, key=lambda x: x[0])
        top_results = [mem for _, mem in relevant[:max_results]]
        
        if not top_results:
            return f"No relevant learnings found for '{query}'."
        
        # Format results
        formatted = ["=== RELEVANT PAST LEARNINGS ===\n"]
        for idx, mem in enumerate(top_results, 1):
            formatted.append(
                f"{idx}. {mem['topic']} (ID: {mem['id']})\n"
                f"   Date: {mem['timestamp'][:10]}\n"
                f"   {mem['content']}\n"
                f"   Tags: {', '.join(mem.get('tags', []))}\n"
            )
        
        return "\n".join(formatted)
    
    def list_all(self, limit: int = 10) -> str:
        """List recent memories"""
        if not self.memories:
            return "Memory is empty."
        
        recent = self.memories[-limit:][::-1]  # Last N, reversed
        
        formatted = ["=== RECENT LEARNINGS ===\n"]
        for mem in recent:
            formatted.append(
                f"• {mem['topic']} (ID: {mem['id']}) - {mem['timestamp'][:10]}\n"
            )
        
        return "\n".join(formatted)


# Tool wrappers for LangChain
def memory_save_tool(topic: str, content: str, tags: str = "") -> str:
    """
    Save a learning to agent's memory
    
    Args:
        topic: Learning topic/title
        content: Detailed content
        tags: Comma-separated tags (optional)
        
    Returns:
        Success message
    """
    from config import Config
    memory = AgentMemory(Config.MEMORY_DIR)
    tag_list = [t.strip() for t in tags.split(",")] if tags else []
    return memory.save(topic, content, tag_list)


def memory_recall_tool(query: str) -> str:
    """
    Recall relevant past learnings
    
    Args:
        query: Search query
        
    Returns:
        Relevant memories as formatted string
    """
    from config import Config
    memory = AgentMemory(Config.MEMORY_DIR)
    return memory.recall(query, max_results=3)
