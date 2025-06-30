#!/bin/bash

echo "🚀 Setting up GitHub Pages deployment..."

# Check if we're on main branch
if [ "$(git branch --show-current)" != "main" ]; then
    echo "❌ Please switch to main branch first"
    exit 1
fi

# Create gh-pages branch
echo "📝 Creating gh-pages branch..."
git checkout -b gh-pages 2>/dev/null || git checkout gh-pages

# Copy all files to gh-pages branch
echo "📋 Copying files..."
git checkout main -- .
git add .
git commit -m "Deploy to GitHub Pages" 2>/dev/null || echo "No changes to commit"

# Push gh-pages branch
echo "⬆️ Pushing gh-pages branch..."
git push origin gh-pages

# Switch back to main
git checkout main

echo "✅ Deployment setup complete!"
echo ""
echo "🔧 Next steps:"
echo "1. Go to: https://github.com/jmoncayo-pursuit/javascript-warmup/settings/pages"
echo "2. Under 'Source', select 'Deploy from a branch'"
echo "3. Choose 'gh-pages' branch"
echo "4. Click 'Save'"
echo ""
echo "🌐 Your site will be available at:"
echo "   https://jmoncayo-pursuit.github.io/javascript-warmup" 