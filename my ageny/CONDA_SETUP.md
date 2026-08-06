# 🚀 Quick Start Guide - Using Conda Environment

Perfect for users who already have **Miniconda** or **Anaconda** installed!

---

## ⚡ Super Fast Setup (3 Steps)

### Step 1: Activate Your Environment
```bash
conda activate python_eda
```

### Step 2: Install Dependencies
```bash
cd "D:\my ageny"
pip install -r requirements.txt
```

### Step 3: Start!
**Option A - Web Interface:**
```bash
start_web.bat
```

**Option B - CLI:**
```bash
start_cli.bat
```

---

## 📁 Available Batch Files (Conda Version)

### 🎯 Main Files:

1. **conda_quickstart.bat** ⭐
   - One-click setup for conda users
   - Checks environment
   - Installs dependencies
   - Verifies Ollama

2. **start_web.bat**
   - Starts web interface
   - Uses python_eda environment
   - Opens browser automatically

3. **start_cli.bat**
   - Starts CLI interface
   - Interactive mode

4. **setup.bat**
   - Creates conda environment if needed
   - Installs all dependencies
   - Full setup automation

5. **verify.bat**
   - Checks installation
   - Verifies all packages

---

## 🔧 First Time Setup

### Method 1: Automatic (Recommended)
```bash
# Double-click this file:
conda_quickstart.bat
```

### Method 2: Manual
```bash
# 1. Create environment (if not exists)
conda create -n python_eda python=3.11 -y

# 2. Activate environment
conda activate python_eda

# 3. Install dependencies
cd "D:\my ageny"
pip install -r requirements.txt

# 4. Verify
python verify_setup.py

# 5. Start using
start_web.bat
```

---

## 🎯 Your Conda Environment Details

**Environment Name:** `python_eda`  
**Location:** `C:\Users\qaim9\miniconda3\envs\python_eda`  
**Python Version:** 3.11+ (recommended)  

---

## 📦 Required Packages

All packages will be installed via pip in your conda environment:

```
langchain==0.3.12
langchain-ollama==0.2.2
flask==3.0.3
flask-cors==4.0.0
jupyter-client==8.6.3
ipykernel==6.29.5
duckduckgo-search==6.3.5
scikit-learn==1.6.1
pandas==2.2.3
numpy==1.26.4
matplotlib==3.9.3
seaborn==0.13.2
python-dotenv==1.0.0
```

---

## 🚀 Usage Examples

### Web Interface:
```bash
# Method 1: Batch file
start_web.bat

# Method 2: Manual
conda activate python_eda
python app.py
# Visit: http://localhost:5000
```

### CLI Interface:
```bash
# Method 1: Batch file
start_cli.bat

# Method 2: Manual
conda activate python_eda
python cli.py
```

### Run Tests:
```bash
conda activate python_eda
python example.py                  # Standard mode
python example_professional.py     # Professional mode
```

---

## 🔍 Troubleshooting

### Issue 1: "conda not recognized"
**Solution:**
```bash
# Add conda to PATH or use full path:
C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
```

### Issue 2: Environment not found
**Solution:**
```bash
# List all environments:
conda env list

# Create if missing:
conda create -n python_eda python=3.11 -y
```

### Issue 3: Package installation fails
**Solution:**
```bash
# Update pip first:
conda activate python_eda
python -m pip install --upgrade pip

# Then install packages:
pip install -r requirements.txt
```

### Issue 4: Ollama not running
**Solution:**
```bash
# Start Ollama service:
ollama serve

# In another terminal, pull model:
ollama pull qwen2.5-coder:latest
```

---

## 💡 Pro Tips

### Tip 1: Quick Environment Check
```bash
conda activate python_eda
python -c "from agent import ReActAgent; print('✅ Ready!')"
```

### Tip 2: Update Packages
```bash
conda activate python_eda
pip install --upgrade langchain langchain-ollama
```

### Tip 3: List Installed Packages
```bash
conda activate python_eda
pip list
```

### Tip 4: Export Your Environment
```bash
conda activate python_eda
pip freeze > my_requirements.txt
```

---

## 📊 Conda vs Venv Comparison

| Feature | Conda (python_eda) | Venv |
|---------|-------------------|------|
| Setup Speed | ⚡ Fast (already exists) | 🐌 Slower (needs creation) |
| Package Management | pip + conda | pip only |
| Environment Isolation | ✅ Excellent | ✅ Good |
| Pre-installed Packages | ✅ Many ML libraries | ❌ None |
| Disk Space | 📦 Larger | 📦 Smaller |
| **Recommended for You** | ✅ YES | ❌ No |

---

## 🎓 Advanced Usage

### Use Different Conda Environment:
Edit batch files and replace `python_eda` with your environment name:

```batch
REM In start_web.bat, change this line:
call C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda

REM To:
call C:\Users\qaim9\miniconda3\Scripts\activate.bat YOUR_ENV_NAME
```

### Create New Conda Environment for Project:
```bash
# Create with specific Python version:
conda create -n aiagent python=3.11 -y

# Activate:
conda activate aiagent

# Install dependencies:
pip install -r requirements.txt
```

---

## ✅ Quick Checklist

- [ ] Conda installed and working
- [ ] `python_eda` environment exists
- [ ] Dependencies installed (`pip install -r requirements.txt`)
- [ ] Ollama service running (`ollama serve`)
- [ ] Model downloaded (`ollama pull qwen2.5-coder:latest`)
- [ ] Verification passed (`python verify_setup.py`)

---

## 🎉 You're Ready!

Everything is set up with your **conda environment**!

### Quick Start Commands:
```bash
# Web Interface (Easy):
start_web.bat

# CLI (Power User):
start_cli.bat

# Verify Everything:
verify.bat
```

---

## 📚 Next Steps

1. ✅ **Run conda_quickstart.bat** (one-time setup)
2. ✅ **Double-click start_web.bat** (start using!)
3. ✅ **Try example queries** in the web interface
4. ✅ **Read MODE_COMPARISON.md** to understand Standard vs Professional modes

---

**Your conda environment `python_eda` is now powering the AI/ML Engineer Agent!** 🚀

For detailed documentation, see:
- [GETTING_STARTED.md](GETTING_STARTED.md)
- [PROFESSIONAL_MODE.md](PROFESSIONAL_MODE.md)
- [MODE_COMPARISON.md](MODE_COMPARISON.md)
