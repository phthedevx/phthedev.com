/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // 🔴 Mude a URL abaixo para a sua (quando tiver o deploy, ex: https://pedrohenrique.vercel.app)
  // Se não tiver URL ainda, pode deixar localhost ou uma string vazia por enquanto
  siteUrl: process.env.SITE_URL || 'https://www.phthedev.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
}