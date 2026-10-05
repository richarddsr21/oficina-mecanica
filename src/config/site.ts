/**
 * ============================================================
 *  CONFIGURAÇÃO DO CLIENTE
 * ============================================================
 *  Este é o ÚNICO ficheiro que precisa de mudar por cliente
 *  (além das imagens em /public). Tudo o que aparece no site
 *  vem daqui.
 *
 *  Os dados abaixo são FICTÍCIOS ("Oficina Exemplo").
 *  Substitua tudo antes de enviar a demonstração.
 * ============================================================
 */

import type { IconName } from "@/components/ui/Icon";

// ---------- Tipos ----------

export type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type TimeRange = { open: string; close: string };

export type OpeningDay = {
  day: DayKey;
  label: string;
  /** Lista vazia = "Fechado". Dois períodos = horário com pausa para almoço. */
  periods: TimeRange[];
};

export type Service = { title: string; description: string; icon: IconName };

export type Step = { title: string; description: string };

export type Faq = { question: string; answer: string };

export type Review = {
  author: string;
  /** Nota de 1 a 5 */
  rating: number;
  text: string;
};

export type Stat = { value: string; label: string };

export type ImageRef = { src: string; alt: string };

export type PackageItem = { text: string; included: boolean };

export type Package = {
  name: string;
  /** Ex.: "89 €" */
  price: string;
  /** Linha pequena por baixo do preço, ex.: "desde · IVA incluído" */
  priceNote: string;
  items: PackageItem[];
  /** Destaca o cartão com a linha de cor no topo */
  featured?: boolean;
};

/** Bloco de imagem + texto lado a lado (as imagens alternam entre esquerda e direita). */
export type Highlight = {
  /** Âncora da secção (ex.: "porque-nos") */
  id: string;
  /** Palavra em contorno atrás do título */
  ghost: string;
  title: string;
  text?: string;
  /** Lista curta em caixa alta (até 4 itens fica melhor) */
  bullets?: string[];
  image: ImageRef;
  /** Texto do botão (abre o WhatsApp) */
  cta: string;
};

export type Tip = { category: string; title: string; text: string; image: ImageRef };

export type SocialNetwork = "facebook" | "instagram" | "tiktok" | "youtube";

export type SectionCopy = {
  title: string;
  intro?: string;
  /** Palavra em contorno atrás do título (opcional) */
  ghost?: string;
};

export type SiteConfig = {
  name: string;
  /** Palavra que aparece em contorno gigante atrás do carro no topo */
  watermark: string;
  slogan: string;
  description: string;
  /** Se não houver logo, o nome é mostrado em texto (1.ª palavra branca, resto na cor de destaque). */
  logo?: { src: string; alt: string; width: number; height: number };
  favicon: string;

  contact: {
    /** Como é mostrado no site */
    phoneDisplay: string;
    /** Formato para o link tel: */
    phoneHref: string;
    /** Formato internacional SEM "+" nem espaços, ex.: 351912345678 */
    whatsapp: string;
    /** Mensagem pré-escrita do botão flutuante e dos botões de WhatsApp */
    whatsappMessage: string;
    /** Informação obrigatória sobre o custo da chamada (ex.: "Chamada para a rede fixa nacional") */
    phoneNote: string;
    email?: string;
  };

  address: {
    street: string;
    postalCode: string;
    city: string;
    region: string;
    country: string;
    countryCode: string;
    mapsUrl: string;
    lat: number;
    lng: number;
  };

  openingHours: OpeningDay[];

  hero: {
    title: string;
    text: string;
    /** Texto do botão principal (abre o WhatsApp) */
    cta: string;
    image: ImageRef;
  };

  /** Números de confiança abaixo do topo. Use SÓ números verdadeiros. Vazio = escondido. */
  stats: Stat[];

  /** Ficam melhor em múltiplos de 3 (grelha de 3 colunas). */
  services: Service[];

  /** Faixa larga com uma foto da oficina. Use uma foto REAL do cliente sempre que possível. */
  showcase: {
    image: ImageRef;
    /** Link de um vídeo (YouTube, Instagram…). Vazio = sem botão de play. */
    videoUrl: string;
  };

  /**
   * Pacotes com preço. Use APENAS preços confirmados pelo cliente.
   * Lista vazia = a secção inteira desaparece.
   */
  packages: Package[];

  highlights: Highlight[];

  steps: Step[];

  /**
   * Avaliações do Google: copiar APENAS avaliações reais e públicas do cliente.
   * NUNCA inventar. Lista vazia = a secção inteira desaparece.
   * Exemplo do formato:
   *   { author: "Nome Apelido", rating: 5, text: "Texto da avaliação real…" }
   */
  reviews: Review[];
  /** Link para todas as avaliações no Google (opcional) */
  reviewsUrl?: string;

  /** Dicas curtas (sem página própria). A 1.ª aparece em destaque. Vazio = secção escondida. */
  tips: Tip[];

  faqs: Faq[];

  sections: {
    services: SectionCopy;
    showcase: SectionCopy;
    packages: SectionCopy;
    steps: SectionCopy;
    reviews: SectionCopy;
    tips: SectionCopy;
    faq: SectionCopy;
    contact: SectionCopy;
    quote: SectionCopy;
  };

  /** Deixe o link vazio ("") para esconder a rede social */
  social: Partial<Record<SocialNetwork, string>>;

  legal: {
    companyName: string;
    nif: string;
    complaintsBookUrl: string;
  };

  seo: {
    siteUrl: string;
    title: string;
    description: string;
    city: string;
    region: string;
    keywords: string[];
  };

  demo: {
    active: boolean;
    text: string;
  };

  /** Crédito discreto no rodapé (opcional) */
  credit?: { text: string; url: string };

  /**
   * Identidade visual. Estes valores viram variáveis CSS (--brand-*) e alimentam o Tailwind.
   * As fontes são definidas em src/lib/fonts.ts (o next/font precisa de imports estáticos).
   */
  theme: {
    bg: string;
    surface: string;
    surface2: string;
    line: string;
    fg: string;
    muted: string;
    /** Cor de destaque para texto, linhas e ícones (contraste ≥ 4.5:1 sobre bg) */
    accent: string;
    /** Fundo dos botões principais (contraste ≥ 4.5:1 com texto branco) */
    accentStrong: string;
    accentStrongHover: string;
    /** Tamanho do canto cortado dos botões e cartões */
    chamfer: string;
    radius: string;
  };
};

// ---------- Dados do cliente (EXEMPLO FICTÍCIO) ----------

export const site: SiteConfig = {
  name: "Oficina Exemplo",
  watermark: "OFICINA",
  slogan: "Mecânica auto de confiança, sem surpresas no orçamento.",
  description:
    "Oficina auto independente em Lisboa. Reparação, manutenção e diagnóstico de todas as marcas, com orçamento claro antes de qualquer trabalho.",
  favicon: "/favicon.svg",

  contact: {
    phoneDisplay: "+351 910 000 000",
    phoneHref: "+351910000000",
    whatsapp: "351910000000",
    whatsappMessage: "Olá! Vi o vosso site e gostaria de pedir um orçamento.",
    phoneNote: "Chamada para a rede móvel nacional",
    email: "geral@oficina-exemplo.pt",
  },

  address: {
    street: "Rua do Exemplo, 123",
    postalCode: "1000-000",
    city: "Lisboa",
    region: "Lisboa",
    country: "Portugal",
    countryCode: "PT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=38.7223,-9.1393",
    lat: 38.7223,
    lng: -9.1393,
  },

  openingHours: [
    { day: "monday", label: "Segunda-feira", periods: [{ open: "09:00", close: "13:00" }, { open: "14:00", close: "19:00" }] },
    { day: "tuesday", label: "Terça-feira", periods: [{ open: "09:00", close: "13:00" }, { open: "14:00", close: "19:00" }] },
    { day: "wednesday", label: "Quarta-feira", periods: [{ open: "09:00", close: "13:00" }, { open: "14:00", close: "19:00" }] },
    { day: "thursday", label: "Quinta-feira", periods: [{ open: "09:00", close: "13:00" }, { open: "14:00", close: "19:00" }] },
    { day: "friday", label: "Sexta-feira", periods: [{ open: "09:00", close: "13:00" }, { open: "14:00", close: "19:00" }] },
    { day: "saturday", label: "Sábado", periods: [{ open: "09:00", close: "13:00" }] },
    { day: "sunday", label: "Domingo", periods: [] },
  ],

  hero: {
    title: "Reparação e manutenção auto",
    text: "Mecânica geral, diagnóstico, travões e pneus para todas as marcas. Explicamos o problema e o preço antes de começar.",
    cta: "Pedir orçamento",
    image: {
      src: "/images/hero.jpg",
      alt: "Frente de um carro escuro com os faróis acesos num fundo preto",
    },
  },

  stats: [
    { value: "15+", label: "Anos a cuidar dos carros de quem vive e trabalha em Lisboa" },
    { value: "30+", label: "Marcas reparadas, a gasolina, diesel e híbridos" },
    { value: "24h", label: "Para responder a qualquer pedido de orçamento" },
    { value: "2 anos", label: "De garantia nas peças aplicadas, com fatura detalhada" },
  ],

  services: [
    { title: "Mecânica geral", description: "Motor, embraiagem, distribuição, suspensão e direção, com peças de qualidade.", icon: "wrench" },
    { title: "Travões", description: "Pastilhas, discos e líquido de travões. Verificação gratuita na revisão.", icon: "disc" },
    { title: "Pneus e alinhamento", description: "Montagem, calibragem, equilibragem e alinhamento de direção.", icon: "tyre" },
    { title: "Óleo e filtros", description: "Mudança de óleo e filtros conforme o plano do fabricante.", icon: "droplet" },
    { title: "Diagnóstico eletrónico", description: "Leitura de avarias com equipamento multimarca e explicação clara.", icon: "scan" },
    { title: "Baterias", description: "Teste gratuito, substituição e verificação do sistema de carga.", icon: "battery" },
  ],

  showcase: {
    image: {
      src: "/images/oficina-faixa.jpg",
      alt: "Carro desportivo em reparação no interior de uma oficina",
    },
    videoUrl: "",
  },

  packages: [
    {
      name: "Revisão Essencial",
      price: "89 €",
      priceNote: "desde · IVA incluído",
      items: [
        { text: "Mudança de óleo do motor", included: true },
        { text: "Filtro de óleo", included: true },
        { text: "Verificação de 20 pontos", included: true },
        { text: "Filtros de ar e habitáculo", included: false },
        { text: "Diagnóstico eletrónico", included: false },
      ],
    },
    {
      name: "Revisão Completa",
      price: "149 €",
      priceNote: "desde · IVA incluído",
      featured: true,
      items: [
        { text: "Mudança de óleo do motor", included: true },
        { text: "Filtro de óleo", included: true },
        { text: "Verificação de 20 pontos", included: true },
        { text: "Filtros de ar e habitáculo", included: true },
        { text: "Diagnóstico eletrónico", included: true },
      ],
    },
  ],

  highlights: [
    {
      id: "porque-nos",
      ghost: "Oficina",
      title: "Rigor profissional, trato de bairro",
      text: "Somos uma oficina independente. Falamos consigo de forma clara e só avançamos com a sua aprovação.",
      bullets: ["Orçamento antes de reparar", "Marcação por WhatsApp", "Todas as marcas", "Peças com garantia"],
      image: {
        src: "/images/servico-jantes.jpg",
        alt: "Mecânico a apertar as porcas de uma jante com uma aparafusadora",
      },
      cta: "Pedir orçamento",
    },
    {
      id: "polimento",
      ghost: "Serviço",
      title: "Polimento e limpeza auto",
      text: "Devolvemos o brilho à pintura com polimento profissional e encerramento. Ideal antes de vender o carro ou depois do inverno.",
      image: {
        src: "/images/servico-polimento.jpg",
        alt: "Profissional a polir a pintura de um carro preto",
      },
      cta: "Marcar polimento",
    },
  ],

  steps: [
    { title: "Contacte-nos", description: "Ligue ou envie mensagem por WhatsApp a contar o que se passa com o carro." },
    { title: "Diagnóstico", description: "Avaliamos o veículo com equipamento multimarca e identificamos o problema." },
    { title: "Aprove o orçamento", description: "Enviamos o orçamento detalhado. Só avançamos depois do seu OK." },
    { title: "Levante o carro", description: "Avisamos quando estiver pronto, com fatura detalhada e peças com garantia." },
  ],

  reviews: [],
  reviewsUrl: "",

  tips: [
    {
      category: "Inspeção",
      title: "Como preparar o carro para a inspeção periódica",
      text: "Luzes, pneus, travões e escovas: os pontos que mais chumbam e como verificá-los em casa.",
      image: { src: "/images/dica-farol.jpg", alt: "Farol de um carro escuro visto de perto" },
    },
    {
      category: "Travões",
      title: "Quando trocar as pastilhas de travão",
      text: "Chiar ao travar ou pedal mais longo são sinais de desgaste. Não deixe para depois.",
      image: { src: "/images/dica-travoes.jpg", alt: "Jante preta com pinça de travão vermelha" },
    },
    {
      category: "Avarias",
      title: "Luz do motor acesa: o que fazer?",
      text: "Se piscar, pare em segurança. Se estiver fixa, marque um diagnóstico o quanto antes.",
      image: { src: "/images/dica-motor.jpg", alt: "Velocímetro iluminado no painel de um carro" },
    },
    {
      category: "Pneus",
      title: "Verifique a pressão dos pneus todos os meses",
      text: "A pressão certa poupa combustível e prolonga a vida dos pneus. O valor está na porta do condutor.",
      image: { src: "/images/dica-pneus.jpg", alt: "Mão com luva a limpar o pneu de um carro" },
    },
  ],

  faqs: [
    { question: "Preciso de marcação?", answer: "Recomendamos marcação para não ter de esperar. Pode marcar por telefone ou WhatsApp. Urgências são atendidas sempre que possível." },
    { question: "O orçamento é gratuito?", answer: "Sim. O orçamento é gratuito e sem compromisso. Só avançamos com a reparação depois da sua aprovação." },
    { question: "Trabalham com todas as marcas?", answer: "Sim, reparamos ligeiros de todas as marcas, a gasolina, diesel e híbridos." },
    { question: "As peças têm garantia?", answer: "Todas as peças aplicadas têm garantia, de acordo com a lei em vigor. Entregamos sempre fatura detalhada." },
    { question: "Posso esperar pelo carro?", answer: "Em serviços rápidos, como mudança de óleo ou pastilhas, sim. Nos restantes, damos-lhe uma previsão de entrega." },
  ],

  sections: {
    services: { title: "Os nossos serviços" },
    showcase: { title: "Conheça a nossa oficina" },
    packages: {
      title: "Pacotes de revisão",
      intro: "Preços de referência para ligeiros, com IVA incluído. Confirmamos sempre o valor exato antes de começar.",
    },
    steps: {
      title: "Como funciona",
      intro: "Do primeiro contacto à entrega, sabe sempre o que estamos a fazer e quanto vai custar.",
    },
    reviews: { title: "O que dizem os nossos clientes" },
    tips: { title: "Dicas da oficina" },
    faq: { title: "Perguntas frequentes" },
    contact: { title: "Visite-nos ou fale connosco" },
    quote: {
      ghost: "Contacto",
      title: "Peça a sua marcação online",
      intro: "Escolha o dia que lhe dá mais jeito. A mensagem segue pronta pelo WhatsApp e confirmamos a hora consigo.",
    },
  },

  social: {
    facebook: "",
    instagram: "",
  },

  legal: {
    companyName: "Oficina Exemplo, Lda.",
    nif: "000 000 000",
    complaintsBookUrl: "https://www.livroreclamacoes.pt/Inicio/",
  },

  seo: {
    siteUrl: "https://oficina-exemplo.vercel.app",
    title: "Oficina Exemplo | Oficina auto em Lisboa",
    description:
      "Oficina auto em Lisboa: mecânica geral, travões, óleo, diagnóstico eletrónico, pneus e revisões. Peça orçamento grátis por WhatsApp.",
    city: "Lisboa",
    region: "Lisboa",
    keywords: ["oficina auto", "mecânico", "Lisboa", "travões", "mudança de óleo", "diagnóstico", "revisão"],
  },

  demo: {
    active: true,
    text: "Proposta de site criada pela Atlanvo para Oficina Exemplo",
  },

  credit: { text: "Site por Atlanvo", url: "https://atlanvo.com" },

  theme: {
    bg: "#121212",
    surface: "#1A1A1A",
    surface2: "#222222",
    line: "#2E2E2E",
    fg: "#F2F2F2",
    muted: "#A8A8A8",
    accent: "#E2621B",
    accentStrong: "#C24E0E",
    accentStrongHover: "#A9430B",
    chamfer: "12px",
    radius: "0px",
  },
};
