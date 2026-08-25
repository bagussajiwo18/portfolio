import Link from 'next/link';

export default function Footer() {
  return (
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
  );
}
