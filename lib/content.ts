import {
  Stethoscope,
  HeartPulse,
  Sparkles,
  Activity,
  Flower2,
  Baby,
  Bone,
  Ear,
  Eye,
  Brain,
  MessageCircleHeart,
  Apple,
  PersonStanding,
  ScanLine,
  MessageCircle,
  CalendarCheck,
  BellRing,
  Smartphone,
  Timer,
  HeartHandshake,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/* ── Navegação ───────────────────────────────────────────── */

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Atendimentos", href: "/atendimentos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

/* ── Especialidades — PRD §4.2 ───────────────────────────── */

export type Area = "adulto" | "infantil" | "saude-mental" | "exames";

export type Especialidade = {
  nome: string;
  slug: string;
  icone: LucideIcon;
  area: Area;
  descricao: string;
  /** Convênios aceitos (fictícios) — mini-chips no grid de /atendimentos */
  convenios: string[];
};

export const especialidades: Especialidade[] = [
  {
    nome: "Clínica Geral",
    slug: "clinica-geral",
    icone: Stethoscope,
    area: "adulto",
    descricao: "O primeiro olhar sobre a sua saúde, do check-up ao encaminhamento certo.",
    convenios: ["Sanitas", "VidaPlena", "Meridian"],
  },
  {
    nome: "Cardiologia",
    slug: "cardiologia",
    icone: HeartPulse,
    area: "adulto",
    descricao: "Coração acompanhado de perto: prevenção, diagnóstico e tratamento.",
    convenios: ["Sanitas", "Amparo Saúde", "Vitalis"],
  },
  {
    nome: "Dermatologia",
    slug: "dermatologia",
    icone: Sparkles,
    area: "adulto",
    descricao: "Cuidado com a pele em todas as fases, do acompanhamento clínico ao estético.",
    convenios: ["VidaPlena", "Alvorada", "Prisma Saúde"],
  },
  {
    nome: "Endocrinologia",
    slug: "endocrinologia",
    icone: Activity,
    area: "adulto",
    descricao: "Hormônios, tireoide e diabetes sob controle, com plano claro.",
    convenios: ["Sanitas", "Meridian", "NorteVida"],
  },
  {
    nome: "Ginecologia",
    slug: "ginecologia",
    icone: Flower2,
    area: "adulto",
    descricao: "Saúde da mulher com escuta e rotina de prevenção em dia.",
    convenios: ["VidaPlena", "Amparo Saúde", "Alvorada"],
  },
  {
    nome: "Pediatria",
    slug: "pediatria",
    icone: Baby,
    area: "infantil",
    descricao: "Acompanhamento do crescimento, vacinas e as dúvidas de cada fase.",
    convenios: ["Sanitas", "VidaPlena", "Prisma Saúde"],
  },
  {
    nome: "Ortopedia",
    slug: "ortopedia",
    icone: Bone,
    area: "adulto",
    descricao: "Dores articulares, lesões e coluna tratadas com plano de recuperação.",
    convenios: ["Meridian", "Vitalis", "NorteVida"],
  },
  {
    nome: "Otorrinolaringologia",
    slug: "otorrinolaringologia",
    icone: Ear,
    area: "adulto",
    descricao: "Ouvido, nariz e garganta: das alergias às apneias do sono.",
    convenios: ["Sanitas", "Alvorada", "Vitalis"],
  },
  {
    nome: "Oftalmologia",
    slug: "oftalmologia",
    icone: Eye,
    area: "adulto",
    descricao: "Exames de visão completos e acompanhamento de saúde ocular.",
    convenios: ["VidaPlena", "Meridian", "Amparo Saúde"],
  },
  {
    nome: "Psiquiatria",
    slug: "psiquiatria",
    icone: Brain,
    area: "saude-mental",
    descricao: "Diagnóstico cuidadoso e tratamento com acompanhamento próximo.",
    convenios: ["Sanitas", "Prisma Saúde", "NorteVida"],
  },
  {
    nome: "Psicologia",
    slug: "psicologia",
    icone: MessageCircleHeart,
    area: "saude-mental",
    descricao: "Espaço de escuta para organizar o que pesa, no seu ritmo.",
    convenios: ["VidaPlena", "Alvorada", "NorteVida"],
  },
  {
    nome: "Nutrição",
    slug: "nutricao",
    icone: Apple,
    area: "adulto",
    descricao: "Plano alimentar realista, feito para a sua rotina — não contra ela.",
    convenios: ["Meridian", "Amparo Saúde", "Prisma Saúde"],
  },
  {
    nome: "Fisioterapia",
    slug: "fisioterapia",
    icone: PersonStanding,
    area: "adulto",
    descricao: "Reabilitação e prevenção com exercícios acompanhados de perto.",
    convenios: ["Sanitas", "Vitalis", "Alvorada"],
  },
  {
    nome: "Exames de imagem",
    slug: "exames-de-imagem",
    icone: ScanLine,
    area: "exames",
    descricao: "Ultrassom, raio-x e mais — com resultado no seu celular no mesmo dia.",
    convenios: ["Sanitas", "VidaPlena", "Meridian", "Amparo Saúde"],
  },
];

/* ── Números do case — PRD §4.3 ──────────────────────────── */

export type Numero = {
  valor: number;
  prefixo?: string;
  sufixo?: string;
  rotulo: string;
};

export const numeros: Numero[] = [
  { valor: 4800, rotulo: "atendimentos por mês" },
  { valor: 38, prefixo: "-", sufixo: "%", rotulo: "faltas após lembretes automáticos" },
  { valor: 14, rotulo: "especialidades em um só lugar" },
  { valor: 87, rotulo: "NPS — pacientes que recomendam" },
];

/* ── Contato (fictício) ──────────────────────────────────── */

export const contato = {
  whatsapp: "(62) 3000-0000",
  whatsappHref: "https://wa.me/556230000000",
  telefone: "(62) 3000-0001",
  email: "ola@clinicaalento.com.br",
  endereco: "Rua T-30, 1240 · St. Bueno · Goiânia/GO",
  horarios: [
    { dias: "seg–sex", horas: "7h–19h" },
    { dias: "sáb", horas: "7h–13h" },
    { dias: "bot", horas: "24h ✓" },
  ],
};

/* ── Equipe — PRD §5.2 (seção 4) ─────────────────────────── */

export type Profissional = {
  nome: string;
  especialidade: string;
  crm: string;
  /** Mini-bio de 1 frase, revelada no hover do card */
  bio: string;
  foto: string;
};

export const equipe: Profissional[] = [
  {
    nome: "Dra. Helena Duarte",
    especialidade: "Clínica Geral · diretora clínica",
    crm: "CRM-GO 0001/ficção",
    bio: "Fundou a Alento em 2012 com uma regra simples: agenda cheia não pode virar espera.",
    foto: "/images/dra-helena.jpg",
  },
  {
    nome: "Dr. Caio Monteiro",
    especialidade: "Cardiologia",
    crm: "CRM-GO 0002/ficção",
    bio: "Explica o coração sem pressa — e sem palavra difícil.",
    foto: "/images/dr-caio.jpg",
  },
  {
    nome: "Dra. Marina Costa",
    especialidade: "Dermatologia",
    crm: "CRM-GO 0003/ficção",
    bio: "Cuida da pele em todas as fases, do primeiro sol ao primeiro cabelo branco.",
    foto: "/images/dra-marina.jpg",
  },
  {
    nome: "Dra. Lívia Rocha",
    especialidade: "Pediatria",
    crm: "CRM-GO 0004/ficção",
    bio: "Atende no ritmo da criança: a consulta só acaba quando a dúvida acaba.",
    foto: "/images/dra-livia.jpg",
  },
  {
    nome: "Dr. Rafael Nogueira",
    especialidade: "Psiquiatria",
    crm: "CRM-GO 0005/ficção",
    bio: "Acredita que saúde mental se trata com escuta, plano e retorno marcado.",
    foto: "/images/dr-rafael.jpg",
  },
  {
    nome: "Dr. Tomás Almeida",
    especialidade: "Ortopedia",
    crm: "CRM-GO 0006/ficção",
    bio: "Do torcicolo à maratona: para ele, movimento é o melhor remédio.",
    foto: "/images/dr-tomas.jpg",
  },
];

/* ── Linha do tempo — PRD §5.2 (seção 3) ─────────────────── */

export type Marco = {
  ano: string;
  titulo: string;
  texto: string;
  /** Marco de 2024 ganha nó maior em apricot */
  destaque?: boolean;
};

export const marcos: Marco[] = [
  {
    ano: "2012",
    titulo: "A primeira sala",
    texto:
      "A Alento nasce no St. Bueno com três especialidades — Clínica Geral, Pediatria e Ginecologia — e uma recepção de duas cadeiras.",
  },
  {
    ano: "2016",
    titulo: "Expansão",
    texto:
      "Chegam as salas de exame e mais oito especialidades. A clínica dobra de tamanho; a fila do telefone também.",
  },
  {
    ano: "2020",
    titulo: "Teleconsulta",
    texto:
      "A distância obriga a repensar o atendimento. A consulta por vídeo entra na rotina — e fica.",
  },
  {
    ano: "2024",
    titulo: "Automação da jornada",
    texto:
      "Com a Evolux, agendamento, lembretes e entrega de resultados passam a responder sozinhos, 24h por dia. A recepção volta a olhar nos olhos de quem chega.",
    destaque: true,
  },
  {
    ano: "Hoje",
    titulo: "Fôlego para crescer",
    texto:
      "14 especialidades, 22 profissionais e 4.800 atendimentos por mês — com resposta em até 40 segundos.",
  },
];

/* ── Valores — PRD §5.2 (seção 5) ────────────────────────── */

export type Valor = {
  titulo: string;
  texto: string;
  icone: LucideIcon;
};

export const valores: Valor[] = [
  {
    titulo: "Resposta é cuidado",
    texto:
      "Quem procura uma clínica já está preocupado. Responder rápido é a primeira forma de acolher.",
    icone: Timer,
  },
  {
    titulo: "Tecnologia a serviço do afeto",
    texto:
      "Automatizamos o repetitivo para sobrar tempo humano onde ele faz diferença: na consulta e na escuta.",
    icone: HeartHandshake,
  },
  {
    titulo: "Transparência no processo",
    texto:
      "Você sabe o que acontece com o seu agendamento, o seu exame e o seu dado — em cada etapa.",
    icone: ShieldCheck,
  },
];

/* ── Convênios (fictícios) — PRD §5.3 (seção 4) ──────────── */

export const convenios = [
  "Sanitas",
  "VidaPlena",
  "Meridian",
  "Amparo Saúde",
  "Alvorada",
  "Prisma Saúde",
  "Vitalis",
  "NorteVida",
];

/* ── FAQ de Atendimentos — PRD §5.3 (seção 5) ────────────── */

export type FaqItem = {
  pergunta: string;
  resposta: string;
};

export const faqAtendimentos: FaqItem[] = [
  {
    pergunta: "Quais convênios vocês aceitam?",
    resposta:
      "Trabalhamos com Sanitas, VidaPlena, Meridian, Amparo Saúde, Alvorada, Prisma Saúde, Vitalis e NorteVida — além de atendimento particular. Os convênios aceitos por cada especialidade aparecem no card correspondente, e o assistente do WhatsApp confirma a cobertura antes de agendar.",
  },
  {
    pergunta: "Posso remarcar a consulta pelo bot?",
    resposta:
      "Pode, a qualquer hora. Responda o lembrete que chega um dia antes ou mande uma mensagem no WhatsApp: o assistente mostra os horários livres e remarca na mesma conversa, sem ligação.",
  },
  {
    pergunta: "Como recebo o resultado do meu exame?",
    resposta:
      "No seu WhatsApp, no mesmo dia em que o laboratório libera o laudo. Você não precisa ligar nem buscar papel na clínica — e o resultado também fica guardado para a consulta de retorno.",
  },
  {
    pergunta: "Primeira consulta: o que levar?",
    resposta:
      "Documento com foto, carteirinha do convênio (se tiver) e exames anteriores relacionados à queixa. Chegando 10 minutos antes, dá tempo de fazer o cadastro com calma.",
  },
  {
    pergunta: "Vocês fazem teleconsulta?",
    resposta:
      "Sim, desde 2020 — hoje disponível em Psiquiatria, Psicologia, Nutrição e retornos de algumas especialidades. O agendamento é igual: pelo WhatsApp, com o link da vídeo-chamada enviado na confirmação.",
  },
  {
    pergunta: "Tem estacionamento?",
    resposta:
      "Tem, ao lado da clínica, com convênio para pacientes: os primeiros 90 minutos são gratuitos. É só validar o ticket na recepção.",
  },
];

/* ── Jornada do paciente — PRD §5.1 (seção 4) ────────────── */

export type EtapaJornada = {
  passo: string;
  titulo: string;
  frase: string;
  icone: LucideIcon;
};

export const jornada: EtapaJornada[] = [
  {
    passo: "PASSO 01",
    titulo: "Você chama no WhatsApp",
    frase: "A qualquer hora, inclusive de madrugada. A resposta chega em até 40 segundos.",
    icone: MessageCircle,
  },
  {
    passo: "PASSO 02",
    titulo: "O assistente agenda na hora",
    frase: "Você escolhe entre os horários livres e sai da conversa com a consulta marcada.",
    icone: CalendarCheck,
  },
  {
    passo: "PASSO 03",
    titulo: "Lembrete chega sozinho",
    frase: "Um dia antes, a confirmação aparece no seu celular. Remarcar é uma resposta.",
    icone: BellRing,
  },
  {
    passo: "PASSO 04",
    titulo: "Resultado no seu celular",
    frase: "Exame liberado pelo laboratório é exame entregue — no mesmo dia, sem ligação.",
    icone: Smartphone,
  },
];

/* ── Depoimentos — PRD §5.1 (seção 6) ────────────────────── */

export type Depoimento = {
  citacao: string;
  nome: string;
  idade: number;
  tempo: string;
};

export const depoimentos: Depoimento[] = [
  {
    citacao:
      "Marquei consulta às 23h de uma terça, deitada na cama. Em um minuto estava agendada. Nunca mais fiquei pendurada no telefone.",
    nome: "Marcela R.",
    idade: 34,
    tempo: "paciente há 3 anos",
  },
  {
    citacao:
      "O lembrete chega um dia antes e, se preciso, remarco ali mesmo. De lá pra cá não perdi mais nenhuma consulta.",
    nome: "Antônio F.",
    idade: 61,
    tempo: "paciente há 8 anos",
  },
  {
    citacao:
      "O resultado do exame da minha filha chegou no WhatsApp no mesmo dia. Sem ligar, sem buscar papel na clínica.",
    nome: "Renata M.",
    idade: 41,
    tempo: "paciente há 2 anos",
  },
];

/* ── Blog — metadados dos posts (PRD §5.4) ───────────────── */

export type CategoriaPost = "Saúde no dia a dia" | "Prevenção" | "Bastidores";

export type Post = {
  slug: string;
  titulo: string;
  categoria: CategoriaPost;
  resumo: string;
  autor: string;
  /** ISO — usado para ordenar; formatar com toLocaleDateString */
  data: string;
  /** Tempo de leitura em minutos */
  leitura: number;
};

export const posts: Post[] = [
  {
    slug: "por-que-voce-esquece-consultas",
    titulo: "Por que você esquece consultas — e como paramos de deixar isso acontecer",
    categoria: "Bastidores",
    resumo:
      "27% dos pacientes faltavam por puro esquecimento. Um lembrete que chega na hora certa mudou esse número — e a rotina da recepção.",
    autor: "Dra. Helena Duarte",
    data: "2026-06-30",
    leitura: 4,
  },
  {
    slug: "check-up-anual-o-que-entra",
    titulo: "Check-up anual: o que realmente precisa entrar no seu",
    categoria: "Prevenção",
    resumo:
      "Nem tudo que aparece em lista de internet faz sentido para você. O que a idade, o histórico e a rotina dizem sobre os seus exames.",
    autor: "Dr. Caio Monteiro",
    data: "2026-06-12",
    leitura: 5,
  },
  {
    slug: "dor-de-cabeca-quando-procurar-medico",
    titulo: "Dor de cabeça: quando observar e quando procurar um médico",
    categoria: "Saúde no dia a dia",
    resumo:
      "A maioria passa com água, descanso e paciência. Alguns sinais, não. Aprenda a diferença sem entrar em pânico a cada pontada.",
    autor: "Dra. Helena Duarte",
    data: "2026-05-28",
    leitura: 4,
  },
  {
    slug: "a-jornada-do-resultado",
    titulo: "O que acontece depois do seu exame? A jornada do resultado",
    categoria: "Bastidores",
    resumo:
      "Do laboratório ao seu WhatsApp, no mesmo dia. O caminho que o seu resultado percorre — sem você precisar ligar para ninguém.",
    autor: "Dra. Marina Costa",
    data: "2026-05-09",
    leitura: 4,
  },
  {
    slug: "ansiedade-nao-e-frescura",
    titulo: "Ansiedade não é frescura: sinais de que vale procurar ajuda",
    categoria: "Saúde no dia a dia",
    resumo:
      "Todo mundo sente ansiedade. Nem todo mundo precisa conviver com ela no volume máximo. Os sinais de que é hora de conversar.",
    autor: "Dr. Rafael Nogueira",
    data: "2026-04-22",
    leitura: 5,
  },
  {
    slug: "vacinas-de-adulto",
    titulo: "Vacinas de adulto: as 5 que quase todo mundo deixa atrasar",
    categoria: "Prevenção",
    resumo:
      "Carteirinha de vacinação não é coisa só de criança. As doses que ficam para trás depois dos 20 — e por que valem a lembrança.",
    autor: "Dra. Lívia Rocha",
    data: "2026-04-03",
    leitura: 4,
  },
];

/** Posts ordenados do mais recente para o mais antigo */
export const postsRecentes = [...posts].sort((a, b) => b.data.localeCompare(a.data));

/* ── Script do bot — PRD §5.1.a ──────────────────────────── */

export type BotMessage = {
  autor: "paciente" | "alento";
  texto: string;
  hora: string;
};

export const botScript: BotMessage[] = [
  { autor: "paciente", texto: "Oi, queria marcar dermatologista", hora: "22:47" },
  {
    autor: "alento",
    texto: "Claro! 😊 Tenho quinta 14h ou sexta 9h30 com a Dra. Marina. Qual prefere?",
    hora: "22:47",
  },
  { autor: "paciente", texto: "Sexta", hora: "22:48" },
  {
    autor: "alento",
    texto: "Agendado ✓ Sexta, 9h30. Te lembro um dia antes por aqui.",
    hora: "22:48",
  },
];
