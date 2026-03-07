import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = 'https://www.enriqueceai.com.br';

export const metadata: Metadata = {
  title: 'Enriquece AI — Sales Engagement para times B2B',
  description:
    'Aumente em 50% as atividades de prospecção com cadências inteligentes, enriquecimento automático e IA generativa.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Enriquece AI — Sales Engagement para times B2B',
    description:
      'Cadências inteligentes, enriquecimento automático por CNPJ e IA generativa para seu time de pré-vendas.',
    url: siteUrl,
    siteName: 'Enriquece AI',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enriquece AI — Sales Engagement para times B2B',
    description:
      'Cadências inteligentes, enriquecimento automático por CNPJ e IA generativa para seu time de pré-vendas.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
