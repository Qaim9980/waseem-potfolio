"""
Command Line Interface for AI/ML Engineer Agent
Run the agent from terminal
"""
import sys
from agent import ReActAgent
from config import Config


def print_banner():
    """Print welcome banner"""
    print("=" * 70)
    print("🤖 AI/ML Engineer Agent - Command Line Interface")
    print("=" * 70)
    print(f"Model: {Config.OLLAMA_MODEL}")
    print(f"Ollama: {Config.OLLAMA_BASE_URL}")
    print("\nAvailable Modes:")
    print("  ⚡ Standard Mode - Enhanced ReAct Pattern (Quick tasks)")
    print("  🎓 Professional Mode - Senior AI Architect (4-phase workflow)")
    print("  ✨ Enhanced Mode - Principal AI Architect (Advanced + SHAP + SMOTE)")
    print("\nCommands:")
    print("  exit/quit/q - Exit the application")
    print("  mode - Switch between modes")
    print("  help - Show detailed help")
    print("  clear - Clear screen")
    print("=" * 70)
    print()


def main():
    """Main CLI loop"""
    Config.initialize()
    print_banner()
    
    # Ask for mode selection
    print("Select Mode:")
    print("  1. Standard Mode (Quick tasks)")
    print("  2. Professional Mode (Senior AI Architect)")
    print("  3. Enhanced Mode (Principal AI Architect - Advanced)")
    
    mode_choice = input("\nEnter choice (1, 2, or 3, default=1): ").strip()
    
    enhanced_mode = (mode_choice == "3")
    professional_mode = (mode_choice == "2" or mode_choice == "3")
    
    if enhanced_mode:
        print("\n✨ ENHANCED MODE Activated - Principal AI Architect:")
        print("   ✅ Multi-Model Comparison (3+ models)")
        print("   ✅ Advanced Hyperparameter Tuning")
        print("   ✅ SHAP Feature Explainability")
        print("   ✅ SMOTE for Imbalanced Data")
        print("   ✅ Cross-Validation & Learning Curves")
        print("   ✅ ROC Curves & Professional Visualizations")
    elif professional_mode:
        print("\n🎓 PROFESSIONAL MODE Activated - Following 4-phase workflow:")
        print("   Phase 1: Exploration (EDA)")
        print("   Phase 2: Preprocessing") 
        print("   Phase 3: Modeling (with tuning)")
        print("   Phase 4: Reporting (visualizations)")
    else:
        print("\n⚡ STANDARD MODE Activated - Quick ML tasks")
    
    print("\n" + "="*70 + "\n")
    
    agent = ReActAgent(verbose=True, professional_mode=professional_mode, enhanced_mode=enhanced_mode)
    
    while True:
        try:
            # Get user input
            print("\n📝 Your Query:")
            user_input = input("> ").strip()
            
            if not user_input:
                continue
            
            # Check for exit commands
            if user_input.lower() in ['exit', 'quit', 'q']:
                print("\n👋 Goodbye!")
                break
            
            # Special commands
            if user_input.lower() == 'mode':
                if enhanced_mode:
                    current = "Enhanced ✨"
                elif professional_mode:
                    current = "Professional 🎓"
                else:
                    current = "Standard ⚡"
                print(f"\nCurrent Mode: {current}")
                print("  1. Standard Mode ⚡")
                print("  2. Professional Mode 🎓")
                print("  3. Enhanced Mode ✨")
                choice = input("Switch to (1/2/3): ").strip()
                if choice in ['1', '2', '3']:
                    enhanced_mode = (choice == "3")
                    professional_mode = (choice in ["2", "3"])
                    agent = ReActAgent(verbose=True, professional_mode=professional_mode, enhanced_mode=enhanced_mode)
                    mode_name = "Enhanced ✨" if enhanced_mode else ("Professional 🎓" if professional_mode else "Standard ⚡")
                    print(f"✓ Switched to {mode_name} mode")
                continue
            
            if user_input.lower() == 'help':
                print_help()
                continue
            
            if user_input.lower() == 'clear':
                import os
                os.system('cls' if os.name == 'nt' else 'clear')
                print_banner()
                continue
            
            # Process query
            print("\n" + "=" * 70)
            print("🧠 Agent Working...")
            print("=" * 70)
            
            result = agent.run(user_input)
            
            print("\n" + "=" * 70)
            print("✅ FINAL ANSWER:")
            print("=" * 70)
            print(result)
            print()
            
        except KeyboardInterrupt:
            print("\n\n👋 Interrupted. Goodbye!")
            break
        except Exception as e:
            print(f"\n❌ Error: {str(e)}")
            continue


def print_help():
    """Print help information"""
    print("""
📚 HELP - AI/ML Engineer Agent - Complete Guide

================================================================================
AVAILABLE MODES:
================================================================================

1️⃣  STANDARD MODE (⚡ Quick & Fast)
    Pattern: Enhanced ReAct (Reason → Act → Observe → Learn → Refine)
    Best for: Quick ML experiments, prototyping
    Speed: Fast (minutes)
    
2️⃣  PROFESSIONAL MODE (🎓 Senior AI Architect)
    Pattern: 4-Phase Workflow
      Phase 1: Exploration (EDA)
      Phase 2: Preprocessing (Handle missing values, scaling, encoding)
      Phase 3: Modeling (Hyperparameter tuning, cross-validation)
      Phase 4: Reporting (Visualizations, metrics, insights)
    Best for: Professional projects, research
    Speed: Medium (10-30 minutes)

3️⃣  ENHANCED MODE (✨ Principal AI Architect)
    Pattern: 4-Phase + Advanced Features
    Features:
      ✅ Multi-Model Comparison (3+ models)
      ✅ Advanced Hyperparameter Tuning (GridSearchCV, RandomizedSearchCV)
      ✅ SHAP Feature Explainability
      ✅ SMOTE for Imbalanced Data
      ✅ k-Fold Cross-Validation (k≥5)
      ✅ Learning Curves (overfitting detection)
      ✅ ROC Curves & Confusion Matrix
      ✅ Professional Visualizations
    Best for: Production systems, complex datasets
    Speed: Slow (30-60 minutes)

================================================================================
SPECIAL COMMANDS:
================================================================================

  mode       - View current mode and switch to another mode
  help       - Display this help message
  clear      - Clear the terminal screen
  exit/quit  - Exit the application

================================================================================
EXAMPLE QUERIES:
================================================================================

⚡ STANDARD MODE Examples:
  "Load iris dataset and train a decision tree classifier"
  "Create random data, split it, and train linear regression"
  "Search for the latest papers on transformer architectures"
  "Build a simple neural network for MNIST"

🎓 PROFESSIONAL MODE Examples:
  "Build a complete customer churn prediction system with proper EDA"
  "Train a classification model on credit card fraud detection with tuning"
  "Create a regression model for house price prediction with visualizations"
  "Analyze Boston housing dataset with full 4-phase workflow"

✨ ENHANCED MODE Examples:
  "Compare Random Forest, XGBoost, SVM on Iris with SHAP explanations"
  "Build imbalanced classification model with SMOTE and model comparison"
  "Predict customer churn with multi-model comparison and SHAP analysis"
  "Analyze feature importance with SHAP plots and learning curves"

================================================================================
PHASE DESCRIPTIONS (Professional & Enhanced Modes):
================================================================================

PHASE 1: EXPLORATION (Exploratory Data Analysis)
  ✓ Load and inspect data
  ✓ Check for missing values and data types
  ✓ Generate distribution plots
  ✓ Create correlation heatmaps
  ✓ Analyze target variable
  Output: EDA visualizations saved to ./outputs/

PHASE 2: PREPROCESSING
  ✓ Handle missing values (imputation or deletion)
  ✓ Detect and handle outliers (IQR method)
  ✓ Encode categorical variables
  ✓ Scale features (StandardScaler/MinMaxScaler)
  ✓ Handle imbalanced data (SMOTE in Enhanced mode)
  ✓ Prevent data leakage
  Output: Clean, preprocessed data ready for modeling

PHASE 3: MODELING & OPTIMIZATION
  Standard & Professional:
    ✓ Train baseline model
    ✓ Hyperparameter tuning (GridSearchCV)
    ✓ Cross-validation (5-fold minimum)
    ✓ Compare 2-3 models
  
  Enhanced Mode (Additional):
    ✓ Multi-model comparison (3+ models)
    ✓ Advanced tuning with RandomizedSearchCV
    ✓ Optuna for advanced hyperparameter optimization
    ✓ Feature selection and engineering
  
  Output: Best model with optimized parameters

PHASE 4: REPORTING & EVALUATION
  Standard & Professional:
    ✓ Confusion matrix / Classification report
    ✓ Feature importance plots
    ✓ Learning curves
  
  Enhanced Mode (Additional):
    ✓ SHAP summary plots (feature importance)
    ✓ ROC curves with AUC scores
    ✓ Calibration plots
    ✓ Model comparison charts
  
  Output: Professional-grade visualizations and insights

================================================================================
TIPS & BEST PRACTICES:
================================================================================

✓ Use Standard mode for quick experiments and prototyping
✓ Use Professional mode for serious ML projects
✓ Use Enhanced mode for production-ready systems
✓ All results saved to ./outputs/ directory
✓ Learnings automatically saved and recalled
✓ Complex datasets? Start with Professional mode
✓ Need explainability? Use Enhanced mode for SHAP analysis
✓ Imbalanced data? Enhanced mode applies SMOTE automatically

================================================================================
    """)




if __name__ == "__main__":
    main()
