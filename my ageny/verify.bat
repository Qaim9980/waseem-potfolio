@echo off
REM ====================================
REM AI/ML Engineer Agent - Verification
REM ====================================

echo.
echo ========================================
echo   AI/ML Engineer Agent v3.0
echo   System Verification
echo ========================================
echo.

REM Change to project directory
cd /d "D:\my ageny"

REM Activate conda environment
echo Activating conda environment (python_eda)...
call C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda
if %errorlevel% neq 0 (
    echo [ERROR] Failed to activate conda environment!
    pause
    exit /b 1
)
echo.

REM Run verification script
python verify_setup.py

echo.
pause
