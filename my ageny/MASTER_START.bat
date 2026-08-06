@echo off
REM ====================================
REM AI/ML Engineer Agent - Master Launcher
REM ====================================

:MENU
cls
echo.
echo ========================================
echo   AI/ML Engineer Agent v3.0
echo   Master Control Panel
echo ========================================
echo.
echo   1. Setup (First Time Installation)
echo   2. Start Web Interface
echo   3. Start CLI Interface
echo   4. Start Ollama Service
echo   5. Verify Installation
echo   6. Run Quick Tests
echo   7. Open Project Folder
echo   8. View Documentation
echo   9. Exit
echo.
echo ========================================
echo.

set /p choice="Select option (1-9): "

if "%choice%"=="1" goto SETUP
if "%choice%"=="2" goto WEB
if "%choice%"=="3" goto CLI
if "%choice%"=="4" goto OLLAMA
if "%choice%"=="5" goto VERIFY
if "%choice%"=="6" goto TEST
if "%choice%"=="7" goto FOLDER
if "%choice%"=="8" goto DOCS
if "%choice%"=="9" goto EXIT

echo Invalid option! Please try again.
timeout /t 2 >nul
goto MENU

:SETUP
cls
echo.
echo Running Setup...
echo.
call setup.bat
pause
goto MENU

:WEB
cls
echo.
echo Starting Web Interface...
echo.
start cmd /k call start_web.bat
timeout /t 2 >nul
echo.
echo Web interface started in new window!
echo Opening browser...
timeout /t 3 >nul
start http://localhost:5000
pause
goto MENU

:CLI
cls
echo.
echo Starting CLI Interface...
echo.
call start_cli.bat
goto MENU

:OLLAMA
cls
echo.
echo Starting Ollama Service...
echo.
start cmd /k call start_ollama.bat
timeout /t 2 >nul
echo.
echo Ollama service started in new window!
pause
goto MENU

:VERIFY
cls
echo.
echo Running Verification...
echo.
call verify.bat
goto MENU

:TEST
cls
echo.
echo Running Tests...
echo.
call quick_test.bat
goto MENU

:FOLDER
explorer "D:\my ageny"
goto MENU

:DOCS
cls
echo.
echo ========================================
echo   Documentation Files
echo ========================================
echo.
echo   Main Documentation:
echo   - README.md
echo   - GETTING_STARTED.md
echo   - PROFESSIONAL_MODE.md
echo   - MODE_COMPARISON.md
echo.
echo   Quick References:
echo   - QUICKSTART.md
echo   - CHECKLIST.md
echo   - INSTALLATION.md
echo.
echo   Opening README.md...
echo.
start README.md
pause
goto MENU

:EXIT
cls
echo.
echo ========================================
echo   Thank you for using
echo   AI/ML Engineer Agent v3.0!
echo ========================================
echo.
timeout /t 2 >nul
exit /b 0
