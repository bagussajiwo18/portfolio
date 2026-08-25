"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section className="portofolio" id="portofolio">
      <div className="container">
        <div className="section-header" data-reveal="up">
          <h2 className="section-title">Portofolio</h2>
          <p className="section-subtitle">Berikut beberapa project yang pernah dikembangkan</p>
        </div>

        {/* Tab Buttons */}
        <div className="porto-tabs" data-reveal="up" data-reveal-delay="80">
          <button
            className={`porto-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            className={`porto-tab ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            Tools
          </button>
        </div>

        {/* Tab: Projects */}
        <div className={`porto-tab-panel ${activeTab === 'projects' ? 'active' : ''}`} id="tab-projects">
          <div className="portofolio-grid">
            {/* Project 1: SIMRS ICHA 1 */}
            <div className="portofolio-card" data-reveal="up" data-reveal-delay="0">
              <div className="portofolio-img">
                <img src="/assets/images/projects/portfolio_simrs1.png" alt="Desain Feed SIMRS ICHA" />
              </div>
              <div className="portofolio-info">
                <h3 className="portofolio-title">Desain Feed</h3>
                <p className="portofolio-excerpt">Konten media sosial untuk Sistem Informasi Manajemen Rumah Sakit.</p>
              </div>
            </div>

            {/* Project 2: SIMRS ICHA 2 */}
            <div className="portofolio-card" data-reveal="up" data-reveal-delay="80">
              <div className="portofolio-img">
                <img src="/assets/images/projects/portfolio_simrs2.png" alt="Promosi SIMRS ICHA" />
              </div>
              <div className="portofolio-info">
                <h3 className="portofolio-title">Desain Feed</h3>
                <p className="portofolio-excerpt">Visual promosi digital untuk layanan SIMRS pada platform Instagram.</p>
              </div>
            </div>

            {/* Project 3: Go Bananas! */}
            <div className="portofolio-card" data-reveal="up" data-reveal-delay="160">
              <div className="portofolio-img">
                <img src="/assets/images/projects/portfolio_logogb.png" alt="Logo Go Bananas!" />
              </div>
              <div className="portofolio-info">
                <h3 className="portofolio-title">Logo Go Bananas!</h3>
                <p className="portofolio-excerpt">Desain logo modern untuk brand produk makanan Go Bananas!</p>
              </div>
            </div>

            {/* Project 4: Seblak Muahhh */}
            <div className="portofolio-card" data-reveal="up" data-reveal-delay="240">
              <div className="portofolio-img">
                <img src="/assets/images/projects/portfolio_seblak.png" alt="Banner Seblak" />
              </div>
              <div className="portofolio-info">
                <h3 className="portofolio-title">Banner Kuliner Seblak</h3>
                <p className="portofolio-excerpt">Desain banner promosi untuk usaha kuliner Seblak.</p>
              </div>
            </div>

            {/* Project 5: Web Design */}
            <div className="portofolio-card" data-reveal="up" data-reveal-delay="320">
              <div className="portofolio-img">
                <img src="/assets/images/projects/portfolio_lpbsdicreat.png" alt="Landing Page" />
              </div>
              <div className="portofolio-info">
                <h3 className="portofolio-title">Landing Page</h3>
                <p className="portofolio-excerpt">Website jasa desain grafis dengan tampilan responsif dan modern.</p>
                <a href="https://bsdicreat.vercel.app/" target="_blank" rel="noopener noreferrer" className="portofolio-link">Lihat di sini</a>
              </div>
            </div>

            {/* Project 6: Web Design */}
            <div className="portofolio-card" data-reveal="up" data-reveal-delay="400">
              <div className="portofolio-img">
                <img src="/assets/images/projects/portfolio_lppribadi.png" alt="Landing Page" />
              </div>
              <div className="portofolio-info">
                <h3 className="portofolio-title">Landing Page</h3>
                <p className="portofolio-excerpt">Portofolio Pribadi menampilkan koleksi proyek dan keahlian yang telah dikembangkan.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab: Tools */}
        <div className={`porto-tab-panel ${activeTab === 'tools' ? 'active' : ''}`} id="tab-tools">
          <div className="tools-grid">
            <div className="tool-card">
              <img className="tool-logo" src="/assets/images/tools/icon_illustrator.png" alt="Adobe Illustrator" />
              <span className="tool-name">Adobe Illustrator</span>
            </div>
            <div className="tool-card">
              <img className="tool-logo" src="/assets/images/tools/icon_photoshop.png" alt="Adobe Photoshop" />
              <span className="tool-name">Adobe Photoshop</span>
            </div>
            <div className="tool-card">
              <img className="tool-logo" src="/assets/images/tools/icon_figma.png" alt="Figma" />
              <span className="tool-name">Figma</span>
            </div>
            <div className="tool-card">
              <img className="tool-logo" src="/assets/images/tools/icon_canva.png" alt="Canva" />
              <span className="tool-name">Canva</span>
            </div>
            <div className="tool-card">
              <img className="tool-logo" src="/assets/images/tools/icon_capcut.png" alt="CapCut" />
              <span className="tool-name">CapCut</span>
            </div>
            <div className="tool-card">
              <img className="tool-logo" src="/assets/images/tools/icon_vscode.png" alt="Visual Studio Code" />
              <span className="tool-name">VS Code</span>
            </div>
            <div className="tool-card">
              <img className="tool-logo" src="/assets/images/tools/icon_github.png" alt="GitHub" />
              <span className="tool-name">GitHub</span>
            </div>
            <div className="tool-card">
              <img className="tool-logo" src="/assets/images/tools/icon_vercel.png" alt="Vercel" />
              <span className="tool-name">Vercel</span>
            </div>
            <div className="tool-card">
              <img className="tool-logo" src="/assets/images/tools/icon_css.png" alt="CSS" />
              <span className="tool-name">CSS</span>
            </div>
            <div className="tool-card">
              <img className="tool-logo" src="/assets/images/tools/icon_js.png" alt="JavaScript" />
              <span className="tool-name">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
