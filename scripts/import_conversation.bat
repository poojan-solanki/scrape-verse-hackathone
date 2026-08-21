@echo off
REM Batch file to launch PowerShell extraction on Windows
echo [Antigravity Migration] Importing conversation to Windows...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0import_conversation.ps1"
pause
