import type { Metadata } from 'next';

import { ObrigadoContent } from './content';

export const metadata: Metadata = {
  title: 'Obrigado — Enriquece AI',
  description: 'Recebemos seus dados e entraremos em contato em breve.',
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return <ObrigadoContent />;
}
