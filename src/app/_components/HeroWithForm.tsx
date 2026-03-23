'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Clock, Loader2, ShieldCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { submitLandingLead } from './submit-landing-lead';

const employeeOptions = [
  '1 a 10',
  '11 a 50',
  '51 a 200',
  '201 a 500',
  '501 a 1000',
  'Mais de 1000',
];

const roleOptions = [
  'CEO / Fundador',
  'VP de Vendas',
  'Diretor(a) de Vendas',
  'Gerente de Vendas',
  'Head de Vendas / Pré-vendas',
  'Coordenador(a)',
  'Analista',
  'Outro',
];

const sdrOptions = [
  'Ainda não tenho',
  '1 a 2',
  '3 a 5',
  '6 a 10',
  '11 a 20',
  'Mais de 20',
];

const crmOptions = [
  'HubSpot',
  'Pipedrive',
  'RD Station CRM',
  'Salesforce',
  'Zoho',
  'Outro',
  'Não utilizo CRM',
];

const benefits = [
  'Enriquecimento automático por CNPJ',
  'Cadências multicanal com IA',
  'Gestão completa de prospecção',
];

const inputClasses =
  'w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)] focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)]';

const selectClasses =
  'w-full appearance-none rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)]';

function RequiredMark() {
  return <span className="text-red-400">*</span>;
}

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[var(--muted-foreground)]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function HeroWithForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
  });

  useEffect(() => {
    setUtmParams({
      utm_source: searchParams.get('utm_source') ?? '',
      utm_medium: searchParams.get('utm_medium') ?? '',
      utm_campaign: searchParams.get('utm_campaign') ?? '',
      utm_term: searchParams.get('utm_term') ?? '',
      utm_content: searchParams.get('utm_content') ?? '',
    });
  }, [searchParams]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const result = await submitLandingLead(payload);

    setLoading(false);
    if (result.success) {
      const params = new URLSearchParams({
        name: String(payload.name || ''),
        sdrs: String(payload.sdr_count || ''),
        crm: String(payload.crm || ''),
      });
      router.push(`/obrigado?${params.toString()}`);
    } else {
      setError(result.error);
    }
  }

  return (
    <section id="cadastro" className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="flex flex-col justify-start pt-8">
          <div className="mb-8 flex items-center gap-3">
            <Image
              src="/logos/logo-ea-red.png"
              alt="Enriquece AI"
              width={48}
              height={48}
              className="rounded-full"
              priority
            />
            <span className="text-xl font-bold">Enriquece AI</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Mais organização e produtividade para{' '}
            <span className="text-[var(--primary)]">seus SDRs</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[var(--muted-foreground)]">
            Aumente em <strong className="text-[var(--foreground)]">50%</strong> as atividades de
            prospecção e gere mais pipeline com cadências inteligentes, enriquecimento automático e
            IA generativa.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-sm">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-green-500" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--primary)]/10 px-4 py-2.5">
            <Clock aria-hidden="true" className="h-5 w-5 text-[var(--primary)]" />
            <span className="text-sm font-semibold">
              Retornamos em até <strong className="text-[var(--primary)]">10 minutos</strong>
            </span>
          </div>
        </div>

        <div id="hero-form" className="flex items-start justify-center pt-8">
            <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-lg">
              <h2 className="mb-1 text-xl font-bold">Fale com um consultor</h2>
              <p className="mb-6 text-sm text-[var(--muted-foreground)]">
                Preencha o formulário para receber nosso contato
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="field-name" className="mb-1 block text-xs font-medium">
                    Nome <RequiredMark />
                  </label>
                  <input id="field-name" type="text" name="name" required className={inputClasses} />
                </div>

                <div>
                  <label htmlFor="field-company" className="mb-1 block text-xs font-medium">
                    Empresa <RequiredMark />
                  </label>
                  <input id="field-company" type="text" name="company" required className={inputClasses} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="field-email" className="mb-1 block text-xs font-medium">
                      Email de trabalho <RequiredMark />
                    </label>
                    <input id="field-email" type="email" name="email" required className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="field-phone" className="mb-1 block text-xs font-medium">
                      Telefone <RequiredMark />
                    </label>
                    <input id="field-phone" type="tel" name="phone" required className={inputClasses} />
                  </div>
                </div>

                <div>
                  <label htmlFor="field-website" className="mb-1 block text-xs font-medium">
                    Site da empresa <RequiredMark />
                  </label>
                  <input
                    id="field-website"
                    type="url"
                    name="website"
                    required
                    placeholder="https://"
                    className={inputClasses}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="field-employees" className="mb-1 block text-xs font-medium">
                      Funcionários <RequiredMark />
                    </label>
                    <div className="relative">
                      <select id="field-employees" name="employees" required className={selectClasses} defaultValue="">
                        <option value="" disabled>Selecione</option>
                        {employeeOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <ChevronIcon />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="field-role" className="mb-1 block text-xs font-medium">
                      Cargo <RequiredMark />
                    </label>
                    <div className="relative">
                      <select id="field-role" name="role" required className={selectClasses} defaultValue="">
                        <option value="" disabled>Selecione</option>
                        {roleOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <ChevronIcon />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="field-sdr-count" className="mb-1 block text-xs font-medium">
                      SDRs/BDRs <RequiredMark />
                    </label>
                    <div className="relative">
                      <select id="field-sdr-count" name="sdr_count" required className={selectClasses} defaultValue="">
                        <option value="" disabled>Selecione</option>
                        {sdrOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <ChevronIcon />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="field-crm" className="mb-1 block text-xs font-medium">
                      CRM atual <RequiredMark />
                    </label>
                    <div className="relative">
                      <select id="field-crm" name="crm" required className={selectClasses} defaultValue="">
                        <option value="" disabled>Selecione</option>
                        {crmOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <ChevronIcon />
                    </div>
                  </div>
                </div>

                <input type="hidden" name="utm_source" value={utmParams.utm_source} />
                <input type="hidden" name="utm_medium" value={utmParams.utm_medium} />
                <input type="hidden" name="utm_campaign" value={utmParams.utm_campaign} />
                <input type="hidden" name="utm_term" value={utmParams.utm_term} />
                <input type="hidden" name="utm_content" value={utmParams.utm_content} />

                {error && (
                  <p className="rounded-lg bg-red-500/10 px-4 py-2 text-center text-sm font-medium text-red-500">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full font-semibold"
                >
                  {loading ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Solicitar demonstração'
                  )}
                </Button>

                <Link
                  href="/privacidade"
                  className="flex items-center justify-center gap-1.5 text-xs text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                >
                  <ShieldCheck aria-hidden="true" className="h-3.5 w-3.5" />
                  Seus dados estão protegidos
                </Link>
              </form>
            </div>
        </div>
      </div>
    </section>
  );
}
