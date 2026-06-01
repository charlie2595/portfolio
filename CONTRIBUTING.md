# Contributing Guidelines

Terima kasih tertarik untuk contribute ke portfolio ini! 

## 🤝 Cara Berkontribusi

### Untuk Contributors

1. **Fork repository** ini
2. **Create feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make changes** dan commit
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push ke branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open Pull Request** dengan deskripsi jelas

### Code Style

- Use 2 spaces for indentation
- Gunakan meaningful variable names
- Comment kompleks logic
- Follow existing code patterns

### Commit Messages

Format: `[type]: [description]`

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `test`: Tests

Contoh:
```
feat: add blog section to portfolio
fix: dark mode toggle not working on mobile
docs: update deployment guide
```

## 🐛 Bug Reports

1. Check jika bug sudah dilaporkan
2. Buat issue dengan:
   - Deskripsi bug
   - Steps untuk reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (jika applicable)
   - Environment info (OS, browser)

Template:
```markdown
**Describe the bug**
[Description here]

**Steps to reproduce**
1. Go to...
2. Click...
3. See error...

**Expected behavior**
[Expected here]

**Actual behavior**
[Actual here]

**Environment**
- OS: [Windows/Mac/Linux]
- Browser: [Chrome/Firefox/Safari]
- Node version: [version]
```

## 💡 Feature Requests

1. Buat issue dengan label `enhancement`
2. Jelaskan use case
3. Propose solution
4. Provide mockups (jika relevant)

Template:
```markdown
**Is your feature request related to a problem?**
[Explain here]

**Describe the solution you'd like**
[Description here]

**Describe alternatives you've considered**
[Alternatives here]

**Additional context**
[Any other context here]
```

## 📝 Documentation

Help improve documentation dengan:
- Fix typos
- Clarify instructions
- Add examples
- Update outdated info

## ✅ Pull Request Process

1. Update README.md dengan changes
2. Test thoroughly
3. Ensure all checks pass:
   - No lint errors
   - Build succeeds
   - No console errors
4. Provide clear PR description
5. Link related issues
6. Await review

### PR Template

```markdown
## Description
[Brief description of changes]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Related Issues
Closes #[issue_number]

## Testing Done
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested dark mode
- [ ] No console errors

## Screenshots/Demo
[If applicable]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed my code
- [ ] Commented complex sections
- [ ] Updated documentation
- [ ] No breaking changes
```

## Development Setup

```bash
# Clone
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install
npm install

# Develop
npm run dev

# Test
npm run build
npm run preview

# Lint
npm run lint
```

## Code Review Process

1. At least 1 approval required
2. All checks must pass
3. No conflicts with main branch
4. Follow project guidelines

## Community

- Be respectful
- No spam or harassment
- Constructive feedback
- Help other contributors

## License

By contributing, you agree code will be under MIT License.

## Questions?

- Check [README.md](README.md)
- Check existing issues/PRs
- Reach out via email or social media

---

**Thank you for contributing!** 🎉
