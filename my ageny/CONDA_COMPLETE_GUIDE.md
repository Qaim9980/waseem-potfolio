# 🎉 Complete Setup & Usage Guide - Conda Edition

## ✅ Your Environment Status

**Environment Name**: `python_eda`  
**Python Version**: 3.12.7  
**Location**: `C:\Users\qaim9\miniconda3\envs\python_eda`  
**Status**: ✅ Ready to use!

---

## 🚀 Quick Start (Choose One)

### Option 1: Automatic Setup (Recommended)
```bash
# Double-click this file in D:\my ageny:
auto_setup.bat
```
This will:
- Activate environment
- Install all essential packages
- Check Ollama service
- You're done! 🎯

### Option 2: Manual Setup
```bash
# Open Command Prompt (Win + R, type cmd)
cd "D:\my ageny"

# Activate environment
C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda

# Install packages
pip install langchain langchain-core langchain-ollama flask flask-cors jupyter-client ipykernel scikit-learn pandas numpy matplotlib seaborn requests python-dotenv
```

### Option 3: Batch Files
```bash
# First time setup:
setup.bat

# Then start:
start_web.bat
# OR
start_cli.bat
```

---

## 📊 Comparison: All Setup Methods

| Method | Time | Ease | Auto | Files |
|--------|------|------|------|-------|
| **auto_setup.bat** | 5-10 min | ⭐⭐⭐⭐⭐ | ✅ Yes | Double-click |
| **start_web.bat** | 2 min | ⭐⭐⭐⭐ | ✅ Yes | Double-click |
| **Manual CMD** | 8-12 min | ⭐⭐ | ❌ No | Type commands |
| **setup.bat** | 10 min | ⭐⭐⭐ | ✅ Yes | Double-click |

**Recommended**: Use `auto_setup.bat` for fastest result!

---

## 🎯 Three Ways to Start Using

### Way 1: Web Interface (Easiest)
```bash
# After setup, just run:
python app.py

# Then open in browser:
http://localhost:5000

# Features:
# ✅ Beautiful UI
# ✅ Mode selector (Standard/Professional)
# ✅ Example queries
# ✅ Real-time results
```

### Way 2: Command Line (Power Users)
```bash
# Run:
python cli.py

# Features:
# ✅ Interactive
# ✅ Live mode switching
# ✅ Direct queries
# ✅ No browser needed
```

### Way 3: Python Code (Developers)
```python
from agent import ReActAgent

# Standard Mode
agent = ReActAgent()
result = agent.run("Train a model on iris dataset")
print(result)

# Professional Mode
agent = ReActAgent(professional_mode=True)
result = agent.run("Complete ML system with EDA")
print(result)
```

---

## 🎓 Understanding Your Setup

### What's Installed

**Core ML/LLM Stack**:
- langchain - LLM orchestration
- flask - Web server
- scikit-learn - ML models
- pandas/numpy - Data handling
- matplotlib/seaborn - Visualization

**Code Execution**:
- jupyter-client - Run Python code safely
- ipykernel - Kernel management

**Web Search**:
- duckduckgo-search - Web research
- requests - HTTP library

**Optional** (install as needed):
- xgboost - Advanced ML
- lightgbm - Gradient boosting
- shap - Model explainability
- tensorflow/torch - Deep learning
- imbalanced-learn - Handle unbalanced data

### How It Works

```
You type query
    ↓
Agent thinks (ReAct pattern)
    ↓
Agent acts (executes code in Jupyter kernel)
    ↓
Agent observes (sees results)
    ↓
Agent learns (extracts insights)
    ↓
You see beautiful results + plots
```

---

## 💡 Usage Examples

### Example 1: Quick ML Task
```bash
python app.py
# Go to http://localhost:5000
# Type: "Train a Random Forest on iris dataset"
# Wait 30 seconds
# See results with plots!
```

### Example 2: Professional Analysis
```bash
# Switch to Professional Mode
# Type: "Complete ML system with EDA, tuning, and evaluation"
# Wait 3-5 minutes
# Get comprehensive analysis with 6+ plots!
```

### Example 3: Run Tests
```bash
python example.py                  # Standard examples
python example_professional.py     # Professional examples
```

---

## 🔧 Common Tasks

### Check Ollama is Running
```bash
ollama list
# Should show: qwen2.5-coder
```

### Restart Ollama Service
```bash
# Kill current process
taskkill /IM ollama.exe /F

# Start fresh
ollama serve
```

### Update Packages
```bash
C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
pip install --upgrade langchain flask pandas scikit-learn
```

### Install More Packages
```bash
C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
pip install xgboost shap imbalanced-learn
```

---

## ⚡ Performance Tips

**For Faster Responses**:
- Use Standard Mode instead of Professional
- Simpler queries execute faster
- Agent learns as it goes

**For Better Results**:
- Use Professional Mode for quality
- Provide more context in queries
- Let agent analyze before training

**For More Features**:
- Install advanced packages: `pip install xgboost lightgbm shap imbalanced-learn`
- Use SHAP for model explainability
- Use imbalanced-learn for unbalanced datasets

---

## 📁 Important Files

**To Start**:
- `auto_setup.bat` - One-click setup
- `start_web.bat` - Start web interface
- `start_cli.bat` - Start CLI

**Configuration**:
- `.env` - Environment variables
- `requirements.txt` - Python packages
- `requirements-conda.txt` - Conda packages

**Code**:
- `app.py` - Web server
- `cli.py` - CLI interface
- `agent/react_agent.py` - Core agent

**Documentation**:
- `README.md` - Overview
- `GETTING_STARTED.md` - Quick start
- `PROFESSIONAL_MODE.md` - Advanced features
- `MODE_COMPARISON.md` - Standard vs Professional

---

## 🆘 Troubleshooting

### Problem: "Ollama not found"
**Solution**:
```bash
# Install from: https://ollama.ai
# Start: ollama serve
# Pull model: ollama pull qwen2.5-coder:latest
```

### Problem: "Module not found"
**Solution**:
```bash
# Activate environment first:
C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda

# Then run your script
python app.py
```

### Problem: "Port 5000 already in use"
**Solution**:
```bash
# Kill process using port 5000:
netstat -ano | findstr :5000
taskkill /PID [PID] /F

# Or use different port:
python -c "from app import app; app.run(port=5001)"
```

### Problem: "Jupyter kernel error"
**Solution**:
```bash
# Register kernel:
python -m ipykernel install --user

# Then restart agent
python app.py
```

### Problem: Installation hung/too slow
**Solution**:
```bash
# Interrupt (Ctrl+C) and install essentials only:
pip install langchain flask scikit-learn pandas numpy matplotlib
```

---

## ✅ Verification Checklist

Run these commands to verify:

```bash
# Check environment
conda env list

# Check Python
C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
python --version

# Check packages
pip list | findstr "langchain flask pandas scikit"

# Check agent works
python -c "from agent import ReActAgent; print('✅ Ready!')"

# Check Ollama
curl http://localhost:11434/api/tags
```

All should show success! ✅

---

## 🎉 You're All Set!

### Next Steps:

1. **Double-click**: `auto_setup.bat` (if not done yet)
2. **Start web**: `start_web.bat`
3. **Open browser**: http://localhost:5000
4. **Type query**: "Train a simple model"
5. **Watch it work!** 🚀

### For Production Use:

- Use Professional Mode for quality
- Install advanced packages (xgboost, shap, etc.)
- Review generated plots
- Follow agent recommendations

### For Development:

- Modify prompts in `config/`
- Customize tools in `tools/`
- Create new examples
- Contribute improvements

---

## 📞 Support

**If something doesn't work**:

1. Check troubleshooting section above
2. Verify conda environment is activated
3. Ensure Ollama is running
4. Check internet connection
5. Review error messages carefully

**Most Common Issues**:
- ❌ Ollama not running → `ollama serve`
- ❌ Wrong environment → `C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda`
- ❌ Missing packages → `pip install -r requirements.txt`
- ❌ Port conflict → Use different port or kill process

---

## 🚀 Ready to Build Amazing AI Systems!

**Environment**: ✅ python_eda (Python 3.12.7)  
**Framework**: ✅ LangChain + Flask  
**Packages**: ✅ All essential installed  
**Mode**: ✅ Standard & Professional  
**Status**: ✅ Production Ready  

### Start Now:
```bash
# Double-click in D:\my ageny folder:
auto_setup.bat
```

Then visit: **http://localhost:5000** 🎯

---

**Version**: 3.0 with Conda Support  
**Last Updated**: January 15, 2026  
**Status**: Fully Operational ✅
