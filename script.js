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
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // ── Scroll Handler (RAF-throttled for buttery perf) ─────────────────────
  let rafPending = false;

  function onScroll() {
    if (rafPending) return;
    rafPending = true;

    requestAnimationFrame(() => {
      // Header glass effect on scroll
      header.classList.toggle('scrolled', window.scrollY > 50);

      // Active nav link based on current section
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 160) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').slice(1) === current);
      });

      rafPending = false;
    });
  }

  // passive:true → browser can optimise scrolling without waiting for JS
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Scroll Reveal (IntersectionObserver) ────────────────────────────────
  // Watches every [data-reveal] element and adds .is-visible when in view.
  // Stagger delays live in CSS via [data-reveal-delay] selectors.

  const isPhone  = window.matchMedia('(max-width: 480px)').matches;
  const isTablet = window.matchMedia('(max-width: 768px)').matches;

  // Threshold: how much of the element must be visible before animating in.
  // rootMargin: negative bottom margin = element must scroll THIS far INTO
  // the viewport before revealing (creates the satisfying "earn it" effect).
  const revealThreshold  = isPhone ? 0.04 : isTablet ? 0.07 : 0.12;
  const revealRootMargin = isPhone ? '0px 0px -10px 0px'
                         : isTablet ? '0px 0px -30px 0px'
                         : '0px 0px -60px 0px';

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      el.classList.add('is-visible');
      observer.unobserve(el); // fire once → detach to save memory
    });
  }, {
    threshold: revealThreshold,
    rootMargin: revealRootMargin,
  });

  document.querySelectorAll('[data-reveal]').forEach(el => {
    revealObserver.observe(el);
  });

  // ── Portfolio Filter ─────────────────────────────────────────────────────
  const filterBtns      = document.querySelectorAll('.filter-btn');
  const portofolioCards = document.querySelectorAll('.portofolio-card');

  filterBtns.forEach(btn =>{
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      portofolioCards.forEach((card, i) => {
        const match = filter === 'all' || card.getAttribute('data-category') === filter;

        if (match) {
          card.style.display = '';
          // Stagger based on visible index (i * 60ms, max 300ms)
          const delay = Math.min(i * 60, 300);
          requestAnimationFrame(() => {
            card.style.transition = `opacity 0.35s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.35s cubic-bezier(0.22,1,0.36,1) ${delay}ms`;
            card.style.opacity    = '1';
            card.style.transform  = 'translateY(0)';
          });
        } else {
          card.style.transition = 'opacity 0.18s cubic-bezier(0.4,0,0.2,1)';
          card.style.opacity    = '0';
          card.style.transform  = 'translateY(6px)';
          const onEnd = () => {
            card.style.display = 'none';
            card.removeEventListener('transitionend', onEnd);
          };
          card.addEventListener('transitionend', onEnd);
        }
      });
    });
  });

  // ── Portfolio Tabs (Projects / Tools) ────────────────────────────────────
  const portoTabs   = document.querySelectorAll('.porto-tab');
  const tabPanels   = document.querySelectorAll('.porto-tab-panel');

  portoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      // Update active tab button
      portoTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Fade out current panel, then switch
      const currentPanel = document.querySelector('.porto-tab-panel.active');
      if (currentPanel) {
        currentPanel.style.opacity   = '0';
        currentPanel.style.transform = 'translateY(8px)';
        setTimeout(() => {
          tabPanels.forEach(p => p.classList.remove('active'));
          const nextPanel = document.getElementById('tab-' + target);
          if (nextPanel) {
            nextPanel.classList.add('active');
            // Reset inline styles so CSS transition takes over
            requestAnimationFrame(() => {
              nextPanel.style.opacity   = '';
              nextPanel.style.transform = '';
            });
          }
          if (currentPanel !== nextPanel) {
            currentPanel.style.opacity   = '';
            currentPanel.style.transform = '';
          }
        }, 220);
      }
    });
  });
});
