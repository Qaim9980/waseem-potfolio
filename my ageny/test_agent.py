"""
Comprehensive Test Suite for AI/ML Engineer Agent
Tests all functionality including Learning pattern
"""
from agent import ReActAgent
from config import Config
import sys

# Initialize
Config.initialize()

def test_header(test_name):
    """Print test header"""
    print("\n" + "="*70)
    print(f"TEST: {test_name}")
    print("="*70 + "\n")

def test_1_basic_ml_task():
    """Test 1: Basic Machine Learning Task"""
    test_header("Basic ML - Train Decision Tree on Iris")
    
    agent = ReActAgent(verbose=True)
    result = agent.run("""
    Load the iris dataset and train a decision tree classifier.
    Show the accuracy score.
    """)
    
    print("\n✅ RESULT:")
    print(result)
    
    # Check if learnings were captured
    if agent.conversation_history:
        learnings = agent.conversation_history[-1].get('learnings', [])
        print(f"\n💡 Learnings Captured: {len(learnings)}")
        for i, learning in enumerate(learnings, 1):
            print(f"   {i}. {learning[:100]}...")

def test_2_data_visualization():
    """Test 2: Data Visualization Task"""
    test_header("Data Visualization - Plot Generation")
    
    agent = ReActAgent(verbose=True)
    result = agent.run("""
    Create random data for linear regression (50 points).
    Train a linear regression model.
    Create a scatter plot with regression line and save it as 'test_plot.png'.
    """)
    
    print("\n✅ RESULT:")
    print(result)

def test_3_error_recovery():
    """Test 3: Error Handling and Recovery"""
    test_header("Error Recovery - Handling Missing File")
    
    agent = ReActAgent(verbose=True)
    result = agent.run("""
    Try to load 'nonexistent_file.csv'.
    When it fails, create sample data instead and train a model.
    """)
    
    print("\n✅ RESULT:")
    print(result)

def test_4_memory_system():
    """Test 4: Memory Save and Recall"""
    test_header("Memory System - Learning Persistence")
    
    agent = ReActAgent(verbose=True)
    
    # First, save a learning
    result1 = agent.run("""
    Save this to memory:
    Topic: KNN Best Practices
    Content: KNN works best with normalized data. Use StandardScaler before training.
    Tags: knn, preprocessing, scaling
    """)
    
    print("\n✅ SAVE RESULT:")
    print(result1)
    
    # Then recall it
    result2 = agent.run("Recall past learnings about KNN")
    
    print("\n✅ RECALL RESULT:")
    print(result2)

def test_5_complex_workflow():
    """Test 5: Complex Multi-Step Workflow"""
    test_header("Complex Workflow - End-to-End ML Pipeline")
    
    agent = ReActAgent(verbose=True)
    result = agent.run("""
    1. Load the wine dataset from sklearn
    2. Split into train and test sets (80/20)
    3. Train a Random Forest classifier
    4. Calculate accuracy, precision, and recall
    5. Save this successful approach to memory
    """)
    
    print("\n✅ RESULT:")
    print(result)

def test_6_learning_extraction():
    """Test 6: Verify Learning Pattern Works"""
    test_header("Learning Pattern - Verification")
    
    agent = ReActAgent(verbose=True)
    result = agent.run("""
    Train a simple KNN classifier on iris dataset.
    After each step, reflect on what you learned.
    """)
    
    print("\n✅ RESULT:")
    print(result)
    
    # Verify learnings were captured
    if agent.conversation_history:
        last_conversation = agent.conversation_history[-1]
        learnings = last_conversation.get('learnings', [])
        
        print(f"\n📊 LEARNING STATS:")
        print(f"   Total Iterations: {last_conversation['iterations']}")
        print(f"   Learnings Captured: {len(learnings)}")
        
        if learnings:
            print(f"\n💡 ALL LEARNINGS:")
            for i, learning in enumerate(learnings, 1):
                print(f"\n   Learning {i}:")
                print(f"   {learning}")

def run_all_tests():
    """Run complete test suite"""
    print("\n" + "🚀"*35)
    print("   AI/ML ENGINEER AGENT - COMPREHENSIVE TEST SUITE")
    print("🚀"*35)
    
    tests = [
        ("Basic ML Task", test_1_basic_ml_task),
        ("Data Visualization", test_2_data_visualization),
        ("Error Recovery", test_3_error_recovery),
        ("Memory System", test_4_memory_system),
        ("Complex Workflow", test_5_complex_workflow),
        ("Learning Extraction", test_6_learning_extraction),
    ]
    
    print("\nAvailable Tests:")
    for i, (name, _) in enumerate(tests, 1):
        print(f"  {i}. {name}")
    print(f"  {len(tests)+1}. Run All Tests")
    print(f"  0. Exit")
    
    try:
        choice = input("\nSelect test number: ").strip()
        
        if choice == "0":
            print("Goodbye!")
            return
        elif choice == str(len(tests) + 1):
            # Run all tests
            for name, test_func in tests:
                try:
                    test_func()
                except Exception as e:
                    print(f"\n❌ Test '{name}' failed: {e}")
                    import traceback
                    traceback.print_exc()
        elif choice.isdigit() and 1 <= int(choice) <= len(tests):
            # Run specific test
            name, test_func = tests[int(choice) - 1]
            test_func()
        else:
            print("Invalid choice!")
    
    except KeyboardInterrupt:
        print("\n\nTests interrupted!")
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    run_all_tests()
