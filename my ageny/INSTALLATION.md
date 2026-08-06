# 🚀 Complete Installation Guide

## Prerequisites

### 1. Python 3.9+
Check your Python version:
```powershell
python --version
```

### 2. Ollama Installation
Download and install from: https://ollama.ai

After installation:
```powershell
# Start Ollama service
ollama serve

# In another terminal, pull the model
ollama pull qwen2.5-coder:latest

# Verify installation
ollama list
```

---

## Step-by-Step Installation

### Step 1: Navigate to Project
```powershell
cd "d:\my ageny"
```

### Step 2: Create Virtual Environment
```powershell
# Create venv
python -m venv venv

# Activate (PowerShell)
.\venv\Scripts\Activate.ps1

# If you get execution policy error:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Step 3: Install Dependencies
```powershell
# Upgrade pip first
python -m pip install --upgrade pip

# Install all requirements
pip install -r requirements.txt
```

**Expected Installation Time:** 2-5 minutes

### Step 4: Configure Environment
```powershell
# Copy example config
copy .env.example .env

# Edit .env if needed (optional)
notepad .env
```

### Step 5: Verify Installation
```powershell
# Check if everything is installed
pip list

# You should see:
# - langchain
# - flask
# - jupyter-client
# - scikit-learn
# - pandas
# - numpy
# etc.
```

---

## Running the Agent

### Option 1: Web Interface (Recommended)
```powershell
python app.py
```

Then open browser: **http://localhost:5000**

### Option 2: Command Line
```powershell
python cli.py
```

Type your queries interactively.

### Option 3: Python Script
```python
from agent import ReActAgent

agent = ReActAgent()
result = agent.run("Train a decision tree on iris dataset")
print(result)
```

### Option 4: Run Tests
```powershell
python test_agent.py
```

Select test number and press Enter.

---

## Troubleshooting

### Issue: Ollama Not Found
**Error:** `Connection refused to http://localhost:11434`

**Solution:**
```powershell
# Start Ollama in a separate terminal
ollama serve
```

### Issue: Module Not Found
**Error:** `ModuleNotFoundError: No module named 'flask'`

**Solution:**
```powershell
# Make sure venv is activated
.\venv\Scripts\Activate.ps1

# Reinstall dependencies
pip install -r requirements.txt
```

### Issue: Jupyter Kernel Error
**Error:** `Kernel failed to start`

**Solution:**
```powershell
pip install --upgrade jupyter ipykernel
python -m ipykernel install --user
```

### Issue: Permission Denied (PowerShell)
**Error:** `Cannot be loaded because running scripts is disabled`

**Solution:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Issue: Port Already in Use
**Error:** `Address already in use: 5000`

**Solution:**
```powershell
# Change port in app.py (last line):
app.run(host='0.0.0.0', port=5001, debug=True)
```

---

## Conda Environment (Alternative)

If you prefer Conda:

```powershell
# Create conda environment
conda create -n ai_agent python=3.11 -y

# Activate
conda activate ai_agent

# Install dependencies
pip install -r requirements.txt
```

---

## Verification Checklist

Before running, ensure:

- [ ] Python 3.9+ installed
- [ ] Ollama installed and running (`ollama serve`)
- [ ] Model downloaded (`ollama pull qwen2.5-coder:latest`)
- [ ] Virtual environment created and activated
- [ ] Dependencies installed (`pip install -r requirements.txt`)
- [ ] `.env` file created (copy from `.env.example`)

---

## Quick Test

After installation:

```powershell
python -c "from agent import ReActAgent; print('✅ Installation successful!')"
```

If you see `✅ Installation successful!`, you're ready to go!

---

## What's Next?

1. **Start the web interface:**
   ```powershell
   python app.py
   ```

2. **Try example queries:**
   - "Load iris dataset and train a decision tree"
   - "Create random data and plot a regression line"
   - "Search for transformer architecture papers"

3. **Run tests to verify everything:**
   ```powershell
   python test_agent.py
   ```

4. **Read the documentation:**
   - [README.md](README.md) - Full documentation
   - [UPDATE_SUMMARY.md](UPDATE_SUMMARY.md) - What's new
   - [QUICKSTART.md](QUICKSTART.md) - Quick reference

---

## System Requirements

**Minimum:**
- RAM: 4 GB
- Disk: 5 GB free space
- Internet: Required for web search

**Recommended:**
- RAM: 8 GB+
- Disk: 10 GB free space
- GPU: Optional (for deep learning tasks)

---

## Support

If you encounter issues:

1. Check [UPDATE_SUMMARY.md](UPDATE_SUMMARY.md) for common problems
2. Run tests: `python test_agent.py`
3. Check Ollama status: `ollama list`
4. Verify Python: `python --version`

---

**Installation complete! Happy coding! 🎉**
