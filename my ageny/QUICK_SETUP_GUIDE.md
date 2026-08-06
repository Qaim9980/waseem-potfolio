# 🎯 Quick Setup & Testing Guide

**Complete Agent System - All Improvements Applied**

---

## ✅ What's Ready

Your AI/ML Agent now includes:
- ✨ **3 Operation Modes** (Standard, Professional, Enhanced)
- 🔧 **Fixed All Import Errors**
- 🛡️ **Robust Error Handling**
- 📊 **Model Comparison & SHAP Support**
- ⚙️ **SMOTE for Imbalanced Data**
- 🎨 **Professional Visualizations**

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Verify Python Environment
```bash
cd d:\my ageny
C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
python --version
# Should show: Python 3.12.7
```

### Step 2: Install Dependencies
```bash
pip install -r requirements.txt
```

OR (for faster installation):
```bash
pip install -r requirements-conda.txt
```

### Step 3: Start the Agent

**Option A: CLI (Recommended for testing)**
```bash
python cli.py
```

**Option B: Web Interface**
```bash
python app.py
# Visit: http://localhost:5000
```

---

## 🎓 CLI Quick Test

### Start:
```
python cli.py
```

### Select Mode:
```
Select Mode:
  1. Standard Mode (Quick tasks)
  2. Professional Mode (Senior AI Architect)
  3. Enhanced Mode (Principal AI Architect - Advanced)

Enter choice (1, 2, or 3, default=1): 1
```

### Try a Query (Standard Mode):
```
📝 Your Query:
> Load iris dataset and train a simple classifier

[Agent will:
  1. Load iris data
  2. Split train/test
  3. Train classifier
  4. Show accuracy]
```

### Try Mode Switching:
```
📝 Your Query:
> mode

Current Mode: Standard ⚡
  1. Standard Mode ⚡
  2. Professional Mode 🎓
  3. Enhanced Mode ✨
Switch to (1/2/3): 2

✓ Switched to Professional 🎓 mode
```

### Try Professional Mode Query:
```
📝 Your Query:
> Build customer churn prediction with EDA and hyperparameter tuning

[Agent will:
  Phase 1: Load data, show EDA visualizations
  Phase 2: Handle missing values, scale features
  Phase 3: Train multiple models, tune hyperparameters
  Phase 4: Generate visualizations and report]
```

---

## 🌐 Web Interface Quick Test

### Start Server:
```bash
python app.py
```

### Open Browser:
```
http://localhost:5000
```

### Send Query (Standard Mode):
```javascript
// In browser console or via API:
fetch('/api/query', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        query: 'Load iris and train decision tree',
        professional: false,
        enhanced: false
    })
})
.then(r => r.json())
.then(d => console.log(d.result))
```

### Send Query (Enhanced Mode):
```javascript
fetch('/api/query', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        query: 'Compare models on iris with SHAP analysis',
        professional: true,
        enhanced: true  // ← This enables Enhanced mode
    })
})
.then(r => r.json())
.then(d => console.log(d.result))
```

---

## 📋 Test Scenarios

### Test 1: Standard Mode (2-3 minutes)
```
Query: "Create random data with 2 features, split into train/test, and train a linear regression model"

Expected:
✓ Data created
✓ Train/test split done
✓ Model trained
✓ Accuracy/R² score shown
```

### Test 2: Professional Mode (10-15 minutes)
```
Query: "Load iris dataset, perform complete EDA, preprocess, train multiple models, and provide a report"

Expected:
✓ Correlation heatmap
✓ Distribution plots
✓ Multiple models compared
✓ Hyperparameters tuned
✓ Visualizations saved
✓ Professional report generated
```

### Test 3: Enhanced Mode (20-30 minutes)
```
Query: "Load a classification dataset, compare 3+ models with cross-validation, apply SMOTE for imbalance, generate SHAP plots and learning curves"

Expected:
✓ Detailed EDA
✓ SMOTE applied
✓ 3+ models compared
✓ SHAP summary plots
✓ ROC curves
✓ Learning curves
✓ Model comparison charts
✓ Strategic recommendations
```

---

## 🔍 Verification Checklist

After improvements, verify these files exist:

- ✅ `config/__init__.py` - Has ENHANCED_SENIOR_AI_ARCHITECT_PROMPT import
- ✅ `config/prompts.py` - Standard mode prompt
- ✅ `config/prompts_professional.py` - Professional mode prompt
- ✅ `config/prompts_enhanced.py` - Enhanced mode prompt
- ✅ `agent/react_agent.py` - Has enhanced_mode parameter
- ✅ `app.py` - Has enhanced parameter support
- ✅ `cli.py` - Has 3-mode selection system
- ✅ `tools/python_executor.py` - 60s timeout configured
- ✅ `promt.txt` - All prompts saved

Check with:
```bash
python verify_setup.py
```

---

## 🛠️ Troubleshooting

### Issue 1: "Can't locate Ollama"
**Solution**: Ensure Ollama is running
```bash
ollama serve
# In another terminal, or:
python start_ollama.bat  # Windows
```

### Issue 2: "Module not found" errors
**Solution**: Install requirements
```bash
pip install -r requirements.txt
```

### Issue 3: Timeout errors
**Solution**: Code took too long. Use Standard mode first, or simplify queries.

### Issue 4: SHAP not working
**Solution**: Install SHAP
```bash
pip install shap
```

---

## 📊 Expected File Structure

```
d:\my ageny\
├── config/
│   ├── __init__.py              ✓ Fixed imports
│   ├── settings.py
│   ├── prompts.py               ✓ Standard mode
│   ├── prompts_professional.py  ✓ Professional mode
│   ├── prompts_enhanced.py      ✓ Enhanced mode
│
├── agent/
│   ├── __init__.py
│   ├── react_agent.py           ✓ Enhanced with 3 modes
│
├── tools/
│   ├── __init__.py              ✓ Updated exports
│   ├── python_executor.py       ✓ 60s timeout
│   ├── web_search.py
│   ├── memory.py
│
├── templates/
│   ├── index.html
│
├── outputs/                      ✓ Visualizations saved here
├── agent_memory/                 ✓ Learnings stored here
│
├── app.py                        ✓ Web interface updated
├── cli.py                        ✓ 3-mode selection added
├── promt.txt                     ✓ All prompts saved
├── MODEL_IMPROVEMENTS.md         ✓ New improvements doc
├── requirements.txt
└── ... (other files)
```

---

## 🎯 Mode Selection Flowchart

```
┌─────────────────────────────────────┐
│   Start AI/ML Engineer Agent        │
└────────────┬────────────────────────┘
             │
      ┌──────┴──────┐
      │ Select Mode │
      └──────┬──────┘
             │
    ┌────────┼────────┐
    │        │        │
    ▼        ▼        ▼
  ⚡ST     🎓PROF    ✨ENH
    │        │        │
    │        │        └─────────────────┐
    │        │                          │
    │        ▼                          ▼
    │     4-Phase                   4-Phase +
    │     + ReAct                   Advanced
    │                                   │
    │        │                          │
    │        │                    ✅ Multi-model
    │        │                    ✅ SHAP
    │        │                    ✅ SMOTE
    │        │                    ✅ Learning Curves
    │        │                    ✅ ROC Curves
    │        │                          │
    ▼        ▼                          ▼
    └────────┴──────────────────────────┘
             │
      ┌──────▼──────┐
      │ Run Agent   │
      └──────┬──────┘
             │
    ┌────────┴──────────────┐
    │                       │
    ▼                       ▼
  Outputs/              agent_memory/
  Visualizations        Learnings
```

---

## 📈 Performance Expectations

### Standard Mode (⚡)
- Speed: 2-5 min per query
- Memory: 500MB-1GB
- Best for: Experimentation
- Example: "Train classifier on iris"

### Professional Mode (🎓)
- Speed: 10-30 min per query
- Memory: 1-3GB
- Best for: Production projects
- Example: "Build churn prediction system"

### Enhanced Mode (✨)
- Speed: 30-60+ min per query
- Memory: 2-4GB
- Best for: Complex analysis
- Example: "Compare models with SHAP analysis"

---

## 🚀 Next Actions

### Immediate
1. [ ] Run CLI: `python cli.py`
2. [ ] Test Standard mode with simple query
3. [ ] Switch to Professional mode
4. [ ] Test with slightly complex query

### After Verification
1. [ ] Test Enhanced mode (⚠️ Takes longer)
2. [ ] Review outputs in `./outputs/`
3. [ ] Check learnings in `agent_memory/learnings.json`
4. [ ] Test web interface: `python app.py`

### Integration
1. [ ] Use as Python API in your own scripts
2. [ ] Embed in applications
3. [ ] Connect to databases or data pipelines

---

## 💾 Saving Your Work

All outputs automatically saved to:
```
./outputs/
  ├── eda_analysis.png
  ├── model_evaluation.png
  ├── learning_curves.png
  ├── shap_summary.png
  ├── roc_curve.png
  └── model_comparison.png

./agent_memory/
  └── learnings.json  (learnings from past tasks)
```

---

## 📞 Quick Help

**In CLI**: Type `help` for detailed information

**In code**: 
```python
from agent import ReActAgent

# See what modes are available
help(ReActAgent.__init__)
```

---

## ✅ You're All Set!

Your AI/ML Agent is now:
- ✅ Fully functional with 3 modes
- ✅ Error-proof with timeouts and recovery
- ✅ Production-ready with SHAP and SMOTE
- ✅ Well-documented with examples
- ✅ Ready for serious ML tasks

**Start using**: `python cli.py` or `python app.py`

---

Generated: January 15, 2026  
Agent Version: v3.0 (Principal AI/ML Architect)
Status: 🟢 READY FOR PRODUCTION
