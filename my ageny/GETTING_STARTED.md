# 🎯 Getting Started - 5 Minutes Quick Guide

## 1️⃣ Verify Setup (2 minutes)

```powershell
# Run verification script
python verify_setup.py
```

If all checks pass ✅, continue!

If any check fails ❌:
- See [INSTALLATION.md](INSTALLATION.md) for detailed setup
- Check [UPDATE_SUMMARY.md](UPDATE_SUMMARY.md) for troubleshooting

---

## 2️⃣ Start the Agent (1 minute)

### Option A: Web Interface (Easiest)
```powershell
python app.py
```
Open: http://localhost:5000

### Option B: Command Line
```powershell
python cli.py
```

---

## 3️⃣ Try Your First Query (2 minutes)

### Example 1: Train a Model
```
Load the iris dataset and train a decision tree classifier. 
Show me the accuracy.
```

**What happens:**
1. Agent loads dataset
2. Trains the model
3. Shows accuracy
4. **Learns** what worked

### Example 2: Create Visualization
```
Create random sales data for 12 months, train linear regression, 
and save a plot as 'sales_forecast.png'
```

**What happens:**
1. Generates synthetic data
2. Trains regression model
3. Creates and saves plot
4. **Learns** about the data pattern

### Example 3: Research
```
Search for the latest papers on transformer architectures
```

**What happens:**
1. Searches web
2. Finds relevant papers
3. Summarizes findings
4. **Learns** and saves to memory

---

## 4️⃣ Understanding the Output

### Normal Flow:
```
Thought: I need to load the iris dataset first
Action: python_interpreter
Action Input: [code here]
Observation: Dataset loaded with 150 samples
Learning: Dataset is small and well-balanced, perfect for testing
Thought: Now I'll train the model
...
Final Answer: [Complete result]
```

### Key Points:
- **Thought** = What agent is planning
- **Action** = What tool it's using
- **Observation** = What happened
- **Learning** ⭐ = What it learned (NEW!)
- **Final Answer** = Your result

---

## 5️⃣ Available Tools

The agent has 4 tools:

1. **python_interpreter** 
   - Runs Python/ML code
   - Example: Training models, data analysis

2. **web_search**
   - Searches DuckDuckGo
   - Example: Finding papers, documentation

3. **memory_save**
   - Saves learnings
   - Example: Storing successful patterns

4. **memory_recall**
   - Retrieves past learnings
   - Example: Remembering solutions

---

## 6️⃣ Pro Tips

### Make it Learn:
Instead of: "Train a model"
Try: "Train a model and explain what you learned"

### Use Memory:
```
First query: "Train KNN on iris and save what works"
Later query: "Train KNN on wine dataset"
→ Agent recalls KNN best practices!
```

### Error Recovery:
If something fails, agent will:
1. Read the error
2. Learn from it
3. Fix and retry
4. Remember the solution

---

## 7️⃣ Example Session

```
You: Load iris, train decision tree, save learnings

Agent:
Thought: I'll load iris and explore it first
Action: python_interpreter
...
Observation: 150 samples, 4 features, 3 classes
Learning: Small dataset, well-balanced. Good for tree classifiers.

Thought: Now train decision tree
Action: python_interpreter
...
Observation: Accuracy 96%
Learning: Decision tree works great on iris. No need for scaling.

Thought: Save this to memory
Action: memory_save
...
Final Answer: Trained successfully! Accuracy: 96%
Key learning: Decision trees don't need feature scaling.
Saved to memory for future reference.
```

---

## 8️⃣ Common Use Cases

### Data Science:
- "Analyze this CSV and find correlations"
- "Build a classification model with 5-fold CV"
- "Create a confusion matrix and save it"

### Machine Learning:
- "Compare KNN, SVM, and Random Forest"
- "Train a neural network on MNIST"
- "Optimize hyperparameters for XGBoost"

### Research:
- "Find papers about BERT"
- "Search for time series forecasting methods"
- "Look up gradient descent optimization"

### Learning:
- "Teach me about PCA with a practical example"
- "Show me how cross-validation works"
- "Explain overfitting with code"

---

## 9️⃣ Files You Should Know

- **app.py** - Web interface
- **cli.py** - Command line
- **test_agent.py** - Run tests
- **verify_setup.py** - Check installation
- **config/prompts.py** - Agent's brain (system prompt)
- **.env** - Configuration

---

## 🔟 What's Next?

1. **Run tests** to see all features:
   ```powershell
   python test_agent.py
   ```

2. **Read full docs:**
   - [README.md](README.md) - Complete guide
   - [UPDATE_SUMMARY.md](UPDATE_SUMMARY.md) - What's new
   - [INSTALLATION.md](INSTALLATION.md) - Setup help

3. **Experiment:**
   - Try different models
   - Save learnings
   - Build your own workflows

---

## 🎓 Key Feature: Learning

This agent **learns and improves**!

After solving problems, it:
- ✅ Remembers what worked
- ✅ Avoids past mistakes  
- ✅ Applies learnings to new tasks
- ✅ Builds knowledge over time

**Example:**
```
Day 1: "Train Random Forest" 
       → Learns: RF needs balanced data

Day 2: "Train Random Forest on new data"
       → Recalls: Check data balance first!
       → Better results, faster
```

---

## 🚀 You're Ready!

Just run:
```powershell
python app.py
```

And start building! 🎉

---

**Questions?** Check [UPDATE_SUMMARY.md](UPDATE_SUMMARY.md) for detailed info!
