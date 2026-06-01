# 🗺️ Documentation Navigation Guide

Selamat datang! Panduan ini akan membantu Anda menemukan dokumentasi yang tepat untuk setiap tahap.

---

## 🎯 Mulai Di Sini

### Jika Anda baru pertama kali...
👉 **Baca: [QUICKSTART.md](QUICKSTART.md)** (5 menit)
- Setup project
- Test locally
- First deploy

### Jika Anda ingin setup detail...
👉 **Baca: [SETUP.md](SETUP.md)** (15 menit)
- Prerequisites
- Installation
- Development
- Customization basics

### Jika Anda siap deploy...
👉 **Baca: [DEPLOYMENT.md](DEPLOYMENT.md)** (10 menit)
- GitHub repository setup
- Enable GitHub Pages
- Custom domain
- Troubleshooting

---

## 📚 Documentation by Use Case

### 🎨 "Saya ingin mengubah design/warna"
**File**: [CUSTOMIZATION.md](CUSTOMIZATION.md)
- Change color scheme
- Update typography
- Modify animations
- Responsive adjustments

### 📝 "Saya ingin update content portfolio"
**File**: [index.html](index.html) + [CUSTOMIZATION.md](CUSTOMIZATION.md)
- Hero section
- About
- Skills
- Projects
- Experience

### 🌐 "Saya ingin deploy ke GitHub Pages"
**File**: [DEPLOYMENT.md](DEPLOYMENT.md)
- Repository setup
- GitHub Pages configuration
- Custom domain setup
- SSL/HTTPS

### ✅ "Sebelum launch, apa yang perlu dicek?"
**File**: [CHECKLIST.md](CHECKLIST.md)
- Content verification
- Design & UX check
- Technical verification
- Security check
- Cross-browser testing

### 🤝 "Saya ingin contribute"
**File**: [CONTRIBUTING.md](CONTRIBUTING.md)
- How to contribute
- Code style
- Bug reports
- Pull request process

### 📖 "Saya ingin full documentation"
**File**: [README.md](README.md)
- Complete overview
- Features
- Tech stack
- All sections

---

## 🚀 Workflow Timeline

```
Day 1: Setup
├─ Read QUICKSTART.md (5 min)
├─ Run: npm install
├─ Run: npm run dev
└─ Verify: http://localhost:3000

Day 2: Customize
├─ Read CUSTOMIZATION.md
├─ Edit index.html (content)
├─ Edit tailwind.config.js (colors)
├─ Add your photo
└─ Setup contact form

Day 3: Test
├─ Read CHECKLIST.md
├─ Test responsive design
├─ Test dark mode
├─ Test contact form
├─ Run: npm run build
└─ Run: npm run preview

Day 4: Deploy
├─ Read DEPLOYMENT.md
├─ Create GitHub repo
├─ Push code
├─ Enable GitHub Pages
├─ Verify website live
└─ Share on social media
```

---

## 📂 File Organization

### Documentation Files (Read These!)
```
📄 README.md               → Main documentation (start here)
📄 QUICKSTART.md          → 5-minute quick start
📄 SETUP.md               → Detailed setup guide
📄 CUSTOMIZATION.md       → How to customize
📄 DEPLOYMENT.md          → GitHub Pages deployment
📄 CHECKLIST.md           → Pre-launch checklist
📄 CONTRIBUTING.md        → Contributing guide
📄 PROJECT_SUMMARY.md     → Project overview
📄 LICENSE                → MIT License
```

### Code Files (Edit These!)
```
📄 index.html             → Main portfolio page (edit content here!)
📄 src/styles/main.css    → Styling (mostly Tailwind)
📄 src/js/main.js         → JavaScript (dark mode, forms)
📄 tailwind.config.js     → Tailwind customization (colors, fonts)
📄 package.json           → Dependencies
📄 vite.config.js         → Build configuration
```

### Configuration Files (Don't touch unless needed)
```
📄 .nojekyll              → GitHub Pages config
📄 .gitignore             → Git ignore rules
📄 postcss.config.js      → PostCSS plugins
📄 .github/workflows/     → GitHub Actions CI/CD
```

---

## 🔄 Common Questions & Answers

### "Berapa lama setup?"
- **Quick Start**: 5-10 menit
- **Full Setup**: 30 menit
- **Deployment**: 5 menit

### "File mana yang harus saya edit untuk content?"
👉 **index.html** - Semua content ada di file ini!

### "File mana yang untuk mengubah warna?"
👉 **tailwind.config.js** - Lihat section colors

### "Di mana portfolio akan live?"
👉 **https://YOUR_USERNAME.github.io/portfolio**

### "Bagaimana contact form bekerja?"
👉 **Setup di Formspree.io** - Update ID di src/js/main.js

### "Gimana kalau ada error saat build?"
👉 **Baca**: DEPLOYMENT.md → Troubleshooting section

---

## 🎯 Feature Location Map

| Feature | File | How to Find |
|---------|------|-------------|
| Navigation | index.html | Cari: `<nav>` |
| Hero Section | index.html | Cari: `<!-- Hero Section -->` |
| About Section | index.html | Cari: `<!-- About Section -->` |
| Skills | index.html | Cari: `<!-- Skills Section -->` |
| Experience | index.html | Cari: `<!-- Experience Section -->` |
| Projects | index.html | Cari: `<!-- Projects Section -->` |
| Contact | index.html | Cari: `<!-- Contact Section -->` |
| Dark Mode | src/js/main.js | Cari: `setupDarkMode()` |
| Contact Form | src/js/main.js | Cari: `setupContactForm()` |
| Mobile Menu | src/js/main.js | Cari: `setupMobileMenu()` |
| Colors | tailwind.config.js | Cari: `colors:` |
| Typography | tailwind.config.js | Cari: `fontFamily:` |

---

## 🆘 Troubleshooting Guide

### Problem: npm install gagal
**Solution**: [SETUP.md](SETUP.md) → Troubleshooting section

### Problem: Port 3000 already in use
**Solution**: [SETUP.md](SETUP.md) → Available Scripts

### Problem: Build error
**Solution**: [DEPLOYMENT.md](DEPLOYMENT.md) → Troubleshooting

### Problem: Dark mode tidak bekerja
**Solution**: [DEPLOYMENT.md](DEPLOYMENT.md) → Troubleshooting

### Problem: GitHub Pages tidak update
**Solution**: [DEPLOYMENT.md](DEPLOYMENT.md) → Check Actions

---

## 📋 Quick Reference

### Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production
```

### URLs
```
Local:          http://localhost:3000
GitHub Pages:   https://YOUR_USERNAME.github.io/portfolio
```

### Important Files
```
Content:        index.html
Styling:        tailwind.config.js + src/styles/main.css
JavaScript:     src/js/main.js
Build Config:   vite.config.js
Dependencies:   package.json
```

---

## 🎓 Learning Path

### Beginner (Just want it live)
1. QUICKSTART.md → Setup
2. Edit index.html → Content
3. DEPLOYMENT.md → Deploy

### Intermediate (Want to customize)
1. SETUP.md → Full setup
2. CUSTOMIZATION.md → Design changes
3. index.html → Content updates
4. DEPLOYMENT.md → Deploy

### Advanced (Want to extend)
1. SETUP.md → Deep understanding
2. CUSTOMIZATION.md → All options
3. README.md → Architecture
4. CONTRIBUTING.md → Add features

---

## ✨ Next Steps

1. **Choose your path** above
2. **Click link** ke file dokumentasi
3. **Follow instructions**
4. **Build something amazing!**

---

## 📞 Quick Help

**Where to start?**
→ [QUICKSTART.md](QUICKSTART.md)

**How to customize?**
→ [CUSTOMIZATION.md](CUSTOMIZATION.md)

**How to deploy?**
→ [DEPLOYMENT.md](DEPLOYMENT.md)

**Before launch?**
→ [CHECKLIST.md](CHECKLIST.md)

**Full details?**
→ [README.md](README.md)

---

**Happy building! 🚀**
