# Deployment Guide - GitHub Pages

Panduan lengkap untuk deploy portfolio ke GitHub Pages dengan custom domain (optional).

## 🚀 Auto Deployment Setup

### 1. GitHub Repository Setup

```bash
# Jika belum ada repository
git init
git add .
git commit -m "Initial commit"

# Tambah remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename ke main (jika perlu)
git branch -M main

# Push
git push -u origin main
```

### 2. Enable GitHub Pages

**Via Web Interface:**

1. Pergi ke: `github.com/YOUR_USERNAME/portfolio`
2. Click **Settings** tab
3. Di sidebar kiri, click **Pages**
4. Under **Source**:
   - Select: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

**Atau via CLI:**

```bash
# Gunakan GitHub CLI
gh repo create portfolio --public
gh repo edit --enable-pages --pages-source-branch main --pages-source-path /
```

### 3. Workflow Verification

Portfolio Anda akan tersedia di:
```
https://YOUR_USERNAME.github.io/portfolio
```

**Check deployment status:**

1. Pergi ke repository
2. Click **Actions** tab
3. Lihat "Deploy to GitHub Pages" workflow
4. Tunggu hingga selesai (biasanya 1-3 menit)

## 🌐 Custom Domain Setup

### Step 1: Buy Domain

Opsi popular:
- [Namecheap](https://namecheap.com) - Affordable
- [GoDaddy](https://godaddy.com) - Popular
- [Google Domains](https://domains.google) - Simple
- [Route53](https://aws.amazon.com/route53/) - AWS integration

### Step 2: Configure DNS Records

**Option A: Using A Record (Recommended)**

Add DNS A record pointing to GitHub IPs:
```
Host: @
Type: A
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**Option B: Using ALIAS/ANAME Record**

```
Type: ALIAS/ANAME
Name: @
Value: YOUR_USERNAME.github.io
```

**Option C: Using CNAME Record (subdomain only)**

```
Host: www
Type: CNAME
Value: YOUR_USERNAME.github.io
```

### Step 3: GitHub Pages Custom Domain

1. Pergi ke repository **Settings > Pages**
2. Under **Custom domain**, masukkan: `yourdomain.com`
3. Click **Save**
4. GitHub akan auto-validate DNS
5. GitHub auto-generate SSL certificate

**Atau via CLI:**

```bash
# Set custom domain
gh repo edit --enable-pages --pages-custom-domain yourdomain.com
```

### Step 4: Enforce HTTPS

1. Di repository **Settings > Pages**
2. Check: **Enforce HTTPS**
3. Tunggu SSL certificate generate (15 menit - 1 jam)

## 🔄 Update & Redeploy

### Push Updates

```bash
# 1. Make changes
# Edit files

# 2. Stage changes
git add .

# 3. Commit
git commit -m "Update portfolio content"

# 4. Push
git push origin main
```

GitHub Actions akan otomatis:
1. Detect push
2. Install dependencies
3. Build project
4. Deploy ke GitHub Pages

Check status di **Actions** tab.

### Manual Build & Deploy

```bash
# Build locally
npm run build

# Hasilnya di folder 'dist'
# GitHub Pages akan auto-deploy dari main branch
```

## 🛠️ Troubleshooting Deployment

### Workflow Failed

**Check logs:**
1. Repository > Actions tab
2. Click failed workflow
3. Expand job untuk lihat error
4. Common issues:
   - Node version mismatch
   - Dependency installation failed
   - Build errors

**Common fixes:**

```bash
# Clear npm cache
npm cache clean --force

# Delete lockfile dan reinstall
rm -rf node_modules package-lock.json
npm install

# Try build locally
npm run build
```

### Domain Not Pointing to GitHub

Verify DNS records:

```bash
# Using dig command
dig yourdomain.com

# Expected output:
# yourdomain.com. 3600 IN A 185.199.108.153
```

Wait 24-48 jam untuk DNS propagation.

### SSL Certificate Not Generating

1. Verify domain di GitHub Pages settings
2. Check DNS records correct
3. Uncheck/recheck **Enforce HTTPS**
4. Wait up to 24 hours

### Old Content Still Showing

```bash
# Hard refresh di browser
Ctrl + Shift + R  # Windows/Linux
Cmd + Shift + R   # Mac

# Clear Cloudflare cache (jika menggunakan)
https://www.cloudflare.com/cdn-cgi/purge_cache
```

## 📊 Monitor Deployment

### GitHub Actions Status

```bash
# Check workflow status
gh run list -R YOUR_USERNAME/portfolio

# View recent workflow
gh run view -R YOUR_USERNAME/portfolio
```

### Website Performance

1. **PageSpeed Insights**: https://pagespeed.web.dev
2. **Lighthouse**: DevTools > Lighthouse tab
3. **GTmetrix**: https://gtmetrix.com

### Check Deployment Logs

```bash
# Download workflow logs
gh run download -R YOUR_USERNAME/portfolio
```

## 🔐 Security Checklist

- [ ] HTTPS enabled
- [ ] DNS records configured correctly
- [ ] No sensitive data in repository
- [ ] Dependencies up to date
- [ ] GitHub Pages visibility set correctly
- [ ] Custom domain verified

## ⚡ Performance Optimization

### Build Optimization

Pada `vite.config.js`:

```javascript
build: {
  minify: 'terser',
  outDir: 'dist',
  rollupOptions: {
    output: {
      manualChunks: undefined,
    }
  }
}
```

### Image Optimization

1. Compress images:
   ```bash
   # Using imagemin
   npm install -D imagemin imagemin-mozjpeg imagemin-pngquant
   ```

2. Use WebP format:
   ```html
   <picture>
     <source srcset="image.webp" type="image/webp">
     <img src="image.jpg" alt="Description">
   </picture>
   ```

### Caching Strategy

GitHub Pages automatically handles:
- CSS/JS minification
- Gzip compression
- Cache headers

## 🚨 Emergency Rollback

```bash
# View commit history
git log --oneline

# Revert to previous commit
git revert <commit-hash>
git push

# GitHub will auto-redeploy
```

## 📞 Support Resources

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [DNS Propagation Check](https://dnschecker.org)
- [SSL Certificate Status](https://www.sslshopper.com/ssl-checker.html)

## ✅ Post-Deployment Checklist

- [ ] Website accessible via URL
- [ ] HTTPS working (padlock icon visible)
- [ ] Dark mode functioning
- [ ] Contact form working
- [ ] All links clickable
- [ ] Images loading
- [ ] Mobile responsive
- [ ] Performance score > 90
- [ ] Lighthouse all green

---

**Congratulations! Your portfolio is live! 🎉**

Next steps:
1. Share URL di LinkedIn, Twitter, resume
2. Monitor analytics (jika menggunakan)
3. Update content berkala
4. Collect feedback dari users
