const fs = require('fs');
const path = require('path');

// This is a simple sitemap generator
const blogPosts = [
  'transforming-lives-through-education',
  'health-and-nutrition-impact',
  'family-empowerment-success'
];

const routes = [
  '',
  '/programs',
  '/impact',
  '/get-involved',
  '/about',
  '/blog',
  '/contact'
];

const allUrls = [
  ...routes,
  ...blogPosts.map(slug => `/blog/${slug}`)
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>https://kaweesachildrensministries.org${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');
