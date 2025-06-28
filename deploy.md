# Deploying JSlingo

## GitHub Pages Deployment

JSlingo is designed to be deployed on GitHub Pages. Here's how to set it up:

### Automatic Deployment (Recommended)

1. Go to your repository on GitHub: https://github.com/jmoncayo-pursuit/jslingo
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

Your site will be available at: `https://jmoncayo-pursuit.github.io/jslingo`

### Manual Deployment

If you prefer to deploy manually:

1. Clone the repository
2. Open `index.html` in a web browser
3. Or use a local server:
   ```bash
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

### Custom Domain (Optional)

To use a custom domain:

1. In GitHub Pages settings, enter your domain name
2. Add a CNAME file to your repository with your domain
3. Configure DNS settings with your domain provider

## Local Development

For local development:

```bash
# Clone the repository
git clone https://github.com/jmoncayo-pursuit/jslingo.git
cd jslingo

# Start local server
python3 -m http.server 8000

# Or use npm
npm start
```

## Deployment Checklist

- [ ] Repository is public
- [ ] GitHub Pages is enabled
- [ ] Source branch is set to `main`
- [ ] Site is accessible at the provided URL
- [ ] All features work correctly
- [ ] Mobile responsiveness is tested
- [ ] Cross-browser compatibility is verified

## Troubleshooting

### Common Issues

1. **Site not loading**: Check if GitHub Pages is enabled and the correct branch is selected
2. **Code not executing**: Ensure JavaScript is enabled in the browser
3. **Styling issues**: Clear browser cache and refresh
4. **Mobile issues**: Test on different devices and screen sizes

### Support

If you encounter issues:

- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Open an issue in the repository
- Review browser console for errors
