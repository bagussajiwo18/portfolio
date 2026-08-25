"use client";

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const isPhone = window.matchMedia('(max-width: 480px)').matches;
    const isTablet = window.matchMedia('(max-width: 768px)').matches;

    const revealThreshold = isPhone ? 0.04 : isTablet ? 0.07 : 0.12;
    const revealRootMargin = isPhone ? '0px 0px -10px 0px'
      : isTablet ? '0px 0px -30px 0px'
        : '0px 0px -60px 0px';

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('is-visible');
        observer.unobserve(el);
      });
    }, {
      threshold: revealThreshold,
      rootMargin: revealRootMargin,
    });

    document.querySelectorAll('[data-reveal], .hero-entrance').forEach(el => {
      revealObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
