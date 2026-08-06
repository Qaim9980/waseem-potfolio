@echo off
REM ====================================
REM AI/ML Engineer Agent - Auto Setup
REM ====================================

echo.
echo ========================================
echo   AI/ML Engineer Agent v3.0
echo   Auto Installation
echo ========================================
echo.

cd /d "D:\my ageny"

REM Activate environment
echo [1/3] Activating conda environment...
call C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
if %errorlevel% neq 0 (
    echo [ERROR] Failed to activate environment!
    pause
    exit /b 1
)
echo.

REM Install essential packages
echo [2/3] Installing essential packages...
echo This may take 5-10 minutes on first run...
echo.
pip install langchain langchain-core langchain-ollama flask flask-cors jupyter-client ipykernel scikit-learn pandas numpy matplotlib seaborn requests python-dotenv --quiet

if %errorlevel% neq 0 (
    echo [WARNING] Some packages may have failed
    echo Continuing anyway...
)
echo.

REM Check Ollama
echo [3/3] Checking Ollama service...
curl -s http://localhost:11434/api/tags >nul 2>&1
if %errorlevel% neq 0 (
    echo [WARNING] Ollama not running!
    echo Please start: ollama serve
    echo.
    echo Press any key to continue...
    pause >nul
) else (
    echo Ollama running successfully!
    echo.
)

echo.
echo ========================================
echo   Installation Complete!
echo ========================================
echo.
echo Ready to use! Choose:
echo.
echo   1. Start Web Interface:
echo      python app.py
echo      Then open: http://localhost:5000
echo.
echo   2. Start CLI:
echo      python cli.py
echo.
echo Or double-click: start_web.bat
echo.
pause
