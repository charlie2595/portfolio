# 🎯 Quick Start Guide

**⏱️ 5-Minute Quick Start untuk Portfolio Developer**

## Langkah 1: Install Dependencies
```bash
npm install
```

## Langkah 2: Edit Content
```bash
# Buka index.html dan update:
# - Nama Anda
# - Bio/Deskripsi
# - Social media links
# - Projects
# - Experience
```

## Langkah 3: Add Your Photo
```bash
# Copy foto ke:
# ./public/me.jpg
# (atau update reference di HTML)
```

## Langkah 4: Setup Contact Form
```bash
# 1. Visit formspree.io
# 2. Create form
# 3. Copy Form ID
# 4. Update di src/js/main.js
#    cari: YOUR_FORM_ID
```

## Langkah 5: Test Locally
```bash
npm run dev
# Akses: http://localhost:3000
```

## Langkah 6: Deploy
```bash
# 1. Build
npm run build

# 2. Commit & Push
git add .
git commit -m "Update portfolio"
git push

# GitHub Actions otomatis deploy!
```

---

## 📚 Dokumentasi Lengkap

| File | Deskripsi |
|------|-----------|
| [README.md](README.md) | Overview & fitur utama |
| [SETUP.md](SETUP.md) | Step-by-step setup guide |
| [CUSTOMIZATION.md](CUSTOMIZATION.md) | Cara customize design & content |
| [DEPLOYMENT.md](DEPLOYMENT.md) | GitHub Pages deployment guide |
| [CHECKLIST.md](CHECKLIST.md) | Pre-deployment checklist |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Guidelines untuk contributors |

---

## 🚀 Deploy ke GitHub Pages

### 1. Create Repository
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages
1. Repository Settings > Pages
2. Deploy from branch: main / root
3. Save

### 3. Verify
- Visit: `https://YOUR_USERNAME.github.io/portfolio`
- Done! ✅

---

## 📁 Project Structure

```
portfolio/
├── .github/workflows/deploy.yml    # Auto-deploy to GitHub Pages
├── .gitignore                       # Git ignore rules
├── .nojekyll                        # GitHub Pages config
├── index.html                       # Main entry point
├── package.json                     # Dependencies
├── vite.config.js                  # Vite config
├── tailwind.config.js              # Tailwind config
├── postcss.config.js               # PostCSS config
├── public/
│   └── favicon.svg                 # Favicon
├── src/
│   ├── styles/
│   │   └── main.css               # Tailwind + custom styles
│   ├── js/
│   │   └── main.js                # JavaScript interactivity
│   └── assets/                     # Images, icons, etc
├── dist/                           # Build output (generated)
├── README.md                        # Documentation
├── SETUP.md                         # Setup guide
├── CUSTOMIZATION.md                 # Customization tips
├── DEPLOYMENT.md                    # Deployment guide
├── CHECKLIST.md                     # Pre-deploy checklist
├── CONTRIBUTING.md                  # Contributing guidelines
└── LICENSE                          # MIT License
```

---

## ✨ Features

✅ Fully Responsive (Mobile, Tablet, Desktop)  
✅ Dark Mode Support  
✅ Fast Performance (Lighthouse > 90)  
✅ SEO Friendly  
✅ WCAG 2.1 Accessible  
✅ Modern Design  
✅ Contact Form (Formspree)  
✅ Social Media Links  
✅ CV Download  
✅ GitHub Pages Ready  

---

## 🛠️ Tech Stack

- **HTML5** + **CSS3** + **JavaScript**
- **Vite** (Lightning fast build tool)
- **Tailwind CSS** (Utility-first styling)
- **GitHub Pages** (Free hosting)
- **GitHub Actions** (Auto-deploy)

---

## 🎨 Sections

1. **Hero** - Eye-catching introduction
2. **About** - Background & philosophy
3. **Skills** - Technologies & expertise
4. **Experience** - Work history timeline
5. **Projects** - Featured work showcase
6. **Contact** - Contact form & info
7. **Footer** - Links & social media

---

## 🔧 Available Commands

```bash
npm run dev      # Start dev server (hot reload)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Lint JavaScript (optional)
```

---

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Update personal info
3. ✅ Add your photo
4. ✅ Setup contact form
5. ✅ Test locally
6. ✅ Build & deploy
7. ✅ Share with world! 🌍

---

## 💡 Pro Tips

1. **Test Dark Mode**: Press Ctrl+Shift+R for hard refresh
2. **Mobile Testing**: Use DevTools > Toggle device toolbar
3. **Performance**: Run `npm run build` then check bundle size
4. **SEO**: Update meta tags di index.html
5. **Analytics**: Optional - Add Google Analytics

---

## ❓ FAQ

**Q: Berapa lama deploy ke GitHub Pages?**  
A: Biasanya 1-3 menit setelah push

**Q: Bagaimana setup custom domain?**  
A: Lihat [DEPLOYMENT.md](DEPLOYMENT.md) untuk full guide

**Q: Bisa pakai domain lain?**  
A: Ya! Beli domain, configure DNS, add di GitHub Pages

**Q: Gimana cara edit content?**  
A: Edit `index.html` - tidak perlu rebuild local, langsung push!

**Q: Performance website bagaimana?**  
A: Sudah optimized! Target Lighthouse score > 90

---

## 📞 Support

📖 Baca: [README.md](README.md)  
🚀 Setup: [SETUP.md](SETUP.md)  
🎨 Custom: [CUSTOMIZATION.md](CUSTOMIZATION.md)  
📤 Deploy: [DEPLOYMENT.md](DEPLOYMENT.md)  

---

**Ready to launch your portfolio? Let's go! 🚀**
