document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu   = document.getElementById('nav-menu');
  const header    = document.getElementById('header');
  const navLinks  = document.querySelectorAll('.nav-link');
  const sections  = document.querySelectorAll('section');

  // ── Mobile Menu Toggle ──────────────────────────────────────────────────
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // ── Scroll Handler (RAF-throttled for smooth perf) ──────────────────────
  let rafPending = false;

  function onScroll() {
    if (rafPending) return;
    rafPending = true;

    requestAnimationFrame(() => {
      // Header scroll class
      header.classList.toggle('scrolled', window.scrollY > 50);

      // Active nav link
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 160) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        const isActive = link.getAttribute('href').slice(1) === current;
        link.classList.toggle('active', isActive);
      });

      rafPending = false;
    });
  }

  // passive:true tells the browser we never call preventDefault → smoother scrolling
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Scroll Reveal (IntersectionObserver) ────────────────────────────────
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('active');
      observer.unobserve(entry.target);   // fire once, then detach
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ── Portfolio Filter ─────────────────────────────────────────────────────
  const filterBtns      = document.querySelectorAll('.filter-btn');
  const portofolioCards = document.querySelectorAll('.portofolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      portofolioCards.forEach(card => {
        const match = filter === 'all' || card.getAttribute('data-category') === filter;

        if (match) {
          // Bring back: reset display first, then fade in via rAF
          card.style.display = '';
          // Force reflow in a single rAF so transition fires cleanly
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.3s cubic-bezier(0.22,1,0.36,1), transform 0.3s cubic-bezier(0.22,1,0.36,1)';
            card.style.opacity    = '1';
            card.style.transform  = 'translateY(0)';
          });
        } else {
          card.style.transition = 'opacity 0.18s cubic-bezier(0.4,0,0.2,1)';
          card.style.opacity    = '0';
          card.style.transform  = 'translateY(8px)';
          // Hide after fade completes (match the 180ms transition)
          const onEnd = () => {
            card.style.display = 'none';
            card.removeEventListener('transitionend', onEnd);
          };
          card.addEventListener('transitionend', onEnd);
        }
      });
    });
  });
});
