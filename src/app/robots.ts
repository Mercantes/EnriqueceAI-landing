import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/obrigado',
    },
    sitemap: 'https://www.enriqueceai.com.br/sitemap.xml',
  };
}
