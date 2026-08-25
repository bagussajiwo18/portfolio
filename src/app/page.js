"use client";

import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // Scroll Reveal (IntersectionObserver)
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

  return (
    <>
      <Header />
      <Hero />

      {/* Tentang Saya Section */}
      <section className="about" id="tentang-saya">
        <div className="about-decor-bg">
          <svg viewBox="0 0 800 600" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="150" r="100" fill="#e8f9f3" />
            <path d="M500,450 Q600,300 700,500 T900,400" stroke="#5ad3a5" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 15" opacity="0.4" />
            <rect x="100" y="400" width="80" height="80" rx="20" transform="rotate(15 100 400)" fill="#e8f9f3" />
            <circle cx="650" cy="200" r="40" fill="#5ad3a5" opacity="0.1" />
          </svg>
        </div>
        <div className="container">
          <div className="section-header" data-reveal="up">
            <h2 className="section-title">Tentang Saya</h2>
          </div>
          <div className="about-content">
            <div className="about-text" data-reveal="up" data-reveal-delay="100">
              <p>Saya adalah mahasiswa Sistem Informasi yang memiliki minat pada teknologi, desain grafis, dan digital.
                Dengan pengalaman di bidang IT Support, Digital Marketing, dan Desain, saya senang mengeksplorasi ide serta
                mengubahnya menjadi karya yang fungsional dan menarik. Setiap project bagi saya adalah kesempatan untuk terus belajar,
                berkembang, dan menciptakan sesuatu yang lebih baik.</p>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />

      {/* Pendidikan Section */}
      <section className="education" id="pendidikan">
        <div className="container">
          <div className="section-header" data-reveal="up">
            <h2 className="section-title">Pendidikan</h2>
            <p className="section-subtitle">Riwayat Pendidikan</p>
          </div>
          <div className="education-content">
            <a href="javascript:void(0)" rel="noopener noreferrer" className="education-logo-container" data-reveal="scale" data-reveal-delay="0">
              <img src="/assets/images/smifda.jpg" alt="SMK Miftahul Huda Logo" width="100" height="100" />
            </a>
            <a href="https://binabangsa.ac.id/" target="_blank" rel="noopener noreferrer" className="education-logo-container" data-reveal="scale" data-reveal-delay="100">
              <img src="/assets/images/uniba_new.png" alt="Universitas Bina Bangsa Logo" width="100" height="100" />
            </a>
          </div>
        </div>
      </section>

      {/* Pengalaman Section */}
      <section className="experience" id="pengalaman">
        <div className="container">
          <div className="section-header" data-reveal="up">
            <h2 className="section-title">Pengalaman</h2>
            <p className="section-subtitle">Pengalaman Kerja, &amp; Magang</p>
          </div>
          <div className="experience-content">
            <a href="https://krakatausteel.com" target="_blank" rel="noopener noreferrer" className="experience-logo-container" data-reveal="scale" data-reveal-delay="0">
              <div className="experience-logo">
                <img src="/assets/images/kitech.png" alt="kitech Logo" width="100" height="100" />
              </div>
            </a>
            <a href="https://rskurnia.co.id/" target="_blank" rel="noopener noreferrer" className="experience-logo-container" data-reveal="scale" data-reveal-delay="80">
              <div className="experience-logo">
                <img src="/assets/images/rskurnia.png" alt="rs_Kurnia Logo" width="100" height="100" />
              </div>
            </a>
            <a href="https://icha.co.id/" target="_blank" rel="noopener noreferrer" className="experience-logo-container" data-reveal="scale" data-reveal-delay="160">
              <div className="experience-logo">
                <img src="/assets/images/simrs_icha.png" alt="ICHA Logo" width="100" height="100" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section className="contact" id="kontak">
        <div className="container">
          <div className="section-header" data-reveal="up">
            <h2 className="section-title">Kontak</h2>
            <p className="section-subtitle">Hubungi Saya</p>
          </div>
          <div className="contact-content">
            <p className="hero-subtitle" data-reveal="up" data-reveal-delay="80">Ingin berkolaborasi atau order desain? Silakan hubungi saya melalui platform di bawah ini.</p>
            <div className="contact-socials">
              {/* WhatsApp */}
              <a href="https://wa.me/628984985121" target="_blank" rel="noopener noreferrer" className="social-icon" data-reveal="up" data-reveal-delay="0">
                <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
              {/* Email */}
              <a href="mailto:bagussajiwo8412@gmail.com" className="social-icon" data-reveal="up" data-reveal-delay="60">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/bagus-sajiwo-19aa63373" target="_blank" rel="noopener noreferrer" className="social-icon" data-reveal="up" data-reveal-delay="120">
                <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/bagussajiwo18" target="_blank" rel="noopener noreferrer" className="social-icon" data-reveal="up" data-reveal-delay="180">
                <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/xjiwobgs" target="_blank" rel="noopener noreferrer" className="social-icon" data-reveal="up" data-reveal-delay="240">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-col footer-info" data-reveal="up" data-reveal-delay="0">
              <h4 className="footer-col-title">Bagus Sajiwo</h4>
              <ul className="footer-list">
                <li>
                  <svg className="footer-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  <span>bagussajiwo8412@gmail.com</span>
                </li>
                <li>
                  <svg className="footer-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" /></svg>
                  <span>Kota Cilegon</span>
                </li>
              </ul>
            </div>
            <div className="footer-col" data-reveal="up" data-reveal-delay="100">
              <h4 className="footer-col-title">Tautan</h4>
              <ul className="footer-list">
                <li><Link href="#beranda">Beranda</Link></li>
                <li><Link href="#tentang-saya">Tentang Saya</Link></li>
                <li><Link href="#portofolio">Portofolio</Link></li>
                <li><Link href="#pendidikan">Pendidikan</Link></li>
                <li><Link href="#pengalaman">Pengalaman</Link></li>
                <li><Link href="#kontak">Kontak</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 bagussajiwo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
