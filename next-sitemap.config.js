/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://phthedev-com.vercel.app/',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
}