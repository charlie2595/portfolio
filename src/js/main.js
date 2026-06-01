// Dark mode toggle
export function setupDarkMode() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const htmlElement = document.documentElement;
  
  // Check for saved theme preference or default to system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  // Apply theme
  applyTheme(theme);
  
  // Toggle button event listener
  darkModeToggle?.addEventListener('click', () => {
    const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

function applyTheme(theme) {
  const htmlElement = document.documentElement;
  if (theme === 'dark') {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }
}

// Mobile menu toggle
export function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = mobileMenu?.querySelectorAll('a');
  
  mobileMenuBtn?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.contains('hidden');
    if (isOpen) {
      mobileMenu?.classList.remove('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu?.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Close menu when a link is clicked
  navLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
      mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    });
  });
}

// Smooth scroll behavior
export function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Intersection Observer for animations
export function setupIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });
  
  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
}

// Contact form handling
export function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn?.textContent;
      
      try {
        if (submitBtn) submitBtn.textContent = 'Mengirim...';
        submitBtn?.setAttribute('disabled', 'true');
        
        // Using Formspree
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          if (submitBtn) submitBtn.textContent = '✓ Terkirim!';
          contactForm.reset();
          setTimeout(() => {
            if (submitBtn) submitBtn.textContent = originalText;
            submitBtn?.removeAttribute('disabled');
          }, 3000);
        }
      } catch (error) {
        console.error('Error:', error);
        if (submitBtn) submitBtn.textContent = 'Gagal mengirim';
        setTimeout(() => {
          if (submitBtn) submitBtn.textContent = originalText;
          submitBtn?.removeAttribute('disabled');
        }, 3000);
      }
    });
  }
}

// Initialize all
export function init() {
  setupDarkMode();
  setupMobileMenu();
  setupSmoothScroll();
  setupIntersectionObserver();
  setupContactForm();
}
