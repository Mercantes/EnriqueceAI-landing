import Image from 'next/image';

import { Button } from '@/components/ui/button';

const screenshots = [
  {
    src: '/screenshots/dashboard.png',
    alt: 'Dashboard do Enriquece AI mostrando gráfico de oportunidades e metas mensais',
    title: 'Dashboard gerencial',
    description: 'Acompanhe oportunidades, metas e evolução do pipeline mês a mês.',
  },
  {
    src: '/screenshots/kpis-por-sdr.png',
    alt: 'Painel de KPIs por SDR com leads finalizados, atividades e taxa de conversão',
    title: 'Performance por SDR',
    description: 'Leads finalizados, atividades executadas e taxa de conversão individual.',
  },
  {
    src: '/screenshots/performance-cadencia.png',
    alt: 'Relatório de performance de cadência com taxas de abertura, resposta e reuniões agendadas',
    title: 'Performance de cadência',
    description: '1.250 emails enviados, 42% de abertura e 14 reuniões agendadas em uma única cadência.',
  },
];

export function ProductShowcase() {
  return (
    <section className="bg-[var(--muted)]/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Veja o Enriquece AI em ação
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            Dados reais, métricas claras e controle total da operação de pré-vendas.
          </p>
        </div>

        <div className="space-y-20">
          {screenshots.map((shot, i) => (
            <div
              key={shot.src}
              className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-12 ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-3/5">
                <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-lg">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1200}
                    height={675}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-full text-center lg:w-2/5 lg:text-left">
                <h3 className="text-2xl font-bold">{shot.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-[var(--muted-foreground)]">
                  {shot.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="h-14 px-10 text-base font-bold" asChild>
            <a href="#cadastro">Quero ver na prática</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
