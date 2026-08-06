# AI/ML Engineer Agent - Quick Start

## Installation

1. Ensure Ollama is running:
   ```bash
   ollama serve
   ollama pull qwen2.5-coder:latest
   ```

2. Install dependencies:
   ```bash
   python -m venv venv
   venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. Configure:
   ```bash
   copy .env.example .env
   ```

## Usage

### Web Interface
```bash
python app.py
# Open: http://localhost:5000
```

### Command Line
```bash
python cli.py
```

### Python API
```python
from agent import ReActAgent
agent = ReActAgent()
result = agent.run("Train a model on iris dataset")
print(result)
```

## Example Queries

- "Load iris dataset and train a decision tree classifier"
- "Create random data, train linear regression, and plot results"
- "Search for latest transformer architecture papers"
- "Train KNN model and show confusion matrix"

## Tools Available

1. **python_interpreter** - Execute Python/ML code
2. **web_search** - Search for documentation/papers
3. **memory_save** - Save learnings
4. **memory_recall** - Retrieve past solutions

## Directory Structure

```
agent/          - Core agent logic
tools/          - Tool implementations
config/         - Settings and prompts
templates/      - Web UI
app.py          - Web server
cli.py          - Command line interface
```

Enjoy building with AI! 🚀
