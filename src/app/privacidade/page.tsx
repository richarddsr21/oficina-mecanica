/*
 * ATENÇÃO: texto genérico de exemplo. Deve ser revisto por um jurista
 * antes de ser usado num site real (RGPD, Regulamento (UE) 2016/679).
 */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como ${site.name} trata os dados pessoais de quem a contacta.`,
  alternates: { canonical: "/privacidade" },
};

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line pt-8">
      <h2 className="font-display text-xl font-bold uppercase tracking-wide text-fg">{title}</h2>
      <div className="mt-4 grid gap-4 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  const { legal, address, contact } = site;

  return (
    <div className="container-site max-w-3xl py-16 sm:py-24">
      <p className="eyebrow">Informação legal</p>
      <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-fg sm:text-5xl">
        Política de Privacidade
      </h1>
      <p className="mt-6 leading-relaxed text-muted">
        Esta política explica como tratamos os dados pessoais de quem nos contacta através deste site.
      </p>

      <div className="mt-12 grid gap-10">
        <Block title="Responsável pelo tratamento">
          <p>
            {legal.companyName}, NIF {legal.nif}, com sede em {address.street}, {address.postalCode} {address.city}.
          </p>
          <p>
            Contacto: <a className="text-accent underline-offset-4 hover:underline" href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
            {contact.email ? (
              <>
                {" · "}
                <a className="text-accent underline-offset-4 hover:underline" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </>
            ) : null}
          </p>
        </Block>

        <Block title="Que dados tratamos">
          <p>
            Este site não tem registo de utilizadores, não guarda formulários e não usa cookies de análise ou publicidade.
          </p>
          <p>
            Só tratamos os dados que nos envia por sua iniciativa, por WhatsApp, telefone ou e-mail: por exemplo, nome,
            número de telefone, matrícula, marca e modelo do veículo e a descrição do problema.
          </p>
          <p>
            O formulário de orçamento apenas prepara uma mensagem no seu WhatsApp. Os dados só chegam até nós se decidir
            enviá-la.
          </p>
        </Block>

        <Block title="Para que usamos os dados">
          <p>
            Para responder ao seu pedido, preparar orçamentos, marcar e realizar serviços e cumprir obrigações legais
            (por exemplo, faturação). A base legal é a execução de diligências pré-contratuais e do contrato, a pedido do
            titular, e o cumprimento de obrigações legais.
          </p>
          <p>Os dados são guardados apenas pelo tempo necessário para estas finalidades ou pelo prazo exigido por lei.</p>
        </Block>

        <Block title="Serviços de terceiros">
          <p>
            As mensagens por WhatsApp estão sujeitas à política de privacidade da WhatsApp/Meta. O mapa da Google só é
            carregado se carregar em «Mostrar mapa» e, nesse caso, aplica-se a política de privacidade da Google.
          </p>
        </Block>

        <Block title="Os seus direitos">
          <p>
            Pode pedir, a qualquer momento, o acesso, a retificação, o apagamento, a limitação ou a portabilidade dos
            seus dados, bem como opor-se ao seu tratamento, através dos contactos acima.
          </p>
          <p>
            Tem também o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD), em{" "}
            <a
              className="text-accent underline-offset-4 hover:underline"
              href="https://www.cnpd.pt"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cnpd.pt
            </a>
            .
          </p>
        </Block>
      </div>
    </div>
  );
}
