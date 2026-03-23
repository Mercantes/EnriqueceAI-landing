import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, MessageSquare } from 'lucide-react';

export function LandingFooter() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src="/logos/logo-ea-red.png"
            alt="Enriquece AI"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm font-medium">Enriquece AI</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5511945705316"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            <MessageSquare aria-hidden="true" className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/enriqueceai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            <Linkedin aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>

        <div className="flex flex-col items-center gap-2 sm:items-end">
          <Link
            href="/privacidade"
            className="text-xs text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            Política de Privacidade
          </Link>
          <p className="text-xs text-[var(--muted-foreground)]">
            &copy; 2026 Enriquece AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
