# Contributing to JSlingo

Thank you for your interest in contributing to JSlingo! This document provides guidelines for contributing to the project.

## 🚀 How to Contribute

### Reporting Bugs

- Use the GitHub issue tracker
- Provide a clear description of the bug
- Include steps to reproduce the issue
- Mention your browser and operating system

### Suggesting Features

- Open a new issue with the "enhancement" label
- Describe the feature and its benefits
- Consider if it aligns with the project's educational goals

### Submitting Code Changes

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes**
4. **Test thoroughly**: Ensure the game works in different browsers
5. **Commit your changes**: Use conventional commit messages
6. **Push to your fork**: `git push origin feature/your-feature-name`
7. **Create a pull request**

### Code Style Guidelines

- Use consistent indentation (2 spaces)
- Follow JavaScript best practices
- Keep functions small and focused
- Add comments for complex logic
- Ensure responsive design works on mobile

### Adding New Levels

To add a new level, modify the `levels` array in `script.js`:

```javascript
{
    id: 16, // Next available ID
    title: "Your Level Title",
    description: "Clear description of what this level teaches",
    task: "Specific task for the user to complete",
    starterCode: "// Helpful starter code\n",
    expectedOutput: "Expected console output",
    hint: "Helpful hint without giving away the solution",
    solution: "Complete working solution"
}
```

### Testing Guidelines

- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices
- Ensure all levels work correctly
- Verify code execution is safe and secure
- Check that progress tracking works properly

## 🏷️ Issue Labels

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed

## 📝 Commit Message Format

Use conventional commit messages:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example: `feat: add new level for async/await concepts`

## 🤝 Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Follow the project's educational mission

## 📞 Getting Help

- Open an issue for questions
- Join discussions in the repository
- Check existing issues and pull requests

Thank you for contributing to making JavaScript learning more accessible and fun! 🎉
