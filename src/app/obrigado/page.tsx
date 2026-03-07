import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Obrigado — Enriquece AI',
  description: 'Recebemos seus dados e entraremos em contato em breve.',
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--background)] px-6">
      <div className="w-full max-w-md text-center">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Image
            src="/logos/logo-ea-red.png"
            alt="Enriquece AI"
            width={40}
            height={40}
            className="rounded-full"
            unoptimized
          />
          <span className="text-lg font-bold">Enriquece AI</span>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-10 shadow-lg">
          <CheckCircle2 aria-hidden="true" className="mx-auto mb-4 h-14 w-14 text-green-500" />
          <h1 className="text-2xl font-bold">Obrigado pelo interesse!</h1>
          <p className="mt-3 text-[var(--muted-foreground)]">
            Recebemos seus dados e um consultor entrará em contato em breve para agendar sua demonstração.
          </p>

          <div className="mt-8">
            <Button size="lg" className="w-full font-semibold" asChild>
              <a href="/">Voltar para o site</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
