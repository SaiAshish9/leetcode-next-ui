/** @type {import('next').NextConfig} */
// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  // images: {
  //   domains: ['leetcode.com'],
  // },
  // webpack(config, options) {
  //   config.plugins.push(new MonacoWebpackPlugin());
  //   return config;
  // },
  // cssLoaderOptions: { url: false }
}

module.exports = nextConfig
