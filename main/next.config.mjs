/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignora erros de "variável não usada" na hora de publicar
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignora erros de tipo na hora de publicar
    ignoreBuildErrors: true,
  },
};

export default nextConfig;