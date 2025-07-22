/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/embed",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: "frame-source 'self';"
                    }
                ]
            }
        ]
    }
};

export default nextConfig;
