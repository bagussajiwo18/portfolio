import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://bagussajiwo.my.id'),
  title: "Bagus Sajiwo - Portfolio",
  description: "Website Portofolio Pribadi Bagus Sajiwo. Portofolio ini menampilkan proyek yang telah dikembangkan di dunia teknologi informasi.",
  keywords: ["Bagus Sajiwo", "Website Portfolio", "Website Portofolio Pribadi", "Portofolio Bagus Sajiwo"],
  authors: [{ name: "Bagus Sajiwo" }],
  verification: {
    google: "GbEgUBMGScaIPsS_4Yu6xvb_Q36WpZ0LRRleQAmLE6U",
  },
  openGraph: {
    title: 'Bagus Sajiwo - Portfolio',
    description: 'Website Portofolio Pribadi Bagus Sajiwo. Portofolio ini menampilkan proyek yang telah dikembangkan di dunia teknologi informasi.',
    url: 'https://bagussajiwo.my.id',
    siteName: 'Bagus Sajiwo Portfolio',
    locale: 'id_ID',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
  icons: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
