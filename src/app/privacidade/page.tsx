import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politica de Privacidade — Enriquece AI',
  description:
    'Saiba como a Enriquece AI coleta, utiliza e protege seus dados pessoais em conformidade com a LGPD.',
};

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
        >
          <Image
            src="/logos/logo-ea-red.png"
            alt="Enriquece AI"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="font-medium">Voltar ao inicio</span>
        </Link>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Politica de Privacidade
        </h1>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          Ultima atualizacao: 23 de marco de 2026
        </p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-[var(--muted-foreground)]">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              1. Introducao
            </h2>
            <p>
              A <strong className="text-[var(--foreground)]">Enriquece AI</strong>{' '}
              (&quot;nos&quot;, &quot;nosso&quot; ou &quot;Empresa&quot;), acessivel em{' '}
              <a
                href="https://www.enriqueceai.com.br"
                className="text-[var(--primary)] underline underline-offset-2"
              >
                enriqueceai.com.br
              </a>
              , esta comprometida com a protecao da privacidade e dos dados pessoais de
              seus usuarios e visitantes, em conformidade com a Lei Geral de Protecao de
              Dados Pessoais (Lei n. 13.709/2018 &mdash; LGPD) e demais normas
              aplicaveis.
            </p>
            <p className="mt-3">
              Esta Politica de Privacidade descreve como coletamos, utilizamos,
              armazenamos e protegemos as informacoes fornecidas por voce ao utilizar
              nosso site e servicos de Sales Engagement B2B.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              2. Dados Coletados
            </h2>
            <p>
              Ao preencher o formulario de contato ou solicitar uma demonstracao,
              coletamos os seguintes dados pessoais e empresariais:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1.5">
              <li>Nome completo</li>
              <li>Nome da empresa</li>
              <li>Email corporativo</li>
              <li>Telefone</li>
              <li>Site da empresa</li>
              <li>Cargo / funcao</li>
              <li>Numero de funcionarios da empresa</li>
              <li>Quantidade de SDRs/BDRs</li>
              <li>CRM utilizado</li>
            </ul>
            <p className="mt-3">
              Tambem podemos coletar dados de navegacao automaticamente, como endereco
              IP, tipo de navegador, paginas visitadas e tempo de permanencia, por meio
              de cookies e tecnologias semelhantes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              3. Finalidade do Tratamento
            </h2>
            <p>Utilizamos seus dados para as seguintes finalidades:</p>
            <ul className="mt-3 list-inside list-disc space-y-1.5">
              <li>Entrar em contato para agendar demonstracoes e reunioes comerciais</li>
              <li>Personalizar a experiencia e comunicacao com voce</li>
              <li>Enviar informacoes sobre nossos produtos e servicos</li>
              <li>Realizar analises internas para melhoria dos nossos servicos</li>
              <li>Cumprir obrigacoes legais e regulatorias</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              4. Base Legal (LGPD)
            </h2>
            <p>
              O tratamento dos seus dados pessoais esta fundamentado nas seguintes bases
              legais previstas na LGPD:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1.5">
              <li>
                <strong className="text-[var(--foreground)]">Consentimento</strong> (Art. 7,
                I): ao preencher o formulario e enviar seus dados, voce consente com o
                tratamento para as finalidades descritas nesta politica.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Legitimo interesse</strong>{' '}
                (Art. 7, IX): para contato comercial e envio de comunicacoes relevantes
                sobre nossos servicos B2B.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">
                  Execucao de contrato ou procedimentos preliminares
                </strong>{' '}
                (Art. 7, V): quando necessario para viabilizar a prestacao dos nossos
                servicos.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              5. Compartilhamento de Dados
            </h2>
            <p>
              Seus dados pessoais <strong className="text-[var(--foreground)]">nao sao vendidos</strong>{' '}
              a terceiros. Podemos compartilha-los apenas nas seguintes situacoes:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1.5">
              <li>
                Com prestadores de servicos essenciais (infraestrutura de hospedagem,
                ferramentas de CRM e comunicacao) que atuam como operadores sob nossas
                instrucoes e em conformidade com a LGPD.
              </li>
              <li>
                Quando exigido por lei, regulamento ou determinacao de autoridade
                competente.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              6. Armazenamento e Seguranca
            </h2>
            <p>
              Seus dados sao armazenados em infraestrutura segura fornecida pela{' '}
              <strong className="text-[var(--foreground)]">Supabase</strong>, com
              criptografia em transito (TLS) e em repouso, controles de acesso baseados
              em funcao (RBAC) e politicas de seguranca em nivel de linha (RLS).
            </p>
            <p className="mt-3">
              Adotamos medidas tecnicas e organizacionais adequadas para proteger seus
              dados contra acessos nao autorizados, destruicao, perda, alteracao ou
              qualquer forma de tratamento inadequado. Os dados serao retidos pelo tempo
              necessario para cumprir as finalidades para as quais foram coletados ou
              conforme exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              7. Direitos do Titular
            </h2>
            <p>
              Em conformidade com a LGPD, voce possui os seguintes direitos em relacao
              aos seus dados pessoais:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1.5">
              <li>Confirmacao da existencia de tratamento de dados</li>
              <li>Acesso aos seus dados pessoais</li>
              <li>Correcao de dados incompletos, inexatos ou desatualizados</li>
              <li>
                Anonimizacao, bloqueio ou eliminacao de dados desnecessarios ou
                excessivos
              </li>
              <li>Portabilidade dos dados a outro fornecedor de servico</li>
              <li>
                Eliminacao dos dados tratados com base no consentimento, exceto nas
                hipoteses previstas em lei
              </li>
              <li>
                Informacao sobre com quem seus dados foram compartilhados
              </li>
              <li>Revogacao do consentimento a qualquer momento</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer desses direitos, entre em contato conosco pelo email
              indicado na secao &quot;Contato&quot; abaixo.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              8. Cookies e Tecnologias de Rastreamento
            </h2>
            <p>
              Nosso site pode utilizar cookies e tecnologias semelhantes para melhorar
              sua experiencia de navegacao, analisar o trafego e personalizar conteudo.
              Os tipos de cookies que podemos utilizar incluem:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1.5">
              <li>
                <strong className="text-[var(--foreground)]">Cookies essenciais:</strong>{' '}
                necessarios para o funcionamento basico do site.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Cookies analiticos:</strong>{' '}
                utilizados para entender como os visitantes interagem com o site
                (ex.: Google Analytics).
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Cookies de marketing:</strong>{' '}
                utilizados para exibir anuncios relevantes e medir a eficacia de
                campanhas.
              </li>
            </ul>
            <p className="mt-3">
              Voce pode gerenciar as preferencias de cookies nas configuracoes do seu
              navegador. A desativacao de determinados cookies pode afetar a
              funcionalidade do site.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              9. Alteracoes nesta Politica
            </h2>
            <p>
              Reservamo-nos o direito de atualizar esta Politica de Privacidade a
              qualquer momento. Alteracoes significativas serao comunicadas por meio do
              nosso site. Recomendamos que voce revise esta pagina periodicamente.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              10. Contato
            </h2>
            <p>
              Para duvidas, solicitacoes ou exercicio de direitos relacionados aos seus
              dados pessoais, entre em contato conosco:
            </p>
            <div className="mt-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
              <p>
                <strong className="text-[var(--foreground)]">Enriquece AI</strong>
              </p>
              <p className="mt-1">
                Email:{' '}
                <a
                  href="mailto:contato@enriqueceai.com.br"
                  className="text-[var(--primary)] underline underline-offset-2"
                >
                  contato@enriqueceai.com.br
                </a>
              </p>
              <p className="mt-1">
                Site:{' '}
                <a
                  href="https://www.enriqueceai.com.br"
                  className="text-[var(--primary)] underline underline-offset-2"
                >
                  enriqueceai.com.br
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
