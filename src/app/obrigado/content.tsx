'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { CheckCircle2, Clock, MessageSquare, Presentation, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const sdrMessages: Record<string, string> = {
  'Ainda não tenho':
    'Você está começando a estruturar pré-vendas — vamos montar sua primeira cadência multicanal juntos.',
  '1 a 2':
    'Com 1-2 SDRs, a automação de cadências pode dobrar a produtividade do seu time.',
  '3 a 5':
    'Times de 3-5 SDRs ganham mais com gestão de atividades e métricas por representante.',
  '6 a 10':
    'Para times de 6-10 SDRs, o Enriquece AI oferece visão gerencial completa + analytics por SDR.',
  '11 a 20':
    'Com 11-20 SDRs, a padronização de cadências e o dashboard gerencial fazem toda a diferença.',
  'Mais de 20':
    'Para operações com 20+ SDRs, oferecemos gestão avançada de times com métricas individuais e coletivas.',
};

const crmMessages: Record<string, string> = {
  'Não utilizo CRM':
    'Sem CRM? Sem problema. O Enriquece AI funciona standalone e integra quando você precisar.',
  HubSpot: 'Já integramos com HubSpot — seus leads vão sincronizar automaticamente.',
  Pipedrive: 'Já integramos com Pipedrive — seus leads e negócios vão sincronizar automaticamente.',
  'RD Station CRM': 'Já integramos com RD Station CRM — seus leads e oportunidades vão sincronizar automaticamente.',
  Salesforce: 'Integração com Salesforce no roadmap — vamos conversar sobre como conectar.',
  Zoho: 'Integração com Zoho no roadmap — vamos conversar sobre como conectar.',
  Outro: 'Vamos entender qual CRM você usa para planejar a melhor integração.',
};

const metrics = [
  { value: '3x', description: 'mais reuniões agendadas pelo seu time' },
  { value: '80%', description: 'de redução no tempo de enriquecimento' },
  { value: '2x', description: 'mais leads qualificados por SDR' },
];

const timelineSteps = [
  {
    icon: CheckCircle2,
    title: 'Dados recebidos',
    description: 'Sua solicitação foi registrada com sucesso.',
    active: true,
  },
  {
    icon: Clock,
    title: 'Contato em até 10 minutos',
    description: 'Um consultor entrará em contato com você.',
    active: false,
  },
  {
    icon: Presentation,
    title: 'Demonstração personalizada',
    description: 'Veja o Enriquece AI funcionando com dados reais.',
    active: false,
  },
];

function ObrigadoInner() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const sdrs = searchParams.get('sdrs');
  const crm = searchParams.get('crm');

  const sdrMessage = sdrs ? sdrMessages[sdrs] : null;
  const crmMessage = crm ? crmMessages[crm] : null;
  const hasInsight = sdrMessage || crmMessage;

  const firstName = name?.split(' ')[0];

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto max-w-2xl px-6 py-12 sm:py-20">
        {/* Logo */}
        <div className="mb-10 flex items-center justify-center gap-3">
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

        {/* Section 1: Confirmation + Timeline */}
        <section className="animate-fade-in-up text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle2 aria-hidden="true" className="h-9 w-9 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {firstName ? `Perfeito, ${firstName}!` : 'Perfeito!'}
          </h1>
          <p className="mt-3 text-lg text-[var(--muted-foreground)]">
            Recebemos sua solicitação. Veja o que acontece agora:
          </p>

          {/* Timeline */}
          <div className="mt-10 space-y-4 text-left">
            {timelineSteps.map((step, i) => (
              <div
                key={step.title}
                className={`animate-fade-in-up flex items-start gap-4 rounded-xl border p-4 ${
                  step.active
                    ? 'border-green-500/30 bg-green-500/5'
                    : 'border-[var(--border)] bg-[var(--card)]'
                }`}
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    step.active
                      ? 'bg-green-500 text-white'
                      : 'bg-[var(--muted)] text-[var(--muted-foreground)]'
                  }`}
                >
                  <step.icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <p className={`font-semibold ${step.active ? 'text-green-600' : ''}`}>
                    {step.title}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Personalized Insight */}
        {hasInsight && (
          <section className="animate-fade-in-up mt-12" style={{ animationDelay: '400ms' }}>
            <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Preparamos um preview para você
            </h2>
            <div className="space-y-3">
              {sdrMessage && (
                <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
                  <p className="text-sm font-medium text-[var(--primary)]">Sobre seu time</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {sdrMessage}
                  </p>
                </div>
              )}
              {crmMessage && (
                <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
                  <p className="text-sm font-medium text-[var(--primary)]">Sobre seu CRM</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {crmMessage}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Section 3: Social Proof Metrics */}
        <section className="animate-fade-in-up mt-12" style={{ animationDelay: '500ms' }}>
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((metric) => (
              <div key={metric.value} className="text-center">
                <p className="text-3xl font-bold text-[var(--primary)] sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-[var(--muted-foreground)] sm:text-sm">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: CTAs */}
        <section className="animate-fade-in-up mt-12 grid gap-4 sm:grid-cols-2" style={{ animationDelay: '600ms' }}>
          <a
            href="https://wa.me/5511945705316?text=Oi!%20Acabei%20de%20preencher%20o%20formul%C3%A1rio%20no%20site%20do%20Enriquece%20AI."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-green-500/20 bg-green-500/5 p-5 transition-colors hover:border-green-500/40 hover:bg-green-500/10"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500/10">
              <MessageSquare aria-hidden="true" className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">Prefere falar agora?</p>
              <p className="text-sm text-[var(--muted-foreground)]">
                Converse pelo WhatsApp
              </p>
            </div>
            <ArrowRight aria-hidden="true" className="h-5 w-5 text-[var(--muted-foreground)] transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="/#features"
            className="group flex items-center gap-4 rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-5 transition-colors hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/10"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
              <Presentation aria-hidden="true" className="h-6 w-6 text-[var(--primary)]" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">Conheça as funcionalidades</p>
              <p className="text-sm text-[var(--muted-foreground)]">
                Veja tudo que o Enriquece AI oferece
              </p>
            </div>
            <ArrowRight aria-hidden="true" className="h-5 w-5 text-[var(--muted-foreground)] transition-transform group-hover:translate-x-1" />
          </a>
        </section>

        {/* Footer */}
        <footer className="animate-fade-in-up mt-16 text-center" style={{ animationDelay: '700ms' }}>
          <p className="text-xs text-[var(--muted-foreground)]">
            &copy; 2026 Enriquece AI. Todos os direitos reservados.
          </p>
          <Button variant="link" className="mt-2 h-auto p-0 text-xs" asChild>
            <a href="/">Voltar para o site</a>
          </Button>
        </footer>
      </div>
    </main>
  );
}

export function ObrigadoContent() {
  return (
    <Suspense>
      <ObrigadoInner />
    </Suspense>
  );
}
