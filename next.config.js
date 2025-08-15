/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack(config) {
    // Treat common video file types as emitted assets so imports resolve to a URL
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mov)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });

    return config;
  }
};

module.exports = nextConfig;
