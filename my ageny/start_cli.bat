@echo off
REM ====================================
REM AI/ML Engineer Agent - CLI Interface
REM ====================================

echo.
echo ========================================
echo   AI/ML Engineer Agent v3.0
echo   Starting CLI Interface...
echo ========================================
echo.

REM Change to project directory
cd /d "D:\my ageny"

REM Activate conda environment
echo [1/3] Activating conda environment (python_eda)...
call C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
if %errorlevel% neq 0 (
    echo [ERROR] Failed to activate conda environment!
    echo Please make sure conda is installed and python_eda environment exists.
    pause
    exit /b 1
)

REM Check if Ollama is running
echo [2/3] Checking Ollama service...
curl -s http://localhost:11434/api/tags >nul 2>&1
if %errorlevel% neq 0 (
    echo [WARNING] Ollama service not detected!
    echo Please start Ollama manually: ollama serve
    echo.
    echo Press any key to continue anyway...
    pause >nul
)

REM Start CLI
echo [3/3] Starting CLI...
echo.
echo ========================================
echo   Type your queries below
echo   Commands: 'help', 'mode', 'exit'
echo ========================================
echo.

python cli.py

REM If CLI exits
echo.
echo CLI closed.
pause
