import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Enriquece AI — Sales Engagement para times B2B',
  description:
    'Aumente em 50% as atividades de prospecção com cadências inteligentes, enriquecimento automático e IA generativa.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
