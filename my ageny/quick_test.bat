@echo off
REM ====================================
REM AI/ML Engineer Agent - Quick Test
REM ====================================

echo.
echo ========================================
echo   AI/ML Engineer Agent v3.0
echo   Running Quick Tests...
echo ========================================
echo.

REM Change to project directory
cd /d "D:\my ageny"

REM Activate conda environment
echo Activating conda environment (python_eda)...
call C:\Users\qaim9\miniconda3\Scripts\activate.bat python_eda

echo [1/3] Testing Standard Mode...
echo.
python example.py
echo.

echo [2/3] Testing Professional Mode...
echo.
python example_professional.py
echo.

echo [3/3] Tests Complete!
echo.
pause
