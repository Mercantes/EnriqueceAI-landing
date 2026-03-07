'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Quanto custa o Enriquece AI?',
    answer:
      'Temos planos flexíveis que se adaptam ao tamanho do seu time. Solicite uma demonstração para receber uma proposta personalizada.',
  },
  {
    question: 'Quanto tempo leva para implementar?',
    answer:
      'A implementação é rápida: seu time pode estar operando em menos de 24 horas. Cuidamos de toda a configuração inicial e importação de leads.',
  },
  {
    question: 'Preciso ter um CRM para usar?',
    answer:
      'Não. O Enriquece AI funciona de forma independente. Quando você estiver pronto, integramos com HubSpot, Pipedrive, RD Station e outros CRMs.',
  },
  {
    question: 'Meus dados estão seguros?',
    answer:
      'Sim. Utilizamos criptografia em trânsito e em repouso, infraestrutura em nuvem com alta disponibilidade e seguimos as melhores práticas de segurança e LGPD.',
  },
  {
    question: 'O que é enriquecimento por CNPJ?',
    answer:
      'A partir do CNPJ, buscamos automaticamente dados completos da empresa: razão social, faturamento, número de funcionários, sócios, telefones e e-mails de contato.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="divide-y divide-[var(--border)]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold">{faq.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-[var(--muted-foreground)] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
