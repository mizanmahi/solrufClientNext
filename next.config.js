/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
   reactStrictMode: true,
   pageDataCollectionTimeout: 120000, // Increase to 2 minutes (in milliseconds)
   staticPageGenerationTimeout: 120000,
   // ... other configurations
   i18n,
   images: {
      domains: ['i.ibb.co'],
    },
};

module.exports = nextConfig;
