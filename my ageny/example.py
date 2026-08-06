"""
Example usage of the AI/ML Engineer Agent
"""
from agent import ReActAgent
from config import Config

# Initialize configuration
Config.initialize()

# Create agent instance
agent = ReActAgent(verbose=True)

# Example 1: Simple ML task
print("=" * 70)
print("EXAMPLE 1: Train Decision Tree on Iris Dataset")
print("=" * 70)

result = agent.run("""
Load the iris dataset and train a decision tree classifier.
Show the accuracy score and feature importance.
""")

print("\n✅ Result:")
print(result)
print("\n" + "=" * 70)

# Example 2: More complex task
print("\nEXAMPLE 2: Linear Regression with Visualization")
print("=" * 70)

result = agent.run("""
1. Create random data for linear regression (100 points)
2. Train a linear regression model
3. Make predictions
4. Plot the results and save as 'regression_plot.png'
5. Report the R-squared score
""")

print("\n✅ Result:")
print(result)
print("\n" + "=" * 70)
