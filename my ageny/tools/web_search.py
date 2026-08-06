"""
Web Search Tool using DuckDuckGo
"""
from typing import List, Dict
from duckduckgo_search import DDGS


class WebSearchTool:
    """
    Web search capability for the agent
    """
    
    def __init__(self, max_results: int = 5):
        self.max_results = max_results
    
    def search(self, query: str, max_results: int = None) -> str:
        """
        Search the web for information
        
        Args:
            query: Search query
            max_results: Maximum number of results (default: 5)
            
        Returns:
            Formatted search results as string
        """
        try:
            results_count = max_results or self.max_results
            
            # Try main search
            try:
                with DDGS() as ddgs:
                    results = list(ddgs.text(query, max_results=results_count))
            except Exception as e:
                # Fallback: retry with simpler query
                print(f"Search attempt 1 failed: {e}. Retrying...")
                import time
                time.sleep(1)
                with DDGS() as ddgs:
                    results = list(ddgs.text(query, max_results=results_count))
            
            if not results:
                return f"No results found for '{query}'. Try rephrasing or using more specific terms."
            
            # Format results
            formatted_results = [f"Found {len(results)} results for '{query}':\n"]
            for idx, result in enumerate(results, 1):
                formatted_results.append(
                    f"{idx}. {result['title']}\n"
                    f"   URL: {result['href']}\n"
                    f"   {result['body'][:300]}{'...' if len(result['body']) > 300 else ''}\n"
                )
            
            return "\n".join(formatted_results)
            
        except Exception as e:
            return f"⚠️ Search error: {str(e)}\n\nSuggestion: The web search service may be temporarily unavailable. Try:\n1. Simplifying your query\n2. Using python_interpreter with available libraries\n3. Recalling from memory if this is a known topic"


# Tool wrapper for LangChain
def web_search_tool(query: str) -> str:
    """
    Search the web for information
    
    Args:
        query: Search query string
        
    Returns:
        Search results as formatted string
    """
    searcher = WebSearchTool(max_results=5)
    return searcher.search(query)
