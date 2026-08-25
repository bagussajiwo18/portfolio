import Image from 'next/image';

export default function Experience() {
  return (
    <section className="experience" id="pengalaman">
      <div className="container">
        <div className="section-header" data-reveal="up">
          <h2 className="section-title">Pengalaman</h2>
          <p className="section-subtitle">Pengalaman Kerja, &amp; Magang</p>
        </div>
        <div className="experience-content">
          <a href="https://krakatausteel.com" target="_blank" rel="noopener noreferrer" className="experience-logo-container" data-reveal="scale" data-reveal-delay="0">
            <div className="experience-logo">
              <Image src="/assets/images/kitech.png" alt="kitech Logo" width={100} height={100} />
            </div>
          </a>
          <a href="https://rskurnia.co.id/" target="_blank" rel="noopener noreferrer" className="experience-logo-container" data-reveal="scale" data-reveal-delay="80">
            <div className="experience-logo">
              <Image src="/assets/images/rskurnia.png" alt="rs_Kurnia Logo" width={100} height={100} />
            </div>
          </a>
          <a href="https://icha.co.id/" target="_blank" rel="noopener noreferrer" className="experience-logo-container" data-reveal="scale" data-reveal-delay="160">
            <div className="experience-logo">
              <Image src="/assets/images/simrs_icha.png" alt="ICHA Logo" width={100} height={100} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
