'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--background)] px-6 text-center">
      <h1 className="text-4xl font-bold text-[var(--foreground)]">
        Algo deu errado
      </h1>
      <p className="mt-4 max-w-md text-[var(--muted-foreground)]">
        Ocorreu um erro inesperado. Tente novamente ou volte para a página
        inicial.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={reset}
          className="rounded-lg bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Tentar novamente
        </button>
        <Link
          href="/"
          className="rounded-lg border border-[var(--border)] px-6 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
