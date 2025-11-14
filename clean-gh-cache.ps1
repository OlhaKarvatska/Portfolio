# Clean gh-pages cache
Write-Host "Cleaning gh-pages cache..." -ForegroundColor Yellow

$cachePath = "node_modules\.cache\gh-pages"
if (Test-Path $cachePath) {
    Remove-Item -Recurse -Force $cachePath -ErrorAction SilentlyContinue
    Write-Host "Cache cleaned successfully!" -ForegroundColor Green
} else {
    Write-Host "Cache directory does not exist." -ForegroundColor Yellow
}

