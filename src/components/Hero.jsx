"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Add simple entrance animation logic here if needed, or rely on CSS
  }, []);

  return (
    <section className="hero" id="beranda">
      <div className="hero-bg-glow glow-1"></div>
      <div className="hero-bg-glow glow-2"></div>
      <div className="hero-bg-glow glow-3"></div>
      <div className="hero-blue-semicircle"></div>

      <div className="container hero-container">
        {/* Title Block */}
        <div className="hero-title-block hero-entrance" data-entrance="up" data-entrance-delay="0">
          <h1 className="hero-main-title">Hi I'm Bagus Sajiwo</h1>
          <h2 className="hero-serif-subtitle">Information System</h2>
        </div>

        {/* Main Layout Grid / Layers */}
        <div className="hero-main-content">


          {/* Center Portrait Image */}
          <div className="hero-portrait-wrapper hero-entrance" data-entrance="up" data-entrance-delay="150">
            {/* Using standard img for exact CSS matching, but can use next/image later */}
            <img src="/assets/images/pp_bagussajiwo.png" alt="Bagus Sajiwo - Portrait" className="hero-portrait-img" />
            <div className="portrait-fade-mask-bottom"></div>
          </div>

          {/* Floating Left Bottom: Client Proof */}
          <div className="hero-trust-badge hero-entrance" data-entrance="left" data-entrance-delay="300">
            <div className="avatar-group">
              <span className="avatar-dot av-red">A</span>
              <span className="avatar-dot av-amber">W</span>
              <span className="avatar-dot av-teal">B</span>
            </div>
            <p className="trust-text">Trusted by <strong>100+ happy clients</strong><br />across businesses.</p>
          </div>

          {/* Floating Right Center: Bio Description */}
          <div className="hero-bio-desc hero-entrance" data-entrance="right" data-entrance-delay="250">
            <p className="bio-text">Portofolio ini menampilkan proyek yang telah saya buat sebagai desainer grafis dan
              pengembang dibidang teknologi.
            </p>
          </div>

          {/* Floating Right Bottom: CTA Button */}
          <div className="hero-cta-wrapper hero-entrance" data-entrance="right" data-entrance-delay="350">
            <Link href="#portofolio" className="btn-dark-pill" id="hero-cta-btn">
              <span>Lihat Portofolio</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
