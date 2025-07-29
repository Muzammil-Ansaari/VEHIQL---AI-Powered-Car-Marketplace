/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false, //defaults to true
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rbwjwazohndmgvxghtnr.supabase.co",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-source 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
