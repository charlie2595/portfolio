"# 🚀 Portfolio Website

Sebuah portfolio website profesional untuk software developer yang dibangun dengan teknologi modern dan siap di-deploy ke GitHub Pages.

## ✨ Features

- ✅ **Fully Responsive** - Mobile, tablet, dan desktop optimized
- ✅ **Dark Mode Support** - Light/dark theme dengan persistent storage
- ✅ **Fast Performance** - Optimized dengan Vite, Lighthouse score > 90
- ✅ **SEO Friendly** - Meta tags, structured data, semantic HTML
- ✅ **Accessible** - WCAG 2.1 compliant
- ✅ **Modern Design** - Clean, professional, dengan smooth animations
- ✅ **Contact Form** - Terintegrasi dengan Formspree.io
- ✅ **Social Links** - GitHub, LinkedIn, Twitter, dan lainnya
- ✅ **CV Download** - Link untuk download resume/CV

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Interactivity**: Alpine.js (optional)

## 📋 Requirements

- Node.js 16+
- npm atau yarn
- Git

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/charlie2595/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Development Server

```bash
npm run dev
```

Buka browser dan akses `http://localhost:3000`

### 4. Build untuk Production

```bash
npm run build
```

Output akan disimpan di folder `dist/`

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                      # Static assets
├── src/
│   ├── assets/                 # Images, icons, etc
│   ├── components/             # Reusable components
│   ├── js/
│   │   └── main.js            # Main JavaScript file
│   ├── styles/
│   │   └── main.css           # Tailwind + custom styles
│   └── index.html              # Main HTML (hanya 1 file)
├── index.html                  # Entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── README.md
```

## ✏️ Customization

### 1. Update Personal Information

Edit `index.html` dan update:
- Nama dan title
- Bio dan deskripsi
- Links social media (GitHub, LinkedIn, Twitter)
- Email dan contact information
- Projects description dan links
- Experience dan timeline

### 2. Update Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Update color palette
    600: '#2563eb', // Ganti dengan warna favorit Anda
  },
  accent: {
    500: '#3b82f6',
    600: '#2563eb',
  }
}
```

### 3. Setup Contact Form

1. Buka [formspree.io](https://formspree.io)
2. Create account dan setup form
3. Copy Form ID dari Formspree
4. Update di `src/js/main.js`:

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ...
})
```

### 4. Add Resume/CV

1. Letakkan file PDF di folder `public/` dengan nama `resume.pdf`
2. Link di HTML sudah tersedia untuk download

### 5. Replace Placeholder Images

- Hero section image di `index.html`
- Ganti emoji placeholder dengan foto actual
- Optimize images (WebP format recommended)

## 🌐 Deployment ke GitHub Pages

### Setup Awal (1 kali saja)

1. Push code ke GitHub repository `charlie2595/portfolio`

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. Di GitHub, pergi ke **Settings > Pages**
3. Pilih **Deploy from a branch**
4. Pilih branch: `main` dan folder: `/ (root)`
5. Klik Save

### Deploy Otomatis

Setiap kali Anda push ke branch `main`, GitHub Actions akan otomatis:
1. Install dependencies
2. Build project
3. Deploy ke GitHub Pages

Portfolio akan tersedia di: `https://charlie2595.github.io/portfolio`

### Custom Domain (Optional)

1. Beli custom domain di registrar (GoDaddy, Namecheap, etc)
2. Configure DNS settings menunjuk ke GitHub Pages
3. Di GitHub Settings > Pages, masukkan custom domain
4. GitHub akan auto-generate SSL certificate

## 📊 Performance Optimization

Website sudah dioptimasi dengan:

- ✅ Code minification (CSS & JS)
- ✅ Image lazy loading
- ✅ Smooth animations dengan hardware acceleration
- ✅ Responsive design untuk semua ukuran
- ✅ Cached static assets

Cek Lighthouse score:
```bash
npm run build
npm run preview
# Buka DevTools > Lighthouse dan generate report
```

## 🔧 Available Scripts

```bash
# Development server dengan hot reload
npm run dev

# Build untuk production
npm run build

# Preview production build locally
npm run preview

# Lint JavaScript (if eslint configured)
npm run lint
```

## 📝 SEO Optimization

File sudah include:

- Meta tags (description, keywords, author)
- Open Graph tags (social sharing)
- Semantic HTML structure
- Mobile viewport configuration
- .nojekyll file (untuk GitHub Pages)

Tips tambahan:
- Add structured data (JSON-LD) untuk rich snippets
- Submit sitemap ke Google Search Console
- Monitor performance di PageSpeed Insights

## 🔐 Security

- No sensitive data in code
- All external links have proper rel attributes
- Input sanitization di contact form
- Content Security Policy headers (via GitHub Pages)

## 🤝 Contributing

Contributions welcome! Silakan:
1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

Project ini menggunakan MIT License - lihat file LICENSE untuk detail.

## 💡 Tips & Tricks

### Dark Mode Testing

```javascript
// Test dark mode di console
localStorage.setItem('theme', 'dark');
location.reload();
```

### Mobile Testing

```bash
# View local dev server dari mobile
# Cari IP address:
ipconfig getifaddr en0  # macOS
hostname -I             # Linux
ipconfig                # Windows

# Akses dari mobile browser:
# http://YOUR_IP_ADDRESS:3000
```

### GitHub Actions Debugging

- Lihat logs di **Actions** tab di GitHub
- Aktifkan debug logging untuk troubleshooting

## 🆘 Troubleshooting

### Build fails dengan error

```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Dark mode tidak bekerja

- Check localStorage di DevTools
- Pastikan JavaScript enabled di browser
- Clear browser cache

### Contact form tidak mengirim

- Verify Formspree Form ID di `src/js/main.js`
- Check browser console untuk error messages
- Test via Formspree dashboard

### GitHub Pages tidak update

- Check GitHub Actions tab untuk build status
- Verify branch settings di GitHub > Settings > Pages
- Clear browser cache atau buka incognito

## 📚 Resources

- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [GitHub Pages Guide](https://pages.github.com)
- [Web Vitals](https://web.dev/vitals/)

## 📞 Support

Jika ada pertanyaan atau issue:
1. Cek dokumentasi di atas
2. Buka GitHub Issues
3. Contact via email atau social media

---

**Built with ❤️ untuk Software Developers**

Happy coding! 🚀" 
