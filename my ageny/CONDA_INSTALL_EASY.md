# 🚀 Easy Installation - Conda Environment

## ⚡ Quick 3-Step Setup

Your conda environment **python_eda** with Python 3.12.7 is already ready!

### Step 1: Open Command Prompt
```bash
# Press: Windows Key + R
# Type: cmd
# Press: Enter
```

### Step 2: Navigate to Project
```bash
cd "D:\my ageny"
```

### Step 3: Activate Environment & Install Core Packages
```bash
# Activate environment
C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda

# Install essential packages only (faster)
pip install langchain langchain-core langchain-ollama flask flask-cors jupyter-client ipykernel scikit-learn pandas numpy matplotlib
```

---

## 📦 What Gets Installed

**Essential Packages** (required):
- langchain - LLM framework
- flask - Web server
- jupyter-client - Code execution
- scikit-learn - ML
- pandas - Data
- numpy - Math
- matplotlib - Plotting

**Optional Packages** (install later if needed):
- xgboost - Advanced ML
- tensorflow - Deep Learning
- torch - PyTorch
- shap - Explainability

---

## 🎯 Installation Methods

### Method 1: Minimal Setup (Fast - 5 mins)
```bash
C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
cd "D:\my ageny"

pip install langchain langchain-core langchain-ollama flask flask-cors jupyter-client ipykernel scikit-learn pandas numpy matplotlib
```

### Method 2: Full Setup (Complete - 15 mins)
```bash
C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
cd "D:\my ageny"

pip install -r requirements-conda.txt
```

### Method 3: Batch File (Automatic)
Double-click:
```
conda_quickstart.bat
```

---

## ✅ Verify Installation

After installation, test it:

```bash
C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
cd "D:\my ageny"

python -c "from agent import ReActAgent; print('✅ Success!')"
```

---

## 🎓 Start Using

### Start Web Interface:
```bash
C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
cd "D:\my ageny"
python app.py
```
Then open: http://localhost:5000

### Start CLI:
```bash
C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
cd "D:\my ageny"
python cli.py
```

---

## 🆘 Troubleshooting

### "pip command not found"
**Solution:**
```bash
# Use full path to pip:
C:\Users\qaim9\miniconda3\envs\python_eda\Scripts\pip install langchain
```

### "ModuleNotFoundError"
**Solution:**
Ensure you activated the right environment:
```bash
C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
```

### Installation Too Slow
**Solution:**
Install only essentials first:
```bash
pip install langchain flask flask-cors jupyter-client ipykernel scikit-learn pandas numpy matplotlib
```

Then add more later:
```bash
pip install xgboost shap imbalanced-learn
```

---

## 📋 Installation Checklist

- [ ] Environment exists: `C:\Users\qaim9\miniconda3\envs\python_eda`
- [ ] Python version: 3.12.7
- [ ] Essential packages installed
- [ ] Can import: `from agent import ReActAgent`
- [ ] Web interface runs: `python app.py`
- [ ] Ollama running: `ollama serve`

---

## 🎉 You're Ready!

Once installation complete:

1. Activate environment: `C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda`
2. Start web: `python app.py`
3. Visit: http://localhost:5000
4. Try a query! 🚀

---

**Environment**: python_eda  
**Python**: 3.12.7  
**Status**: ✅ Ready to use!
