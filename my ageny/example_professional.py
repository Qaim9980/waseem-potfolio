"""
Professional Mode Examples
Demonstrates Senior AI Architect capabilities
"""
from agent import ReActAgent
from config import Config

# Initialize
Config.initialize()

print("="*70)
print("🎓 SENIOR AI ARCHITECT MODE - PROFESSIONAL EXAMPLES")
print("="*70)

# Example 1: Customer Churn Prediction (Full Professional Workflow)
print("\n" + "="*70)
print("EXAMPLE 1: Customer Churn Prediction (Professional Workflow)")
print("="*70)

agent_pro = ReActAgent(verbose=True, professional_mode=True)

result = agent_pro.run("""
I need a complete ML solution for customer churn prediction.

Dataset: Assume we have customer_churn.csv with features like:
- Monthly charges, contract type, tenure, services used

Requirements:
1. Complete EDA with visualizations
2. Professional preprocessing
3. Model with hyperparameter tuning
4. Comprehensive evaluation
5. Feature importance analysis
6. Actionable insights

Follow the 4-phase Senior AI Architect workflow.
""")

print("\n" + "="*70)
print("✅ RESULT:")
print("="*70)
print(result)

# Example 2: Regression with Advanced Validation
print("\n\n" + "="*70)
print("EXAMPLE 2: House Price Prediction (Advanced Regression)")
print("="*70)

result2 = agent_pro.run("""
Build a professional regression model for house price prediction.

Create synthetic data with:
- Square footage, bedrooms, location_score, age

Requirements:
- EDA with distribution plots
- Polynomial features if needed
- Multiple algorithm comparison (Linear, Ridge, Random Forest)
- Cross-validation
- Learning curves
- Residual analysis
- R², RMSE, MAE metrics
""")

print("\n" + "="*70)
print("✅ RESULT:")
print("="*70)
print(result2)

# Example 3: Classification with Imbalanced Data
print("\n\n" + "="*70)
print("EXAMPLE 3: Fraud Detection (Imbalanced Classification)")
print("="*70)

result3 = agent_pro.run("""
Build a fraud detection system with proper handling of class imbalance.

Create synthetic fraud data:
- Transaction amount, time, merchant_category
- 2% fraud rate (highly imbalanced)

Requirements:
- Check class balance
- Use stratified splitting
- Apply SMOTE or class weights
- Evaluate with Precision, Recall, F1-Score, ROC-AUC
- Confusion matrix
- Recommend threshold tuning
""")

print("\n" + "="*70)
print("✅ RESULT:")
print("="*70)
print(result3)

print("\n\n" + "="*70)
print("🎉 PROFESSIONAL MODE EXAMPLES COMPLETE")
print("="*70)
print("\nKey Differences from Standard Mode:")
print("  ✓ Mandatory EDA phase")
print("  ✓ Hyperparameter tuning")
print("  ✓ Cross-validation")
print("  ✓ Multiple metrics")
print("  ✓ Professional visualizations")
print("  ✓ Data leakage checks")
print("  ✓ Comprehensive reporting")
