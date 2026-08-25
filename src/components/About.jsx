export default function About() {
  return (
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
              Dengan pengalaman di bidang IT Support, Digital Marketing, dan Graphic Design, saya senang mengeksplorasi ide serta
              mengubahnya menjadi karya yang fungsional dan menarik. Setiap project bagi saya adalah kesempatan untuk terus belajar,
              berkembang, dan menciptakan sesuatu yang lebih baik.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
