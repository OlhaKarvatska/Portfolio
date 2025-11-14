# Fix git cache issue
Write-Host "Removing problematic cache from git..." -ForegroundColor Yellow

# Remove the problematic cache directory from git index
git rm -r --cached "node_modules/.cache/gh-pages/" 2>$null

# Remove the directory if it exists
if (Test-Path "node_modules/.cache/gh-pages") {
    Remove-Item -Recurse -Force "node_modules/.cache/gh-pages" -ErrorAction SilentlyContinue
}

Write-Host "Cache removed. You can now run 'git add .' again." -ForegroundColor Green

