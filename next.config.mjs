/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Mencegah clickjacking: website tidak bisa di-embed di iframe orang lain
          { key: 'X-Frame-Options', value: 'DENY' },
          // Mencegah browser menebak tipe file (MIME sniffing attack)
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Membatasi info referrer saat klik link ke luar
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Menonaktifkan fitur browser yang tidak digunakan
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
