import Image from 'next/image';

export default function Education() {
  return (
    <section className="education" id="pendidikan">
      <div className="container">
        <div className="section-header" data-reveal="up">
          <h2 className="section-title">Pendidikan</h2>
          <p className="section-subtitle">Riwayat Pendidikan</p>
        </div>
        <div className="education-content">
          <a href="javascript:void(0)" rel="noopener noreferrer" className="education-logo-container" data-reveal="scale" data-reveal-delay="0">
            <Image src="/assets/images/smifda.jpg" alt="SMK Miftahul Huda Logo" width={100} height={100} />
          </a>
          <a href="https://binabangsa.ac.id/" target="_blank" rel="noopener noreferrer" className="education-logo-container" data-reveal="scale" data-reveal-delay="100">
            <Image src="/assets/images/uniba_new.png" alt="Universitas Bina Bangsa Logo" width={100} height={100} />
          </a>
        </div>
      </div>
    </section>
  );
}
