/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/selfhst/icons@main/svg/github-light.svg",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/selfhst/icons@main/svg/linkedin-light.svg",
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
