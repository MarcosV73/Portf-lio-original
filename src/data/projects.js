import {
  chatbotWorkflowEdges,
  chatbotWorkflowNodes,
} from './chatbotWorkflow.js'
import {
  makeJobCaptureWorkflow,
  makeStatusWorkflow,
} from './makeWorkflows.js'

const n8nChatbotWorkflow = {
  anchorId: 'workflow',
  variant: 'n8n',
  kicker: 'Workflow interativo do n8n',
  title: 'Arquitetura sanitizada do fluxo de atendimento',
  hint: 'Navegue pelo canvas, use zoom e clique nos nodes para entender a função de cada etapa.',
  initialNodeId: 'node-05',
  initialViewport: { x: 1110, y: 82, zoom: 0.95 },
  nodes: chatbotWorkflowNodes,
  edges: chatbotWorkflowEdges,
}

export const projects = [
  {
    id: 'chatbot-n8n',
    slug: 'chatbot-n8n',
    featured: true,
    kicker: 'Primeiro projeto profissional com n8n',
    title: 'Chatbot Inteligente de Atendimento por WhatsApp',
    subtitle: 'Automação de atendimento para uma franquia de restaurantes.',
    description: [
      'Desenvolvi um bot de atendimento por mensagens diretas no WhatsApp, pensado para respostas rápidas e automação de parte do atendimento de uma franquia de restaurantes.',
      'A apresentação abaixo mostra apenas uma arquitetura sanitizada, com foco no funcionamento geral do produto e nas integrações utilizadas.',
    ],
    objective:
      'Reduzir atrito no atendimento inicial, organizar informações recebidas e encaminhar conversas para automação ou supervisão humana quando necessário.',
    architectureTitle: 'Principais elementos',
    architecture: [
      {
        title: 'WhatsApp + Webhooks',
        description: 'Entrada das mensagens e eventos que iniciam o fluxo.',
        icon: 'WhatsApp',
      },
      {
        title: 'n8n + Evolution API',
        description:
          'Orquestração do fluxo e integração do WhatsApp via Evolution API, com comunicação entre serviços através de APIs REST.',
        icons: ['n8n', 'Evolution API'],
      },
      {
        title: 'Data Table + MongoDB',
        description:
          'Dados operacionais estruturados, contexto e memória quando aplicável.',
        icon: 'MongoDB',
      },
      {
        title: 'Chatwoot + IA',
        description: 'Supervisão humana, acompanhamento e inteligência no atendimento.',
        icon: 'Chatwoot',
      },
    ],
    highlights: [
      'Atendimento por mensagens diretas via WhatsApp',
      'Automação construída no n8n',
      'Respostas rápidas e direcionamento de mensagens',
      'Memória de conversa',
      'Data Table do n8n para dados operacionais',
      'MongoDB para contexto persistente quando aplicável',
      'Integrações via APIs REST e HTTP Requests',
      'Chatwoot para supervisão e transição humana',
      'Normalização das informações recebidas',
    ],
    technologies: [
      'n8n',
      'Evolution API',
      'JavaScript',
      'APIs REST',
      'Webhooks',
      'Data Table',
      'MongoDB',
      'Chatwoot',
      'IA Generativa',
    ],
    notes: [
      'Esta é uma representação sanitizada da arquitetura real do projeto. Credenciais, endpoints, identificadores, dados de clientes e regras internas foram omitidos por segurança e confidencialidade.',
    ],
    workflows: [n8nChatbotWorkflow],
  },
  {
    id: 'automacao-vagas-make',
    slug: 'vagas-make',
    kicker: 'Projeto pessoal de automação',
    title: 'Automação Inteligente de Vagas com Make',
    subtitle: 'Bot pessoal para filtrar oportunidades e acompanhar candidaturas.',
    description: [
      'Criei uma automação no Make para facilitar minha busca por vagas de emprego, estágio, jovem aprendiz e oportunidades compatíveis com meu perfil profissional.',
      'O fluxo reduz o ruído dos e-mails automáticos de sites de vagas, organiza informações úteis e envia para o Telegram apenas oportunidades mais relevantes.',
    ],
    objective:
      'Organizar e priorizar oportunidades com base nos critérios que defini para minha busca profissional, sem precisar abrir dezenas de e-mails pouco relevantes.',
    architectureTitle: 'Principais elementos',
    architecture: [
      {
        title: 'Gmail',
        description: 'Acompanha e-mails da label VAGAS_BOT relacionados a oportunidades profissionais.',
        icon: 'Gmail',
      },
      {
        title: 'Text Parser',
        description:
          'Extrai dados quando identificados no anúncio ou e-mail, como título, empresa, link e modalidade.',
        icon: 'Text Parser',
      },
      {
        title: 'Google Sheets',
        description:
          'Registra vagas, reduz duplicidades e mantém o controle do status das candidaturas.',
        icon: 'Google Sheets',
      },
      {
        title: 'Telegram Bot',
        description: 'Entrega as oportunidades filtradas e confirma atualizações de status.',
        icon: 'Telegram Bot',
      },
    ],
    highlights: [
      'Leitura de e-mails relacionados a vagas',
      'Filtros personalizados de compatibilidade',
      'Identificação de links de candidatura quando disponível',
      'Registro de salário, bolsa, horário ou jornada quando informado',
      'Classificação de estágio, jovem aprendiz e área quando identificada',
      'Verificação de duplicidade antes do registro',
      'Envio das oportunidades filtradas para o Telegram',
      'Planilha para acompanhar vagas e status de candidatura',
      'Atualização de status pelo próprio Telegram',
    ],
    technologies: [
      'Make',
      'Gmail',
      'Telegram Bot',
      'Google Sheets',
      'Text Parser',
      'Filtros/Regras',
    ],
    notes: [
      'Os workflows abaixo são modelos sanitizados. Não há tokens, connection IDs, URLs privadas, e-mails, IDs de planilha, chat ID do Telegram, credenciais, conteúdo real de mensagens ou dados de candidaturas no bundle público.',
      'Os comandos exatos do bot não foram exibidos porque os metadados públicos acessíveis não mostraram essa configuração de forma verificável.',
    ],
    workflows: [makeJobCaptureWorkflow, makeStatusWorkflow],
  },
  {
    id: 'aplicacao-react-corporativa',
    slug: 'gestao-financeira',
    kicker: 'Experiência profissional em estágio',
    title: 'Criação de Landing Pages de Gestão Financeira',
    subtitle: 'Interfaces relacionadas à gestão financeira em ambiente profissional.',
    description: [
      'Atuação na criação e manutenção de Landing Pages e interfaces relacionadas à gestão financeira, incluindo telas de DRE Gestor e ajustes de interface.',
      'Trabalho envolvendo criação de alguns gráficos, correção de bugs, componentes React, consumo de APIs com Axios, versionamento com Git e gerenciamento com Yarn.',
    ],
    objective:
      'Apoiar a evolução de interfaces financeiras reais com entregas front-end, correções incrementais e integração com dados consumidos por APIs.',
    highlights: [
      'Criação de Landing Pages',
      'Interfaces de gestão financeira',
      'Telas de DRE Gestor',
      'Criação de gráficos',
      'Correção de bugs',
      'Componentes React',
      'Consumo de APIs com Axios',
      'Versionamento com Git',
    ],
    technologies: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'Axios',
      'Git',
      'Yarn',
    ],
    notes: [
      'Experiência apresentada de forma geral para preservar informações internas, regras de negócio e dados operacionais.',
    ],
    demo: {
      title: 'Resumo sanitizado da entrega',
      items: [
        {
          label: 'Interface',
          title: 'Landing pages',
          description: 'Construção e ajustes de telas com foco em clareza visual e usabilidade.',
        },
        {
          label: 'Dados',
          title: 'APIs e gráficos',
          description: 'Consumo de dados com Axios e apoio na exibição de informações financeiras.',
        },
        {
          label: 'Manutenção',
          title: 'Bugs e versionamento',
          description: 'Correções incrementais com fluxo de trabalho usando Git e Yarn.',
        },
      ],
    },
  },
  {
    id: 'redesign-fourchan',
    slug: 'redesign-4chan',
    kicker: 'Projeto pessoal de interface',
    title: 'Redesign Conceitual do 4chan',
    description: [
      'Projeto pessoal criado para explorar desenvolvimento front-end e design de interface, reinterpretando visualmente o famoso imageboard 4chan com uma identidade própria inspirada em fóruns antigos e na estética da old web.',
    ],
    objective:
      'Praticar hierarquia visual, organização de conteúdo e consistência de componentes em uma releitura independente de uma comunidade conhecida.',
    highlights: [
      'Nova Home',
      'Página de Boards',
      'Catálogo de Threads',
      'Página de Perfil',
      'Nova hierarquia visual',
      'Identidade visual própria',
      'Padronização de cards',
      'Botões, tags e tipografia',
      'Organização das informações',
    ],
    technologies: ['HTML5', 'CSS3'],
    notes: [
      'Redesign conceitual independente, sem vínculo oficial com o 4chan.',
    ],
    links: [
      {
        label: 'Ver projeto',
        href: 'https://4-chan-redesign.vercel.app',
      },
      {
        label: 'Ver código no GitHub',
        href: 'https://github.com/MarcosV73',
        variant: 'ghost',
      },
    ],
    gallery: [
      {
        title: 'Home',
        placeholder: 'Imagem do projeto será adicionada aqui',
        src: '/images/fourchan/fourchan-home.png',
        alt: 'Tela Home do redesign conceitual do 4chan.',
      },
      {
        title: 'Boards',
        placeholder: 'Imagem do projeto será adicionada aqui',
        src: '/images/fourchan/fourchan-boards.png',
        alt: 'Tela Boards do redesign conceitual do 4chan.',
      },
      {
        title: 'Threads',
        placeholder: 'Imagem do projeto será adicionada aqui',
        src: '/images/fourchan/fourchan-threads.png',
        alt: 'Tela Threads do redesign conceitual do 4chan.',
      },
      {
        title: 'Perfil',
        placeholder: 'Imagem do projeto será adicionada aqui',
        src: '/images/fourchan/fourchan-profile.png',
        alt: 'Tela Perfil do redesign conceitual do 4chan.',
      },
    ],
  },
  {
    id: 'calculadora-matrizes',
    slug: 'calculadora-matrizes',
    kicker: 'Projeto acadêmico',
    title: 'Calculadora de Matrizes',
    description: [
      'Projeto acadêmico desenvolvido durante meus estudos de Sistemas de Informação para praticar lógica matemática e interfaces web.',
      'A aplicação utiliza HTML5, CSS3 e JavaScript para centralizar cálculos de matrizes e tabela verdade.',
    ],
    objective:
      'Criar uma ferramenta web simples para praticar operações matemáticas, validações de entrada e exibição clara de resultados.',
    highlights: [
      'Interface central com navegação por ferramentas',
      'Definição dinâmica das dimensões das matrizes',
      'Operações básicas entre matrizes',
      'Geração de tabela verdade',
      'Exibição de resultados e validações',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    links: [
      {
        label: 'Ver projeto',
        href: 'https://calculadora-de-matriz-tabela-verdad.vercel.app/',
      },
    ],
    gallery: [
      {
        title: 'Interface principal',
        placeholder: 'Imagem do projeto será adicionada aqui',
        src: '/images/matrix/matrix-interface.png',
        alt: 'Tela inicial da calculadora de matrizes MathLogic.',
      },
      {
        title: 'Operações com matrizes',
        placeholder: 'Imagem do projeto será adicionada aqui',
        src: '/images/matrix/matrix-operacoes.png',
        alt: 'Tela de operações com matrizes da aplicação MathLogic.',
      },
      {
        title: 'Resultado e validações',
        placeholder: 'Imagem do projeto será adicionada aqui',
        src: '/images/matrix/matrix-resultados.png',
        alt: 'Tela de resultado e validações da tabela verdade no MathLogic.',
      },
    ],
  },
]
