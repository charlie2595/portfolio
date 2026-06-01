# Setup Instructions - Portfolio Developer

Panduan step-by-step untuk setup portfolio website Anda dengan GitHub Pages.

## ⚡ Quick Setup (5 Menit)

### Langkah 1: Setup Local Environment

```bash
# Clone repository
git clone https://github.com/charlie2595/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Akses `http://localhost:3000` di browser Anda.

### Langkah 2: Customize Content

Edit `index.html` dan update:
- Nama dan bio Anda
- Social media links
- Projects description
- Experience timeline
- Contact information

### Langkah 3: Add Your Photo

1. Siapkan foto profesional (format square)
2. Save sebagai `public/me.jpg`
3. Update HTML di section hero

### Langkah 4: Setup Contact Form

1. Visit [formspree.io](https://formspree.io)
2. Create new form
3. Copy Form ID
4. Update di `src/js/main.js` (cari `YOUR_FORM_ID`)

### Langkah 5: Build & Deploy

```bash
# Build untuk production
npm run build

# Push ke GitHub
git add .
git commit -m "Update portfolio content"
git push
```

GitHub Actions akan otomatis deploy ke GitHub Pages.

## 🔧 Full Setup Guide

### 1. Prerequisites

- Node.js 16+ (Download dari [nodejs.org](https://nodejs.org))
- Git (Download dari [git-scm.com](https://git-scm.com))
- GitHub Account (Create di [github.com](https://github.com))

### 2. Fork/Clone Repository

```bash
# Option 1: Clone
git clone https://github.com/charlie2595/portfolio.git

# Option 2: Fork di GitHub terlebih dahulu, kemudian clone
git clone https://github.com/YOUR_USERNAME/portfolio.git
```

### 3. Install Dependencies

```bash
cd portfolio
npm install
```

### 4. Development

```bash
# Start dev server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

### 5. Customization

#### Update Personal Info

Edit `index.html` dan cari section berikut:

**Hero Section:**
```html
<h1>Saya
    <span class="gradient-text">Software Developer</span>
    yang Passionate
</h1>
```

**About Section:**
```html
<p>Saya adalah software developer dengan pengalaman 5+ tahun...</p>
```

**Social Links:**
```html
<a href="https://github.com/YOUR_USERNAME">GitHub</a>
<a href="https://linkedin.com/in/YOUR_PROFILE">LinkedIn</a>
```

#### Add Your Photo

```bash
# 1. Copy foto ke public folder
cp /path/to/your/photo.jpg ./public/me.jpg

# 2. Update HTML
# Cari section hero dan uncomment image section
```

#### Setup Contact Form

```javascript
// Di src/js/main.js, cari:
fetch('https://formspree.io/f/YOUR_FORM_ID', {

// Ganti YOUR_FORM_ID dengan Form ID dari Formspree
```

#### Update Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  accent: {
    500: '#0ea5e9',  // Ubah warna
    600: '#0284c7',
    700: '#0369a1',
  }
}
```

### 6. GitHub Setup

#### A. Create GitHub Repository

1. Pergi ke [github.com/new](https://github.com/new)
2. Repository name: `portfolio`
3. Description: "My professional portfolio"
4. Pilih **Public**
5. Click **Create repository**

#### B. Configure Git

```bash
# Set your identity (first time only)
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Verify
git config --list
```

#### C. Push ke GitHub

```bash
# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch (jika menggunakan master)
git branch -M main

# Push
git push -u origin main
```

### 7. Enable GitHub Pages

1. Pergi ke repository settings: `github.com/YOUR_USERNAME/portfolio/settings`
2. Di sidebar, pilih **Pages**
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
4. Click **Save**

GitHub Pages akan aktif di: `https://YOUR_USERNAME.github.io/portfolio`

### 8. Setup Custom Domain (Optional)

1. Beli domain di registrar (GoDaddy, Namecheap, dll)
2. Configure DNS:
   - Type: **A**
   - Host: **@**
   - Points to: **185.199.108.153** (atau IP lainnya dari GitHub)
3. Di GitHub Pages settings, masukkan custom domain
4. GitHub akan auto-generate SSL certificate

## 🎨 Customization Tips

### Change Color Scheme

Pilih kombinasi warna favorit Anda di [tailwindcss.com/docs/customizing-colors](https://tailwindcss.com/docs/customizing-colors)

Kemudian update `tailwind.config.js`

### Add New Sections

Template untuk section baru:

```html
<section id="new-section" class="section-padding">
    <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
            Section Title
        </h2>
        <!-- Content here -->
    </div>
</section>
```

### Add Blog/Articles (Optional)

1. Create `blog.html` dengan struktur serupa
2. Add navigation link
3. Create article pages individual

## 🚀 Workflow

### Development

```bash
# 1. Start dev server
npm run dev

# 2. Make changes
# Edit files di src/ dan index.html

# 3. Test di browser
# Auto-refresh akan terjadi

# 4. Commit changes
git add .
git commit -m "Describe your changes"
git push
```

### Production

```bash
# 1. Build
npm run build

# 2. Test production build locally
npm run preview

# 3. Deploy
git push origin main
# GitHub Actions akan otomatis deploy
```

## 🆘 Troubleshooting

### npm install error

```bash
# Clear cache
npm cache clean --force

# Delete node_modules dan package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Port 3000 already in use

```bash
# Use different port
npm run dev -- --port 3001
```

### Git push error

```bash
# Set remote origin
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Try push again
git push -u origin main
```

### GitHub Pages not updating

1. Check Actions tab di GitHub repository
2. Verify workflow status
3. Clear browser cache
4. Wait 5-10 minutes untuk propagasi DNS

### Dark mode not working

```javascript
// Test di console
localStorage.clear()
location.reload()
```

## 📊 Performance Monitoring

### Lighthouse Score

1. Build project: `npm run build`
2. Preview: `npm run preview`
3. Open DevTools (F12)
4. Tab "Lighthouse"
5. Click "Generate report"

Target: Score > 90 di semua kategori

### Check Bundle Size

```bash
npm run build
# Lihat output size di console
```

## 📝 Before Going Live

Checklist sebelum deploy:

- [ ] Update semua personal information
- [ ] Add your photo
- [ ] Setup contact form (Formspree)
- [ ] Test dark mode
- [ ] Test responsive di mobile
- [ ] Check all links
- [ ] Build dan preview locally
- [ ] Push ke GitHub
- [ ] Verify GitHub Pages deployment
- [ ] Test live website
- [ ] Share dengan teman untuk feedback

## 🤚 Need Help?

- Check [README.md](README.md) untuk documentation
- Check [CUSTOMIZATION.md](CUSTOMIZATION.md) untuk tips
- Visit [Vite docs](https://vitejs.dev)
- Visit [Tailwind docs](https://tailwindcss.com)
- Open GitHub issue jika ada bug

---

**Selamat! Portfolio Anda sudah siap untuk dunia! 🚀**

Jangan lupa untuk:
- Update content secara berkala
- Share di LinkedIn dan social media
- Maintain code quality
- Monitor performance
