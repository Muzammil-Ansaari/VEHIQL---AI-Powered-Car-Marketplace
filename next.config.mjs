/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false, //defaults to true
    serverActions: {
      bodySizeLimit: 5 * 1024 * 1024, // 5 MB limit for server actions body size
    },
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
