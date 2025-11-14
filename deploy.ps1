# PowerShell script for deploying to GitHub Pages
# This script avoids the ENAMETOOLONG error by using git directly

$scriptDir = Get-Location

Write-Host "Building project..." -ForegroundColor Yellow
npm run build:gh

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Build successful!" -ForegroundColor Green

# Check if dist folder exists
if (-not (Test-Path "dist")) {
    Write-Host "dist folder not found!" -ForegroundColor Red
    exit 1
}

Write-Host "Deploying to GitHub Pages..." -ForegroundColor Yellow

# Use shorter temp path to avoid ENAMETOOLONG
$tempDir = "$env:TEMP\gh-pages"
if (Test-Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir -ErrorAction SilentlyContinue
}

# Clone the repo to temp directory
Write-Host "Cloning repository..." -ForegroundColor Yellow
$cloneOutput = git clone --branch gh-pages --single-branch https://github.com/OlhaKarvatska/Portfolio.git $tempDir 2>&1

if ($LASTEXITCODE -ne 0) {
    # If gh-pages branch doesn't exist, create it
    Write-Host "Creating gh-pages branch..." -ForegroundColor Yellow
    git clone https://github.com/OlhaKarvatska/Portfolio.git $tempDir 2>&1 | Out-Null
    Set-Location $tempDir
    git checkout --orphan gh-pages 2>&1 | Out-Null
    git rm -rf . 2>&1 | Out-Null
    Set-Location $scriptDir
}

# Copy dist contents to temp directory
Write-Host "Copying files..." -ForegroundColor Yellow
Copy-Item -Path "dist\*" -Destination $tempDir -Recurse -Force

# Commit and push
Set-Location $tempDir
git add -A
git commit -m "Deploy to GitHub Pages $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" 2>&1 | Out-Null
git push origin gh-pages --force 2>&1 | Out-Null
Set-Location $scriptDir

# Cleanup
Remove-Item -Recurse -Force $tempDir -ErrorAction SilentlyContinue

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nDeployment successful!" -ForegroundColor Green
    Write-Host "Your site should be available at: https://olhakarvatska.github.io/Portfolio/" -ForegroundColor Cyan
} else {
    Write-Host "`nDeployment failed! Check the errors above." -ForegroundColor Red
    exit 1
}

