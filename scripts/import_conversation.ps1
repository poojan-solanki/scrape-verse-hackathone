# PowerShell Script to Import Antigravity Conversation on Windows
# Run this in PowerShell on your Windows laptop

$ConversationId = "22937e55-47e9-4734-a923-a46feed116aa"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ZipName = "antigravity_conversation_$ConversationId.zip"

# Look for the zip in current directory or parent directory
$ZipPath = Join-Path $ScriptDir $ZipName
if (-not (Test-Path $ZipPath)) {
    $ZipPath = Join-Path (Split-Path -Parent $ScriptDir) $ZipName
}

if (-not (Test-Path $ZipPath)) {
    Write-Host "[-] Error: Could not find $ZipName" -ForegroundColor Red
    Write-Host "    Please ensure $ZipName is in the same folder as this script." -ForegroundColor Yellow
    exit 1
}

# Target directory in Windows: %USERPROFILE%\.gemini\antigravity-ide\brain\
$TargetBrainDir = Join-Path $env:USERPROFILE ".gemini\antigravity-ide\brain"

if (-not (Test-Path $TargetBrainDir)) {
    Write-Host "[+] Creating target directory: $TargetBrainDir" -ForegroundColor Cyan
    New-Item -ItemType Directory -Force -Path $TargetBrainDir | Out-Null
}

Write-Host "[+] Extracting conversation to: $TargetBrainDir" -ForegroundColor Cyan
Expand-Archive -Path $ZipPath -DestinationPath $TargetBrainDir -Force

Write-Host "`Successfully imported conversation $ConversationId!" -ForegroundColor Green
Write-Host "[i] You can now open Antigravity IDE on Windows and continue your work." -ForegroundColor Gray
