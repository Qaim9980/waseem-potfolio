@echo off
REM ====================================
REM Create Desktop Shortcuts
REM ====================================

echo.
echo ========================================
echo   Creating Desktop Shortcuts...
echo ========================================
echo.

set SCRIPT_DIR=%~dp0
set DESKTOP=%USERPROFILE%\Desktop

REM Create shortcut for Master Start
echo Creating Master Control Panel shortcut...
powershell -Command "$WS = New-Object -ComObject WScript.Shell; $SC = $WS.CreateShortcut('%DESKTOP%\AI Agent Control Panel.lnk'); $SC.TargetPath = '%SCRIPT_DIR%MASTER_START.bat'; $SC.WorkingDirectory = '%SCRIPT_DIR%'; $SC.IconLocation = 'shell32.dll,13'; $SC.Description = 'AI/ML Engineer Agent Control Panel'; $SC.Save()"

REM Create shortcut for Web Interface
echo Creating Web Interface shortcut...
powershell -Command "$WS = New-Object -ComObject WScript.Shell; $SC = $WS.CreateShortcut('%DESKTOP%\AI Agent Web.lnk'); $SC.TargetPath = '%SCRIPT_DIR%start_web.bat'; $SC.WorkingDirectory = '%SCRIPT_DIR%'; $SC.IconLocation = 'shell32.dll,14'; $SC.Description = 'Start AI Agent Web Interface'; $SC.Save()"

REM Create shortcut for CLI
echo Creating CLI shortcut...
powershell -Command "$WS = New-Object -ComObject WScript.Shell; $SC = $WS.CreateShortcut('%DESKTOP%\AI Agent CLI.lnk'); $SC.TargetPath = '%SCRIPT_DIR%start_cli.bat'; $SC.WorkingDirectory = '%SCRIPT_DIR%'; $SC.IconLocation = 'shell32.dll,3'; $SC.Description = 'Start AI Agent CLI'; $SC.Save()"

echo.
echo ========================================
echo   Shortcuts Created on Desktop!
echo ========================================
echo.
echo   - AI Agent Control Panel
echo   - AI Agent Web
echo   - AI Agent CLI
echo.
pause
