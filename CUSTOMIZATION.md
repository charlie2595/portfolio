# Customization Guide

Panduan lengkap untuk customize portfolio website sesuai kebutuhan Anda.

## 🎨 Design Customization

### Change Color Scheme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        // ... ubah sesuai preference
        600: '#YOUR_PRIMARY_COLOR',
        700: '#YOUR_DARKER_COLOR',
      },
      accent: {
        500: '#3b82f6',  // Ubah ke warna accent favorit
        600: '#2563eb',
        700: '#1d4ed8',
      }
    }
  }
}
```

### Common Color Combinations

1. **Professional Blue**
   - Primary: #1e40af (Dark Blue)
   - Accent: #0ea5e9 (Cyan)

2. **Modern Purple**
   - Primary: #6d28d9 (Purple)
   - Accent: #ec4899 (Pink)

3. **Tech Green**
   - Primary: #059669 (Emerald)
   - Accent: #10b981 (Green)

4. **Vibrant Orange**
   - Primary: #ea580c (Orange)
   - Accent: #f97316 (Orange Light)

### Change Typography

Edit `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],  // Ubah font sans
  mono: ['JetBrains Mono', 'monospace'],          // Ubah font mono
}
```

Tambahkan di `src/styles/main.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
```

## 📝 Content Customization

### Update Hero Section

Di `index.html`, cari section `<!-- Hero Section -->` dan update:

```html
<h1 class="text-4xl md:text-6xl font-bold leading-tight">
    Saya
    <span class="gradient-text">Software Developer</span>
    yang Passionate
</h1>

<p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
    [Update dengan bio Anda]
</p>
```

### Add Your Photo

1. Siapkan foto profesional (square format, 400x400px recommended)
2. Save di folder `public/` dengan nama `me.jpg` atau `me.png`
3. Update di HTML:

```html
<div class="relative w-80 h-80 rounded-2xl bg-gradient-to-br from-accent-500 to-blue-600 p-1">
    <div class="w-full h-full rounded-2xl overflow-hidden">
        <img src="/me.jpg" alt="Foto Profil" class="w-full h-full object-cover">
    </div>
</div>
```

### Update Social Links

Cari dan update di `index.html`:

```html
<!-- GitHub -->
<a href="https://github.com/YOUR_USERNAME" class="..." title="GitHub">

<!-- LinkedIn -->
<a href="https://linkedin.com/in/YOUR_PROFILE" class="..." title="LinkedIn">

<!-- Twitter -->
<a href="https://twitter.com/YOUR_HANDLE" class="..." title="Twitter">
```

### Customize Skills

Edit section `<!-- Skills Section -->`:

```html
<div class="p-6 bg-white dark:bg-gray-800 rounded-xl card-hover" data-animate>
    <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
        <span>🎨</span> Frontend
    </h3>
    <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
        <li>Your Skill 1</li>
        <li>Your Skill 2</li>
        <!-- Add more -->
    </ul>
</div>
```

### Update Projects

Edit section `<!-- Projects Section -->`:

Setiap project card memiliki struktur:

```html
<div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden card-hover group" data-animate>
    <!-- Update thumbnail color -->
    <div class="h-48 bg-gradient-to-br from-accent-500 to-blue-600 ...">
        <!-- Ganti emoji atau icon -->
        <span class="text-6xl">🛒</span>
    </div>
    
    <div class="p-6">
        <!-- Update title -->
        <h3 class="text-xl font-bold mb-2">Project Title</h3>
        
        <!-- Update description -->
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Project description
        </p>
        
        <!-- Update tech stack -->
        <div class="flex gap-2 flex-wrap mb-4">
            <span class="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">Tech 1</span>
            <span class="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">Tech 2</span>
        </div>
        
        <!-- Update links -->
        <div class="flex gap-2">
            <a href="https://your-demo.com" class="flex-1 ...">Live Demo</a>
            <a href="https://github.com/your-repo" class="flex-1 ...">GitHub</a>
        </div>
    </div>
</div>
```

### Update Experience Timeline

Edit section `<!-- Experience Section -->`:

```html
<div class="p-6 bg-white dark:bg-gray-800 rounded-xl card-hover" data-animate>
    <div class="flex items-start justify-between mb-4">
        <div>
            <h3 class="text-xl font-bold">Position Title</h3>
            <p class="text-accent-600 dark:text-accent-400 font-medium">Company Name</p>
        </div>
        <span class="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
            YYYY - YYYY
        </span>
    </div>
    <p class="text-gray-600 dark:text-gray-400 mb-4">
        [Job description]
    </p>
    <div class="flex gap-2 flex-wrap">
        <span class="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30">Skill 1</span>
        <span class="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30">Skill 2</span>
    </div>
</div>
```

## 🔧 Functionality Customization

### Setup Contact Form

1. Visit [formspree.io](https://formspree.io)
2. Sign up dengan email Anda
3. Create new form dengan nama "contact"
4. Copy Form ID
5. Update di `src/js/main.js`:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
  method: 'POST',
  body: formData,
  headers: {
    'Accept': 'application/json'
  }
});
```

### Add More Sections

Untuk menambah section baru, copy template berikut:

```html
<!-- New Section -->
<section id="new-section" class="section-padding bg-gray-50 dark:bg-gray-900">
    <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center" data-animate>
            Section Title
        </h2>
        
        <div class="space-y-6" data-animate>
            <!-- Your content here -->
        </div>
    </div>
</section>
```

Jangan lupa:
1. Add link di navigation: `<li><a href="#new-section">...</a></li>`
2. Update mobile menu juga

### Change Navigation

Edit file `index.html` bagian `<nav>`:

```html
<ul class="hidden md:flex items-center gap-8">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <!-- Add/remove sesuai kebutuhan -->
</ul>
```

## 📱 Responsive Adjustments

### Modify Breakpoints

Edit `vite.config.js` jika perlu custom breakpoints. Tailwind default:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Adjust Spacing

Di `tailwind.config.js`:

```javascript
theme: {
  extend: {
    spacing: {
      '128': '32rem',  // Add custom spacing
      '144': '36rem',
    }
  }
}
```

## 🎬 Animation Customization

Edit `src/styles/main.css` untuk modify animations:

```css
@keyframes slideUp {
  from {
    transform: translateY(40px);  // Ubah nilai untuk lebih/kurang jauh
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

Atau di `tailwind.config.js`:

```javascript
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
}
```

## 🌍 Internationalization (Optional)

Untuk support multi-language, tambahkan di `src/js/main.js`:

```javascript
const translations = {
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
  },
  id: {
    home: 'Beranda',
    about: 'Tentang',
    skills: 'Skill',
  }
};

function changeLanguage(lang) {
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  // Update DOM elements
}
```

## 📊 Analytics (Optional)

Tambahkan Google Analytics di `index.html` sebelum closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');
</script>
```

## 🔄 Deployment Customization

### Change GitHub Pages URL

Jika menggunakan custom domain, update di `vite.config.js`:

```javascript
export default defineConfig({
  base: '/',  // Jika menggunakan custom domain
  // atau
  base: '/portfolio/',  // Jika menggunakan repo default
})
```

## 📚 Testing Changes

```bash
# Development dengan hot reload
npm run dev

# Build production
npm run build

# Preview build production
npm run preview
```

Setiap kali membuat perubahan di development mode, browser akan auto-refresh.

---

**Tips**: Gunakan browser DevTools (F12) untuk test responsive design dan console untuk debug.
