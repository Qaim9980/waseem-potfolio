@echo off
REM ====================================
REM AI/ML Engineer Agent - Conda Quick Start
REM ====================================

echo.
echo ========================================
echo   AI/ML Engineer Agent v3.0
echo   Conda Environment Quick Start
echo ========================================
echo.

REM Change to project directory
cd /d "D:\my ageny"

REM Check conda
echo [1/5] Checking Conda installation...
where conda >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Conda not found!
    echo Please install Miniconda from: https://docs.conda.io/en/latest/miniconda.html
    pause
    exit /b 1
)
conda --version
echo.

REM Check environment
echo [2/5] Checking python_eda environment...
conda env list | findstr "python_eda" >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Environment 'python_eda' not found!
    echo Please run: conda create -n python_eda python=3.11 -y
    pause
    exit /b 1
)
echo Environment found!
echo.

REM Activate environment
echo [3/5] Activating python_eda environment...
call C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
if %errorlevel% neq 0 (
    echo [ERROR] Failed to activate environment!
    pause
    exit /b 1
)
echo.

REM Install/Update dependencies
echo [4/5] Installing dependencies in conda environment...
echo This may take 2-5 minutes...
pip install -r requirements.txt --quiet
if %errorlevel% neq 0 (
    echo [WARNING] Some packages may have failed to install
    echo Continuing anyway...
)
echo Dependencies installed!
echo.

REM Check Ollama
echo [5/5] Checking Ollama service...
curl -s http://localhost:11434/api/tags >nul 2>&1
if %errorlevel% neq 0 (
    echo [WARNING] Ollama service not detected!
    echo Please start Ollama: ollama serve
    echo Then run: ollama pull qwen2.5-coder:latest
    echo.
)

echo.
echo ========================================
echo   Setup Complete with Conda!
echo ========================================
echo.
echo Your environment is ready. Choose:
echo.
echo   1. Start Web Interface: start_web.bat
echo   2. Start CLI: start_cli.bat
echo   3. Run Tests: quick_test.bat
echo.
pause
