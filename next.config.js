/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mfar.tomsher.net', 'https://mfar.tomsher.net'],
    unoptimized: true,
  },
}

module.exports = nextConfig;

// async redirects() {
//   return await getRedirects();
// },

// const getRedirects = async () => {
//   const url = `https://${domain}/redirects`;
//   const res = await fetch(url, {
//     method: "GET",       
//   });
//   const redirects = await res.json();
//   return redirects
// };
