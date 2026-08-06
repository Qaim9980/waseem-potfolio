"""
System Verification Script
Checks if all components are properly configured
"""
import sys
import os

def print_status(check_name, status, message=""):
    """Print colored status"""
    icon = "✅" if status else "❌"
    print(f"{icon} {check_name}: {message if message else ('OK' if status else 'FAILED')}")
    return status

def check_python_version():
    """Check Python version"""
    version = sys.version_info
    is_valid = version.major == 3 and version.minor >= 9
    print_status("Python Version", is_valid, f"{version.major}.{version.minor}.{version.micro}")
    return is_valid

def check_imports():
    """Check if all required packages are installed"""
    packages = {
        "langchain": "LangChain",
        "langchain_ollama": "LangChain Ollama",
        "flask": "Flask",
        "jupyter_client": "Jupyter Client",
        "sklearn": "Scikit-Learn",
        "pandas": "Pandas",
        "numpy": "NumPy",
        "matplotlib": "Matplotlib",
    }
    
    all_ok = True
    for module, name in packages.items():
        try:
            __import__(module)
            print_status(f"Package: {name}", True)
        except ImportError:
            print_status(f"Package: {name}", False)
            all_ok = False
    
    return all_ok

def check_ollama():
    """Check if Ollama is accessible"""
    try:
        import requests
        response = requests.get("http://localhost:11434/api/tags", timeout=2)
        if response.status_code == 200:
            models = response.json().get("models", [])
            model_names = [m["name"] for m in models]
            print_status("Ollama Service", True, f"Running ({len(models)} models)")
            
            # Check for recommended model
            has_qwen = any("qwen" in name for name in model_names)
            print_status("Qwen Model", has_qwen, "Found" if has_qwen else "Not found")
            return True
        else:
            print_status("Ollama Service", False, "Not responding")
            return False
    except Exception as e:
        print_status("Ollama Service", False, str(e))
        return False

def check_project_structure():
    """Check if all required files exist"""
    required_files = [
        "config/prompts.py",
        "config/settings.py",
        "agent/react_agent.py",
        "tools/python_executor.py",
        "tools/web_search.py",
        "tools/memory.py",
        "app.py",
        "cli.py",
        ".env.example",
        "requirements.txt",
    ]
    
    all_ok = True
    for file in required_files:
        exists = os.path.exists(file)
        if not exists:
            print_status(f"File: {file}", False)
            all_ok = False
    
    if all_ok:
        print_status("Project Structure", True, f"All {len(required_files)} files present")
    
    return all_ok

def check_environment():
    """Check .env file"""
    env_exists = os.path.exists(".env")
    if not env_exists:
        print_status(".env File", False, "Not found (copy from .env.example)")
        return False
    else:
        print_status(".env File", True, "Present")
        return True

def check_memory_dir():
    """Check if memory directory is accessible"""
    from config import Config
    Config.initialize()
    
    memory_exists = os.path.exists(Config.MEMORY_DIR)
    print_status("Memory Directory", memory_exists, Config.MEMORY_DIR)
    return memory_exists

def main():
    """Run all verification checks"""
    print("="*70)
    print("🔍 AI/ML ENGINEER AGENT - SYSTEM VERIFICATION")
    print("="*70)
    print()
    
    checks = []
    
    # Python version
    print("📌 Checking Python...")
    checks.append(check_python_version())
    print()
    
    # Project structure
    print("📌 Checking Project Files...")
    checks.append(check_project_structure())
    print()
    
    # Environment
    print("📌 Checking Environment...")
    checks.append(check_environment())
    print()
    
    # Packages
    print("📌 Checking Python Packages...")
    checks.append(check_imports())
    print()
    
    # Ollama
    print("📌 Checking Ollama...")
    checks.append(check_ollama())
    print()
    
    # Memory
    print("📌 Checking Memory System...")
    checks.append(check_memory_dir())
    print()
    
    # Summary
    print("="*70)
    passed = sum(checks)
    total = len(checks)
    
    if passed == total:
        print("🎉 ALL CHECKS PASSED! System is ready to use.")
        print()
        print("Next steps:")
        print("  1. Run: python app.py      (Web interface)")
        print("  2. Run: python cli.py      (Command line)")
        print("  3. Run: python test_agent.py  (Run tests)")
    else:
        print(f"⚠️  {total - passed} check(s) failed. Please fix the issues above.")
        print()
        print("Common solutions:")
        print("  1. Install packages: pip install -r requirements.txt")
        print("  2. Start Ollama: ollama serve")
        print("  3. Pull model: ollama pull qwen2.5-coder:latest")
        print("  4. Copy .env: copy .env.example .env")
    
    print("="*70)
    return passed == total

if __name__ == "__main__":
    try:
        success = main()
        sys.exit(0 if success else 1)
    except Exception as e:
        print(f"\n❌ Verification failed with error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
