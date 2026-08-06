@echo off
REM ====================================
REM AI/ML Engineer Agent - Start Ollama
REM ====================================

echo.
echo ========================================
echo   Starting Ollama Service...
echo ========================================
echo.

REM Check if Ollama is installed
where ollama >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Ollama not found!
    echo Please install Ollama from: https://ollama.ai
    echo.
    pause
    exit /b 1
)

REM Check if already running
echo Checking if Ollama is already running...
curl -s http://localhost:11434/api/tags >nul 2>&1
if %errorlevel% equ 0 (
    echo [INFO] Ollama is already running!
    echo.
    ollama list
    echo.
    pause
    exit /b 0
)

REM Start Ollama
echo Starting Ollama service...
echo.
echo ========================================
echo   Ollama Service Running
echo   Keep this window open!
echo ========================================
echo.
echo Press Ctrl+C to stop the service
echo.

ollama serve

pause
