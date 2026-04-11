/* ═══════════════════════════════════════
   RIYAN FOODS AND SPICES LLP — main.js
   ═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll ── */
  const navbar = document.getElementById('navbar');
  const onLightPage = document.body.classList.contains('light-page');
  if (navbar) {
    const update = () => {
      if (window.scrollY > 55) {
        navbar.classList.add('scrolled');
        if (onLightPage) navbar.classList.remove('on-light');
      } else {
        navbar.classList.remove('scrolled');
        if (onLightPage) navbar.classList.add('on-light');
      }
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ── Mobile menu ── */
  const burger = document.getElementById('nav-burger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (burger && mobileMenu) {
    const toggle = () => {
      const open = mobileMenu.classList.toggle('open');
      burger.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      // Adjust top for short navbars on small screens
      const navH = document.getElementById('navbar')?.offsetHeight || 70;
      mobileMenu.style.top = navH + 'px';
    };
    burger.addEventListener('click', toggle);
    burger.addEventListener('touchend', (e) => { e.preventDefault(); toggle(); });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── IntersectionObserver reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => io.observe(el));
  }

  /* ── Smooth anchor scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  /* ── Active nav link ── */
  const current = window.location.pathname.split('/').pop() || '/index';
  document.querySelectorAll('#navbar .nav-links a, #mobile-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === current || (current === '' && href === '/index')) {
      a.classList.add('active');
    }
  });

  /* ── Counter animation ── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = +el.dataset.count;
        const suffix = el.dataset.suffix || '';
        let start = 0;
        const dur = 1800, step = 16;
        const inc = target / (dur / step);
        const t = setInterval(() => {
          start += inc;
          if (start >= target) { start = target; clearInterval(t); }
          el.textContent = Math.floor(start) + suffix;
        }, step);
        cio.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(el => cio.observe(el));
  }
});
