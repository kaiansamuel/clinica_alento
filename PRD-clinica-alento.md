# PRD — Site Institucional Clínica Alento

Projeto de portfólio Evolux · Categoria: **Automação de Processos**
Cliente fictício: clínica médica multiespecialidade (saúde)
Documento de referência para desenvolvimento via Claude Code.

---

## 1. Contexto e objetivo

**Cliente fictício:** Clínica Alento — clínica multiespecialidade de médio porte
em Goiânia/GO, fundada em 2012. 14 especialidades, 22 profissionais,
~4.800 atendimentos/mês. Cresceu rápido e a recepção virou gargalo: telefone
ocupado, paciente esperando confirmação, 27% de faltas por esquecimento.

**O que a Evolux entregou (a história que o site conta):** a Evolux automatizou
a jornada do paciente de ponta a ponta — agendamento por bot no WhatsApp,
lembretes e confirmações automáticas, fila de espera inteligente, entrega de
resultados sem ligação e pesquisa de satisfação pós-consulta. Integrações via
n8n entre WhatsApp, sistema de agenda, laboratório e CRM.

**Objetivo do projeto (case de portfólio):** demonstrar a categoria
**Automação de Processos** do card 03 da Evolux — mas, diferente dos cases
anteriores (que são "a ferramenta"), este é o **site institucional do cliente
que vive a automação**. O visitante deve *sentir* a automação funcionando no
próprio site, não apenas ler sobre ela.

**Pilar do produto:** *"Cuidar bem começa em responder rápido."* Toda decisão
de design e copy deriva disso — velocidade de resposta como forma de cuidado.

**Evolução em relação aos cases anteriores:** este é o primeiro case
multi-página (5 páginas), com design **claro**, fotografia real e animações —
o portfólio ganha amplitude de repertório (dark industrial → dark varejo →
light saúde).

---

## 2. Identidade de marca

### 2.1 Posicionamento e tom de voz

Acolhedor sem ser infantil, competente sem ser frio. A voz é a de uma
enfermeira experiente: calma, direta, no diminutivo zero. Frases curtas.
Números quando fortalecem confiança ("resposta em até 40 segundos", "38%
menos faltas"), nunca jargão técnico de TI na área do paciente — o vocabulário
de automação (n8n, RPA, integração) aparece só na seção "bastidores", assinada
pela Evolux.

Proibido no copy: "revolucionário", "disruptivo", "cuidando de você e da sua
família" (clichê de clínica). Preferir concretude: "você agenda pelo WhatsApp
em menos de um minuto, a qualquer hora".

### 2.2 Conceito visual — "O fio do cuidado"

Uma **linha contínua** é a assinatura da marca: ela nasce como traçado de
batimento cardíaco no logo, percorre o site conectando seções (desenhada no
scroll via SVG), e nas seções de automação se transforma em **fluxo de nós**
(a mesma linha ligando etapas — visual que remete a um workflow n8n sem dizer
o nome). Saúde e automação unidas pela mesma metáfora: *um fluxo que não se
interrompe*.

Onde a Vetor usa desenho técnico e a Bravo usa etiqueta de varejo, a Alento
usa **luz e respiro**: fundos claros e quentes, muito espaço em branco,
sombras suaves e difusas, cantos bem arredondados (16–24px), fotografia com
luz natural.

### 2.3 Paleta de cores

| Token | Hex | Uso |
|---|---|---|
| `porcelain` | `#FAF7F2` | Fundo principal (branco quente, nunca `#FFF` puro no fundo) |
| `linen` | `#F1ECE3` | Seções alternadas, fundos de destaque |
| `white` | `#FFFFFF` | Cards, superfícies elevadas |
| `sage-600` (acento) | `#4E8A6C` | CTAs, links, ícones ativos, a "linha do cuidado" |
| `sage-700` | `#3C6E55` | Hover do acento, texto sobre fundos claros de acento |
| `sage-100` | `#E3EFE8` | Fundos de chips/badges, hover suave |
| `apricot` | `#E8A87C` | Acento secundário: destaques calorosos, marcadores do blog, detalhes ilustrativos — nunca em CTA principal |
| `ink` | `#233029` | Texto principal (verde-carvão, não preto puro) |
| `ink-muted` | `#66746C` | Texto secundário, legendas |
| `line` | `#E2DCD1` | Bordas e divisores |

Regra: `sage` é ação e confiança, `apricot` é calor humano. Os dois nunca
disputam o mesmo componente. Contraste mínimo AA em todos os pares
texto/fundo (conferir `ink-muted` sobre `linen`).

### 2.4 Tipografia

| Papel | Fonte | Peso/uso |
|---|---|---|
| Display (títulos) | **Fraunces** | 500–600, optical size alto, um toque humanista — serifada que aproxima sem perder autoridade |
| Corpo | **Inter** | 400–500 |
| Dados/etiquetas | **IBM Plex Mono** | horários, números de contador, etiquetas de fluxo ("PASSO 01", "40s") |

Títulos em sentence case (nunca uppercase gritado — este case é o contraponto
suave do portfólio). Itálico do Fraunces liberado para uma palavra de ênfase
por headline (ex.: "Cuidar bem começa em *responder rápido*").

### 2.5 Logo

Símbolo: a palavra **alento** em Fraunces minúsculas, onde a barra do "t" se
estende para a direita e vira um **traçado de batimento cardíaco que termina
em check** (✓) — batimento que se resolve, resposta que chega. Uma única linha,
espessura constante, cor `sage-600`.

Assinatura secundária: `CLÍNICA · DESDE 2012` em IBM Plex Mono, tracking
largo, `ink-muted`.

Criar em SVG no próprio projeto: `logo-clinica-alento.svg`.

### 2.6 Elemento-assinatura — a linha que percorre o site

- Na **home**, um path SVG contínuo desce pela lateral conectando as seções,
  desenhado conforme o scroll (`stroke-dashoffset` animado via
  IntersectionObserver ou scroll progress). Em cada seção a linha "pousa" num
  nó circular.
- Nas seções de **jornada/automação**, a mesma linha conecta cards de etapas
  na horizontal — cada nó pulsa quando entra no viewport.
- No **footer**, a linha termina no batimento+check do logo. O ciclo fecha.

Este elemento é o que faz o site parecer vivo e é a metáfora do produto.
Vale investir tempo nele — mas com fallback: sem JS ou com
`prefers-reduced-motion`, a linha aparece estática e completa.

### 2.7 Motion

| Movimento | Especificação |
|---|---|
| Reveal de seção | fade + translateY(24px), 500ms, easing `cubic-bezier(0.22, 1, 0.36, 1)`, stagger de 80ms entre filhos |
| Linha do cuidado | desenho por scroll progress (dashoffset), sem duração fixa |
| Contadores | contagem 0→alvo em ~1.2s quando entram no viewport, easing out, números em Plex Mono |
| Bot do WhatsApp (widget) | mensagens surgem em sequência com indicador "digitando..." (3 pontos), 600–900ms entre balões |
| Marquee de especialidades | translateX infinito, ~40s por ciclo, pausa on-hover |
| Hover de cards | translateY(-4px) + sombra difusa maior, 200ms |
| Transição de página | fade curto (150ms) via template do App Router — sutil, sem show |

**Obrigatório:** tudo respeita `prefers-reduced-motion: reduce` (desliga
marquee, contadores pulam para o valor final, linha estática).

---

## 3. Arquitetura técnica

- **Next.js (App Router)** — mesma major dos cases anteriores (ver
  `bravo_multimarcas/package.json`; hoje `next 16.x`, React 19).
- **Tailwind CSS v4** com tokens da paleta como CSS custom properties.
- **Motion (framer-motion)** para reveals, stagger e o widget do bot — ou
  IntersectionObserver puro se preferir zero dependência; decidir na fase 1
  e manter uma abordagem só.
- **Sem banco de dados** — blog e conteúdo em arquivos TS/MDX estáticos
  (`content/posts/*.mdx` ou array tipado em `lib/content.ts`). Sem auth,
  sem middleware.
- **Formulário de contato:** server action que simula processamento (delay
  ~1.2s) e retorna sucesso — o valor do form é a *animação de fluxo* pós-envio
  (ver 5.5), não backend real.
- Deploy: Vercel (mesmo fluxo dos outros cases).
- `next/image` para todas as fotos; imagens locais em `public/images/`.

---

## 4. Conteúdo e imagens

### 4.1 Fotografia

Banco de imagens gratuito (Unsplash/Pexels), **baixadas para
`public/images/`** com nome semântico — nada de hotlink. Critério de seleção:
luz natural, tons quentes, pessoas reais (não stock forçado), ambientes
claros. Evitar: jaleco + prancheta olhando pra câmera, estetoscópio em fundo
branco.

Lista mínima:

| Arquivo | Conteúdo |
|---|---|
| `hero-recepcao.jpg` | recepção clara e acolhedora, madeira + plantas |
| `sobre-fachada.jpg` | fachada/ambiente externo com luz de manhã |
| `sobre-equipe.jpg` | equipe em momento espontâneo |
| `dra-helena.jpg`, `dr-caio.jpg`, `dra-marina.jpg` (+3) | retratos individuais para cards de equipe |
| `atendimento-consulta.jpg` | consulta em andamento, ângulo lateral |
| `atendimento-exame.jpg` | sala de exame/imagem |
| `blog-*.jpg` | 1 capa por post (6) |

### 4.2 Especialidades (14)

Clínica Geral · Cardiologia · Dermatologia · Endocrinologia · Ginecologia ·
Pediatria · Ortopedia · Otorrinolaringologia · Oftalmologia · Psiquiatria ·
Psicologia · Nutrição · Fisioterapia · Exames de imagem

### 4.3 Números do case (usados em contadores e copy)

- Resposta do bot: **até 40 segundos**, 24h por dia
- Faltas: **-38%** após lembretes automáticos
- **4.800** atendimentos/mês
- **92%** dos agendamentos sem intervenção humana
- Resultado de exame entregue **no mesmo dia** da liberação do laboratório
- NPS **87**

---

## 5. Requisitos funcionais por página

Navegação global: `HOME · SOBRE NÓS · ATENDIMENTOS · BLOG · CONTATO`

### 5.1 Home (`/`)

Ordem das seções:

1. **Hero** — split: à esquerda, eyebrow `CLÍNICA MULTIESPECIALIDADE ·
   GOIÂNIA`, headline "Cuidar bem começa em *responder rápido*.", sub com a
   promessa concreta (agendamento por WhatsApp em menos de 1 minuto, a
   qualquer hora), CTA primário "Agendar pelo WhatsApp" + secundário "Conhecer
   a clínica". À direita, foto `hero-recepcao.jpg` em card com cantos 24px e,
   **sobreposto à foto, o widget do bot** (5.1.a). Elementos flutuantes
   discretos: chip "⏱ resposta média 40s", chip "hoje: 12 horários livres".
2. **Barra de confiança** — 4 contadores animados (atendimentos/mês, -38%
   faltas, 14 especialidades, NPS 87) sobre fundo `linen`.
3. **Especialidades (marquee)** — duas linhas de chips deslizando em direções
   opostas, cada chip com ícone de linha (lucide). Clique leva a
   `/atendimentos`.
4. **A jornada do paciente** — a seção-assinatura. A linha do cuidado conecta
   4 etapas na horizontal: *Você chama no WhatsApp* → *O assistente agenda na
   hora* → *Lembrete chega sozinho* → *Resultado no seu celular*. Cada etapa é
   um card com ícone, título e uma frase; o nó da linha pulsa ao entrar no
   viewport. Etiquetas em Plex Mono: `PASSO 01`…`PASSO 04`.
5. **Bastidores (case Evolux)** — fundo `ink` (única seção escura do site,
   contraste proposital): "Por trás do atendimento, um fluxo que não dorme."
   Diagrama estilizado de workflow (a linha virando grafo: WhatsApp → agenda →
   laboratório → CRM), 3 bullets do que foi automatizado e a assinatura
   "Automação desenvolvida por **Evolux**" com link para o site da Evolux.
   É aqui que o case fala de integração, bot e RPA — vocabulário técnico
   permitido.
6. **Depoimentos** — 3 cards com citação, nome, idade e há quanto tempo é
   paciente. Um deles menciona explicitamente marcar consulta às 23h.
7. **Do blog** — os 3 posts mais recentes em cards horizontais.
8. **CTA final** — fundo `sage-100`, headline "Sua próxima consulta está a uma
   mensagem de distância.", botão WhatsApp + telefone.

**5.1.a Widget do bot (componente-chave do case):** simulação de conversa no
WhatsApp em card flutuante — balões surgem em sequência com "digitando...":

> Paciente: "Oi, queria marcar dermatologista" (22:47)
> Alento: "Claro! 😊 Tenho quinta 14h ou sexta 9h30 com a Dra. Marina. Qual prefere?"
> Paciente: "Sexta"
> Alento: "Agendado ✓ Sexta, 9h30. Te lembro um dia antes por aqui."

O horário tardio (22:47) é proposital: mostra o bot atendendo fora do horário
comercial. Loop reinicia após ~6s de pausa. Deve rodar também na página
Contato.

### 5.2 Sobre Nós (`/sobre`)

1. Hero curto: "Uma clínica que escuta — e responde." + `sobre-fachada.jpg`.
2. **Manifesto** — 2 parágrafos: por que "alento" (fôlego, alívio, ânimo);
   cuidado começa antes da consulta, no primeiro contato.
3. **Linha do tempo** (a linha do cuidado na vertical): 2012 fundação com 3
   especialidades → 2016 expansão → 2020 teleconsulta → **2024 automação da
   jornada com a Evolux** → hoje. O marco de 2024 ganha destaque visual
   (nó maior, cor `apricot`).
4. **Equipe** — grid de 6 retratos (nome, especialidade, CRM fictício
   `CRM-GO 0000/ficção`), hover revela mini-bio de 1 frase.
5. **Números + valores** — 3 valores em cards: *Resposta é cuidado* ·
   *Tecnologia a serviço do afeto* · *Transparência no processo*.
6. CTA final padrão.

### 5.3 Atendimentos (`/atendimentos`)

1. Hero curto: "14 especialidades. Um jeito só de cuidar."
2. **Grid de especialidades** — cards com ícone, nome, 1 frase do que trata e
   os convênios aceitos como mini-chips. Filtro por área no topo (Adulto ·
   Infantil · Saúde mental · Exames) — filtragem client-side com transição
   animada (layout animation).
3. **Como funciona o agendamento** — versão compacta da jornada da home,
   reaproveitando o componente, com o widget do bot ao lado.
4. **Convênios** — faixa com 8 logos fictícios em cinza (criar wordmarks
   simples: "Sanitas", "VidaPlena", "Meridian"...) + "e atendimento
   particular".
5. **FAQ** — accordion (6 perguntas: convênio, remarcação pelo bot, resultado
   de exame, primeira consulta, teleconsulta, estacionamento). Animação de
   abertura suave (height + fade).
6. CTA final padrão.

### 5.4 Blog (`/blog` e `/blog/[slug]`)

**Listagem:**
1. Post em destaque (o mais recente): card grande horizontal, foto + categoria
   em chip `apricot` + título + resumo + tempo de leitura.
2. Grid 2×⁠ dos demais 5 posts.
3. Chips de categoria (Saúde no dia a dia · Prevenção · Bastidores) filtram
   client-side.

**Post individual (`/blog/[slug]`):** capa, categoria, título, autor
(médico da equipe) + data + tempo de leitura, corpo em tipografia generosa
(máx ~68ch), bloco de CTA no fim ("Quer conversar com um especialista?
Chama no WhatsApp") e 2 posts relacionados.

**Conteúdo real a escrever (6 posts, 300–500 palavras cada, tom da marca):**
1. "Por que você esquece consultas — e como paramos de deixar isso acontecer" *(Bastidores)*
2. "Check-up anual: o que realmente precisa entrar no seu" *(Prevenção)*
3. "Dor de cabeça: quando observar e quando procurar um médico" *(Saúde no dia a dia)*
4. "O que acontece depois do seu exame? A jornada do resultado" *(Bastidores — conta a automação do laboratório ao WhatsApp)*
5. "Ansiedade não é frescura: sinais de que vale procurar ajuda" *(Saúde no dia a dia)*
6. "Vacinas de adulto: as 5 que quase todo mundo deixa atrasar" *(Prevenção)*

### 5.5 Contato (`/contato`)

1. Hero curto: "Fale com a gente do jeito que preferir."
2. **Duas colunas:** à esquerda, canais — WhatsApp (destaque, com o widget do
   bot rodando), telefone, e-mail, endereço fictício (St. Bueno, Goiânia/GO)
   e horários em Plex Mono (seg–sex 7h–19h · sáb 7h–13h · **bot: 24h ✓**).
   À direita, **formulário**: nome, telefone, assunto (select: agendar /
   resultado / convênios / outro), mensagem.
3. **A assinatura do case — pós-envio:** ao enviar, o formulário dá lugar a
   uma animação da linha do cuidado percorrendo 3 nós: *Recebido* →
   *Triagem automática* → *Na fila da equipe* — com a promessa "Respondemos
   em até 2h dentro do horário de atendimento." O visitante *vê* o processo
   automatizado que o site inteiro descreve.
4. **Mapa estilizado** — não usar Google Maps embed (pesado e foge da
   estética); criar mapa ilustrativo em SVG com a paleta (quarteirões
   `linen`, ruas `line`, pin `sage`) ou foto da fachada com card de endereço.
5. FAQ compacto (3 itens) + CTA WhatsApp.

### 5.6 Componentes globais

- **Header** sticky, fundo `porcelain` com blur ao rolar, logo à esquerda,
  nav central, CTA "Agendar pelo WhatsApp" à direita (mobile: menu
  full-screen com stagger nos links). Link ativo sublinhado pela linha do
  cuidado (animação de largura).
- **Footer** em `ink` (texto claro): 4 colunas (logo+manifesto curto ·
  navegação · especialidades top 6 · contato/horários), linha do cuidado
  fechando no logo, crédito "Site e automação: **Evolux**" (link) e
  disclaimer: *"Clínica fictícia — projeto de demonstração do portfólio
  Evolux. CRMs e convênios ilustrativos."*
- **Botão WhatsApp flutuante** (todas as páginas, canto inferior direito):
  após 4s exibe balão de preview "Agende em 1 minuto 👋" que some ao rolar.

---

## 6. Requisitos não funcionais

- **Performance:** LCP < 2.5s; fotos em WebP/AVIF via `next/image` com `sizes`
  corretos; fontes com `next/font` (zero layout shift); marquee e linha
  animando só `transform`/`opacity`/`stroke-dashoffset` (nada de layout).
- **Acessibilidade:** contraste AA; navegação completa por teclado (accordion,
  filtros, menu mobile); `aria-live="polite"` nos balões do bot; foco visível
  customizado (`outline` sage); `prefers-reduced-motion` em tudo (ver 2.7).
- **SEO:** metadata por página (title/description únicos), OpenGraph com
  imagem por página, `sitemap.xml` e JSON-LD `MedicalClinic` na home
  (dados fictícios).
- **Responsivo:** mobile-first; jornada do paciente vira vertical no mobile
  (a linha desce em vez de atravessar); widget do bot vira seção própria
  abaixo do hero.

---

## 7. Estrutura de pastas sugerida

```
clinica_alento/
├── app/
│   ├── layout.tsx            # fontes, header, footer, whatsapp flutuante
│   ├── page.tsx              # home
│   ├── sobre/page.tsx
│   ├── atendimentos/page.tsx
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx
│   ├── contato/page.tsx
│   └── globals.css           # tokens da paleta, base
├── components/
│   ├── layout/  (Header, Footer, WhatsFloat)
│   ├── home/    (Hero, TrustBar, Marquee, Journey, Backstage, ...)
│   ├── shared/  (BotWidget, CareLine, Counter, Reveal, SectionCTA, FAQ)
│   └── ...
├── content/
│   └── posts/                # 6 posts (MDX ou TS)
├── lib/
│   └── content.ts            # especialidades, equipe, depoimentos, posts
├── public/images/
└── logo-clinica-alento.svg
```

`CareLine` (a linha do cuidado) e `BotWidget` são os dois componentes com
maior valor de demo — construir cedo e reaproveitar em todas as páginas.

---

## 8. Fases de desenvolvimento sugeridas

1. **Fundação** — projeto Next + tokens/paleta/fontes no `globals.css`, logo
   SVG, Header/Footer, estrutura das 5 rotas com conteúdo placeholder.
2. **Componentes-assinatura** — `CareLine`, `BotWidget`, `Reveal`, `Counter`.
   Validar a linha do cuidado no scroll antes de seguir.
3. **Home completa** — todas as 8 seções com conteúdo final.
4. **Sobre + Atendimentos** — timeline, equipe, grid com filtros, FAQ.
5. **Blog** — conteúdo dos 6 posts escrito, listagem + post individual.
6. **Contato** — form com server action + animação de fluxo pós-envio.
7. **Polimento** — imagens finais otimizadas, SEO/OG, acessibilidade,
   reduced-motion, Lighthouse, deploy Vercel.

Ao final: capturar print do hero e adicionar ao card 03 do site Evolux
(`components/Services.tsx`, campo `projects` — mesmo processo dos cases
Vetor e Bravo).

---

## 9. Fora de escopo (v1)

- Agendamento real / integração real com WhatsApp (o bot é simulação de UI)
- CMS para o blog (conteúdo estático versionado)
- Área do paciente / login / portal de resultados
- Teleconsulta funcional
- Multi-idioma
- Página individual por especialidade (âncoras no grid bastam na v1)
