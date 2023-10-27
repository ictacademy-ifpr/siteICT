/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Add basePath
  basePath: '/site',

  output:'export',
  // Define o diretório de saída
  distDir: '.next'
}

module.exports = nextConfig
