/**
 * Corpo dos 6 posts do blog — PRD §5.4.
 * Tom da marca: enfermeira experiente — calmo, direto, frases curtas.
 * Vocabulário técnico (n8n, integração, RPA) só nos posts de Bastidores,
 * que carregam a assinatura da Evolux.
 */

export type Bloco =
  | { tipo: "p"; texto: string }
  | { tipo: "h2"; texto: string }
  | { tipo: "lista"; itens: string[] };

export const corpos: Record<string, Bloco[]> = {
  "por-que-voce-esquece-consultas": [
    {
      tipo: "p",
      texto:
        "Você marca a consulta com três semanas de antecedência. Anota. Tem certeza de que vai lembrar. E aí a vida acontece: reunião que estoura o horário, filho que adoece, semana que vira um borrão. No dia seguinte, a lembrança chega junto com a culpa.",
    },
    {
      tipo: "p",
      texto:
        "Isso não é desleixo. É o jeito como a memória funciona: compromissos distantes perdem prioridade para o que grita mais alto no presente. Aqui na Alento, 27% dos pacientes faltavam por puro esquecimento. Um em cada quatro horários — perdido para todo mundo: para quem faltou, para quem esperava uma vaga e para a equipe que ficou ociosa.",
    },
    { tipo: "h2", texto: "A solução não foi cobrar. Foi lembrar." },
    {
      tipo: "p",
      texto:
        "Em 2024, automatizamos os lembretes. Um dia antes da consulta, uma mensagem chega no seu WhatsApp com data, horário e nome do profissional. Confirmar é um toque. Remarcar também: o assistente mostra os horários livres ali mesmo, na conversa, e resolve em menos de um minuto.",
    },
    {
      tipo: "p",
      texto:
        "Se você não responde, a mensagem se repete algumas horas antes. Se avisa que não vai, o horário volta para a fila de espera inteligente — e outro paciente, que aguardava vaga, recebe o convite na hora.",
    },
    { tipo: "h2", texto: "O que acontece nos bastidores" },
    {
      tipo: "p",
      texto:
        "Por trás da mensagem simples existe um fluxo desenhado pela Evolux: uma integração via n8n conecta a agenda da clínica ao WhatsApp. Quando a consulta se aproxima, o fluxo dispara sozinho — verifica o horário, monta a mensagem, envia, escuta a resposta e atualiza a agenda. Nenhuma pessoa da recepção precisa tocar no processo.",
    },
    {
      tipo: "p",
      texto:
        "O resultado, medido um ano depois: 38% menos faltas. Na prática, são centenas de consultas por mês que deixaram de se perder — e uma recepção que parou de passar o dia ao telefone para fazer cobrança de presença.",
    },
    {
      tipo: "p",
      texto:
        "Se você tem consulta marcada com a gente, não precisa fazer nada. O lembrete chega. É só responder.",
    },
  ],

  "check-up-anual-o-que-entra": [
    {
      tipo: "p",
      texto:
        "Toda virada de ano aparecem listas prontas de check-up na internet: vinte exames, trinta exames, pacote completo. A verdade é mais simples e mais barata — check-up bom é o que considera a sua idade, o seu histórico e a sua rotina. O resto é exame por exame.",
    },
    { tipo: "h2", texto: "O que costuma entrar para quase todo mundo" },
    {
      tipo: "lista",
      itens: [
        "Aferição de pressão arterial — silenciosa, a hipertensão raramente avisa.",
        "Glicemia de jejum — para rastrear diabetes e pré-diabetes.",
        "Perfil lipídico — colesterol total, frações e triglicerídeos.",
        "Hemograma completo — uma fotografia geral do sangue.",
        "Atualização da carteira de vacinação — sim, ela faz parte do check-up.",
      ],
    },
    { tipo: "h2", texto: "O que muda com a idade e o histórico" },
    {
      tipo: "p",
      texto:
        "A partir dos 40, entram avaliações cardiológicas mais detalhadas. Mulheres têm calendário próprio de rastreamento ginecológico e mamário; homens, o urológico. Histórico familiar de diabetes, infarto ou câncer antecipa alguns exames em anos — por isso a conversa com o médico vale mais do que qualquer lista pronta.",
    },
    { tipo: "h2", texto: "O que geralmente não precisa" },
    {
      tipo: "p",
      texto:
        "Exame de imagem sem queixa e sem indicação, dosagens da moda, pacotes que prometem rastrear tudo. Exame demais gera achado irrelevante, que gera ansiedade, que gera mais exame. Rastrear é bom quando existe motivo — não por precaução genérica.",
    },
    {
      tipo: "p",
      texto:
        "Nosso conselho de sempre: comece pela consulta, não pelos exames. Em meia hora, o clínico monta a lista certa para você — enxuta, com propósito, sem desperdício. Depois, os resultados chegam no seu WhatsApp no mesmo dia da liberação, e o retorno já sai agendado.",
    },
    {
      tipo: "p",
      texto:
        "Um check-up por ano é suficiente para a maioria das pessoas. O importante não é a quantidade de exames: é não pular o ano.",
    },
  ],

  "dor-de-cabeca-quando-procurar-medico": [
    {
      tipo: "p",
      texto:
        "Quase toda dor de cabeça é benigna. Tensão acumulada, noite mal dormida, jejum longo, muitas horas de tela, pouca água. Melhora com descanso, hidratação e, quando necessário, um analgésico simples. Até aí, vida normal.",
    },
    { tipo: "h2", texto: "O que vale observar" },
    {
      tipo: "p",
      texto:
        "Se a dor virou visita frequente, comece um diário curto: em que momento do dia ela aparece, o que você comeu, como dormiu, o que estava fazendo. Duas semanas de anotações ajudam o médico mais do que qualquer exame — padrões de gatilho ficam visíveis rápido.",
    },
    { tipo: "h2", texto: "Sinais de que é hora de procurar ajuda" },
    {
      tipo: "lista",
      itens: [
        "Dor súbita e muito intensa, diferente de tudo que você já sentiu.",
        "Dor acompanhada de febre alta e rigidez na nuca.",
        "Alterações de visão, fala, força ou equilíbrio junto com a dor.",
        "Dor que começa depois de uma pancada na cabeça.",
        "Mudança clara no padrão: era rara, virou diária; era leve, virou incapacitante.",
      ],
    },
    {
      tipo: "p",
      texto:
        "Nesses casos, não espere passar. Procure atendimento no mesmo dia — os sinais acima pedem avaliação médica, não paciência.",
    },
    { tipo: "h2", texto: "O cuidado com o analgésico de todo dia" },
    {
      tipo: "p",
      texto:
        "Aqui mora uma armadilha comum: usar analgésico com muita frequência pode causar a chamada cefaleia por uso excessivo de medicamentos — a dor que volta justamente porque o remédio virou rotina. Se você toma comprimido para dor de cabeça mais de dez dias por mês, isso já é motivo de consulta.",
    },
    {
      tipo: "p",
      texto:
        "Dor de cabeça recorrente tem tratamento, e quase nunca é o que a pessoa imaginava. Uma consulta com o clínico geral organiza a investigação — e, se precisar, o encaminhamento certo sai dali mesmo, com retorno já marcado.",
    },
  ],

  "a-jornada-do-resultado": [
    {
      tipo: "p",
      texto:
        "Antigamente era assim: você fazia o exame, esperava alguns dias, ligava para a clínica, a linha estava ocupada, você ligava de novo, alguém verificava, pedia para aguardar — e no fim ainda era preciso buscar o papel pessoalmente. O exame ficava pronto muito antes de chegar até você.",
    },
    {
      tipo: "p",
      texto:
        "Hoje, na Alento, o caminho é outro: o laboratório libera o laudo e o resultado chega no seu WhatsApp no mesmo dia. Sem ligação, sem fila, sem papel esquecido na gaveta da recepção.",
    },
    { tipo: "h2", texto: "O caminho que o laudo percorre" },
    {
      tipo: "p",
      texto:
        "Essa entrega tem uma engenharia por trás, desenhada pela Evolux. Uma integração via n8n conecta o sistema do laboratório à nossa plataforma de mensagens. Quando o laudo é liberado, o fluxo acorda: confere se o exame pertence a um paciente com cadastro ativo, gera um link seguro de acesso e envia a mensagem — tudo em minutos, sem intervenção humana.",
    },
    {
      tipo: "lista",
      itens: [
        "O laboratório libera o laudo no sistema.",
        "A integração identifica o paciente e valida o cadastro.",
        "Um link seguro e individual é gerado.",
        "A mensagem chega no WhatsApp do titular — e de mais ninguém.",
      ],
    },
    { tipo: "h2", texto: "E a privacidade?" },
    {
      tipo: "p",
      texto:
        "Só o titular do exame recebe o resultado, em link protegido. Nenhum laudo circula em grupo, em e-mail aberto ou na mão de terceiros. O seu médico também recebe uma cópia no prontuário — assim, na consulta de retorno, ele já leu tudo antes de você sentar na cadeira.",
    },
    {
      tipo: "p",
      texto:
        "O detalhe de que mais nos orgulhamos: se o resultado pede atenção, a consulta de retorno é oferecida na mesma mensagem, com horários livres para escolher. Do exame ao retorno, a linha não se interrompe.",
    },
    {
      tipo: "p",
      texto:
        "É automação a serviço de uma coisa antiga: ninguém deveria esperar de novo por uma resposta que já existe.",
    },
  ],

  "ansiedade-nao-e-frescura": [
    {
      tipo: "p",
      texto:
        "Ansiedade, em dose normal, é equipamento de fábrica. É ela que faz você revisar a apresentação, chegar no horário, olhar para os dois lados antes de atravessar. O problema não é sentir ansiedade — é quando ela fica no volume máximo, o dia inteiro, sem motivo à altura.",
    },
    { tipo: "h2", texto: "Sinais de que o volume passou do ponto" },
    {
      tipo: "lista",
      itens: [
        "Preocupação que não desliga, mesmo quando está tudo razoavelmente bem.",
        "Sono difícil: demora para pegar, acorda de madrugada, acorda cansado.",
        "Corpo em alerta: tensão nos ombros, mandíbula travada, coração acelerado.",
        "Irritabilidade fora do seu padrão, pavio mais curto do que você reconhece.",
        "Evitação: adiar conversa, recusar convite, empurrar decisão — para não sentir.",
      ],
    },
    {
      tipo: "p",
      texto:
        "Se três ou mais desses sinais moram com você há semanas, vale uma conversa profissional. Não porque você está \"louco\" — e sim porque sofrimento prolongado não deveria ser paisagem.",
    },
    { tipo: "h2", texto: "O que não é verdade" },
    {
      tipo: "p",
      texto:
        "Ansiedade não é frescura, não é falta de força de vontade e não se resolve com \"pensa positivo\". Também não é vergonha: é uma das condições de saúde mais comuns do mundo. Quem trata cedo encurta o caminho — como em qualquer área da medicina.",
    },
    { tipo: "h2", texto: "Como é começar" },
    {
      tipo: "p",
      texto:
        "Começa com uma consulta de escuta, sem pressa. Às vezes o plano é psicoterapia. Às vezes, terapia e medicação por um período. Quase sempre entram ajustes de sono, movimento e pausas — combinados com você, no seu ritmo. Aqui na Alento, Psicologia e Psiquiatria trabalham juntas e a teleconsulta está disponível para quem prefere começar de casa.",
    },
    {
      tipo: "p",
      texto:
        "Se você leu até aqui pensando em alguém, envie este texto para essa pessoa. Se pensou em você, o primeiro passo cabe numa mensagem de WhatsApp — e a resposta chega em segundos.",
    },
  ],

  "vacinas-de-adulto": [
    {
      tipo: "p",
      texto:
        "Depois da escola, ninguém mais cobra a carteirinha. E ela para no tempo: a maioria dos adultos brasileiros tem pelo menos uma vacina atrasada — sem saber. Vacina não é assunto só de criança; algumas doses são justamente da vida adulta.",
    },
    { tipo: "h2", texto: "As 5 que mais ficam para trás" },
    {
      tipo: "lista",
      itens: [
        "Dupla adulto (difteria e tétano) — reforço a cada 10 anos, a vida inteira. É a campeã de atraso.",
        "Hepatite B — três doses. Muitos adultos nunca completaram o esquema.",
        "Tríplice viral (sarampo, caxumba e rubéola) — adultos que não têm duas doses documentadas precisam atualizar.",
        "Influenza — anual. O vírus muda; a vacina acompanha.",
        "HPV — indicada também para adultos, conforme idade e avaliação médica.",
      ],
    },
    { tipo: "h2", texto: "\"Mas eu nem sei o que já tomei\"" },
    {
      tipo: "p",
      texto:
        "Situação comum: carteirinha perdida na mudança, doses tomadas em cidades diferentes, memória vaga. Sem registro, o médico monta a atualização com segurança — repetir uma dose documentável não faz mal; ficar descoberto, sim.",
    },
    { tipo: "h2", texto: "Como colocar em dia sem virar projeto" },
    {
      tipo: "p",
      texto:
        "Traga a carteirinha (ou o que restou dela) na sua próxima consulta, de qualquer especialidade. A revisão vacinal leva cinco minutos e sai com um plano: o que tomar agora, o que agendar, o que já está em dia. Parte das doses está disponível gratuitamente na rede pública; o restante, orientamos onde encontrar.",
    },
    {
      tipo: "p",
      texto:
        "Vacina de adulto protege duas vezes: você e quem convive com você — filhos pequenos, pais idosos, quem está em tratamento. É prevenção barata, rápida e com décadas de resultado comprovado. Só precisa de uma coisa: lembrar. E lembrar, por aqui, é a nossa especialidade.",
    },
  ],
};
