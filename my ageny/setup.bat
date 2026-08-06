@echo off
REM ====================================
REM AI/ML Engineer Agent - Setup Script
REM ====================================

echo.
echo ========================================
echo   AI/ML Engineer Agent v3.0
echo   Installation Setup
echo ========================================
echo.

REM Change to project directory
cd /d "D:\my ageny"

REM Check Conda installation
echo [1/7] Checking Conda installation...
where conda >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Conda not found!
    echo Please install Miniconda or Anaconda
    pause
    exit /b 1
)
conda --version
echo.

REM Check if conda environment exists
echo [2/7] Checking conda environment (python_eda)...
conda env list | findstr "python_eda" >nul 2>&1
if %errorlevel% neq 0 (
    echo [WARNING] Environment 'python_eda' not found!
    echo Creating new environment...
    conda create -n python_eda python=3.11 -y
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to create conda environment!
        pause
        exit /b 1
    )
) else (
    echo Environment 'python_eda' found!
)
echo.

REM Activate conda environment
echo [3/7] Activating conda environment...
call C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
echo.

REM Upgrade pip in conda environment
echo [4/7] Upgrading pip in conda environment...
python -m pip install --upgrade pip --quiet
echo.

REM Install dependencies
echo [5/7] Installing dependencies (this may take 2-5 minutes)...
pip install -r requirements.txt --quiet
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies!
    pause
    exit /b 1
)
echo Dependencies installed successfully!
echo.

REM Create .env file
echo [6/7] Setting up environment configuration...
if not exist ".env" (
    copy .env.example .env >nul
    echo .env file created successfully!
) else (
    echo .env file already exists, skipping...
)
echo.

REM Create necessary directories
echo [7/7] Creating output directories...
if not exist "outputs" mkdir outputs
if not exist "agent_memory" mkdir agent_memory
echo Directories created!
echo.

REM Run verification
echo ========================================
echo   Running Setup Verification...
echo ========================================
echo.
python verify_setup.py

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Next steps:
echo   1. Make sure Ollama is running: ollama serve
echo   2. Pull the model: ollama pull qwen2.5-coder:latest
echo   3. Start web interface: start_web.bat
echo   4. OR start CLI: start_cli.bat
echo.
pause
