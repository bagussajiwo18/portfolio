"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    let rafPending = false;

    const handleScroll = () => {
      if (rafPending) return;
      rafPending = true;

      requestAnimationFrame(() => {
        // Header glass effect on scroll
        setIsScrolled(window.scrollY > 50);

        // Active nav link based on current section
        const sections = document.querySelectorAll('section');
        let current = '';

        sections.forEach((section) => {
          if (window.scrollY >= section.offsetTop - 160) {
            current = section.getAttribute('id');
          }
        });

        if (current) {
          setActiveSection(current);
        } else if (window.scrollY < 50) {
          setActiveSection('beranda');
        }

        rafPending = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { href: '#beranda', label: 'Beranda', id: 'beranda' },
    { href: '#tentang-saya', label: 'Tentang Saya', id: 'tentang-saya' },
    { href: '#portofolio', label: 'Portofolio', id: 'portofolio' },
    { href: '#pendidikan', label: 'Pendidikan', id: 'pendidikan' },
    { href: '#pengalaman', label: 'Pengalaman', id: 'pengalaman' },
    { href: '#kontak', label: 'Kontak', id: 'kontak' },
  ];

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="container nav-wrapper">
        <Link href="#beranda" className="logo" id="nav-logo" onClick={() => setActiveSection('beranda')}>
          bagussajiwo
        </Link>
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          id="menu-toggle" 
          aria-label="Toggle Menu" 
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="nav-menu">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link 
                href={link.href} 
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(link.id);
                  setMenuOpen(false);
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
