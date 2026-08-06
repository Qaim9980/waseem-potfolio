# 🤖 AI/ML Engineer Agent

**Autonomous AI/ML Engineer powered by ReAct Pattern**

A fully autonomous agent that can solve complex machine learning tasks by reasoning, executing code, searching the web, and learning from past experiences.

## ✨ Features

- 🧠 **ReAct Pattern**: Follows Reason → Act → Observe → Refine loop
- 🐍 **Python Code Execution**: Run ML code in isolated Jupyter kernel
- 🔍 **Web Search**: Find documentation, papers, and solutions online
- 💾 **Memory System**: Learn from past tasks and improve over time
- 🌐 **Web Interface**: Beautiful, responsive UI for interaction
- 🔄 **Self-Learning**: Continuously improves by storing successful patterns

## 🚀 Quick Start

### Prerequisites

1. **Python 3.9+** installed
2. **Ollama** installed and running
   ```bash
   # Install Ollama from https://ollama.ai
   # Then pull a model:
   ollama pull qwen2.5-coder:latest
   ```

### Installation

1. **Clone/Navigate to project**
   ```bash
   cd "d:\my ageny"
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   venv\Scripts\activate  # Windows
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment**
   ```bash
   copy .env.example .env
   # Edit .env if needed
   ```

### Run the Agent

#### Option 1: Web Interface (Recommended)
```bash
python app.py
```
Then open browser: `http://localhost:5000`

#### Option 2: Command Line
```bash
python cli.py
```

#### Option 3: Python API
```python
from agent import ReActAgent

agent = ReActAgent()
result = agent.run("Train a linear regression model on iris dataset")
print(result)
```

## 📖 Usage Examples

### Example 1: Train ML Model
```
User: "Load iris dataset and train a decision tree classifier with accuracy"

Agent will:
1. Import necessary libraries
2. Load iris dataset
3. Split data into train/test
4. Train decision tree
5. Calculate and report accuracy
```

### Example 2: Data Analysis
```
User: "Create random sales data for 12 months, train linear regression, and plot the results"

Agent will:
1. Generate synthetic data
2. Train regression model
3. Make predictions
4. Create and save visualization
5. Report model performance
```

### Example 3: Research Task
```
User: "Search for recent advancements in transformer architectures"

Agent will:
1. Search web for latest papers
2. Summarize findings
3. Save learnings to memory
```

## 🛠️ Architecture

```
my ageny/
├── agent/
│   ├── react_agent.py      # Core ReAct agent logic
│   └── __init__.py
├── tools/
│   ├── python_executor.py  # Python code execution
│   ├── web_search.py       # DuckDuckGo search
│   ├── memory.py           # Learning & memory
│   └── __init__.py
├── config/
│   ├── settings.py         # Configuration
│   ├── prompts.py          # System prompt
│   └── __init__.py
├── templates/
│   └── index.html          # Web UI
├── app.py                  # Flask web server
├── cli.py                  # Command line interface
└── requirements.txt
```

## 🔧 Configuration

Edit `.env` file:

```env
# Ollama Settings
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=qwen2.5-coder:latest

# Agent Behavior
AGENT_TEMPERATURE=0.1       # Lower = more focused
MAX_ITERATIONS=15           # Max reasoning loops
AGENT_VERBOSE=true          # Show detailed output

# Memory
ENABLE_MEMORY=true
MEMORY_DIR=./agent_memory
```

## 🎯 How It Works

### ReAct Pattern
The agent follows a structured thinking process:

1. **Thought**: Analyze the problem and plan next step
2. **Action**: Execute a tool (code, search, memory)
3. **Observation**: Review the output
4. **Refinement**: If errors occur, adjust and retry
5. **Final Answer**: Provide comprehensive result

### Available Tools

| Tool | Purpose | Example |
|------|---------|---------|
| `python_interpreter` | Execute Python code | Train models, analyze data |
| `web_search` | Search for information | Find documentation, papers |
| `memory_save` | Store learnings | Save successful patterns |
| `memory_recall` | Retrieve past solutions | Leverage previous work |

## 📊 Example Session

```
User Query: "Train a KNN classifier on wine dataset and show accuracy"

Thought: I need to first load the wine dataset and explore it.
Action: python_interpreter
Action Input: 
from sklearn.datasets import load_wine
import pandas as pd
wine = load_wine()
print(wine.DESCR)

Observation: Wine dataset has 178 samples, 13 features, 3 classes...

Thought: Now I'll split data and train KNN model.
Action: python_interpreter
Action Input:
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
...

Observation: Accuracy: 0.9722 (97.22%)

Final Answer: I've successfully trained a K-Nearest Neighbors classifier 
on the wine dataset. The model achieved 97.22% accuracy on the test set...
```

## 🌟 Advanced Features

### Memory System
The agent learns and improves:
```python
# Agent automatically saves successful patterns
agent.run("Train XGBoost on iris dataset")

# Later, it can recall this approach
agent.run("Train XGBoost on wine dataset")  
# Agent remembers XGBoost usage pattern
```

### Multi-Step Tasks
Handle complex workflows:
```python
agent.run("""
1. Load titanic dataset
2. Clean missing values
3. Create feature engineering
4. Train Random Forest
5. Evaluate with cross-validation
6. Plot feature importance
""")
```

## 🐛 Troubleshooting

### Ollama Connection Error
```bash
# Check if Ollama is running
ollama list

# Start Ollama service
ollama serve
```

### Kernel Initialization Failed
```bash
# Install Jupyter kernel
pip install jupyter ipykernel
python -m ipykernel install --user
```

### Web Search Not Working
```bash
# Reinstall search library
pip install --upgrade duckduckgo-search
```

## 🤝 Contributing

Feel free to:
- Add new tools (database connections, API integrations)
- Improve prompts for better reasoning
- Enhance the web UI
- Add more ML libraries

## 📝 License

MIT License - Use freely for your projects!

## 🙏 Credits

Built with:
- [LangChain](https://langchain.com) - Agent framework
- [Ollama](https://ollama.ai) - Local LLM runtime
- [Flask](https://flask.palletsprojects.com) - Web framework
- [Jupyter](https://jupyter.org) - Code execution

---

**Made with ❤️ for the AI/ML community**

Need help? Check the examples in the web interface or run `python cli.py --help`
