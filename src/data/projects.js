export const projects = [
  {
    id: 'chatbot-n8n',
    featured: true,
    kicker: 'Primeiro projeto profissional com n8n',
    title: 'Chatbot Inteligente de Atendimento por WhatsApp',
    subtitle: 'Meu primeiro projeto profissional desenvolvido utilizando n8n.',
    description: [
      'Desenvolvimento de um fluxo automatizado de atendimento conectado ao WhatsApp, utilizando n8n para recebimento, processamento e direcionamento de mensagens.',
      'Também utilizo Codex e Antigravity durante o desenvolvimento em processos de AI-Assisted Software Development.',
    ],
    highlights: [
      'Recebimento de mensagens através de Webhooks',
      'Normalização e tratamento das informações recebidas',
      'Diferentes regras e fluxos de atendimento',
      'Validações',
      'Integração com APIs REST',
      'Consultas a informações externas',
      'Integração com modelo de Inteligência Artificial',
      'Gerenciamento de contexto da conversa',
      'Memória de conversação',
      'Tratamento de erros',
      'Encaminhamento para atendimento humano',
      'Testes e debugging do fluxo',
    ],
    technologies: [
      'n8n',
      'JavaScript',
      'APIs REST',
      'Webhooks',
      'IA Generativa',
      'Codex',
      'Antigravity',
    ],
    notes: [
      "Os nodes identificados como 'Deactivated' representam uma implementação planejada para permitir que o chatbot também utilize figurinhas durante as conversas.",
      'Algumas informações, endpoints e dados internos foram ocultados por questões de confidencialidade.',
    ],
    gallery: [
      {
        title: 'Entrada, triagem e validações',
        placeholder: 'Imagem do workflow será adicionada aqui',
        src: '/images/n8n/entrada-triagem-validacoes.png',
        alt: 'Workflow n8n com entrada por webhook, normalização, triagem e validações de cadastro.',
      },
      {
        title: 'Reações, saudações e direcionamento',
        placeholder: 'Imagem do workflow será adicionada aqui',
        src: '/images/n8n/reacoes-saudacoes-direcionamento.png',
        alt: 'Workflow n8n com lógica de reação, saudação, direcionamento e nodes desativados para stickers.',
      },
      {
        title: 'Contexto, Inteligência Artificial e memória',
        placeholder: 'Imagem do workflow será adicionada aqui',
        src: '/images/n8n/contexto-ia-memoria.png',
        alt: 'Workflow n8n com montagem de contexto, agente de inteligência artificial, GPT e memória MongoDB.',
      },
    ],
  },
  {
    id: 'redesign-fourchan',
    title: 'Redesign Conceitual do 4chan',
    description: [
      'Projeto pessoal criado para explorar desenvolvimento front-end e design de interface, reinterpretando visualmente o famoso imageboard 4chan com uma identidade própria inspirada em fóruns antigos e na estética da old web.',
    ],
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
    title: 'Calculadora de Matrizes',
    description: [
      'Projeto acadêmico desenvolvido durante meus estudos de Sistemas de Informação para trabalhar conceitos relacionados a matrizes, lógica matemática e construção de interfaces web.',
      'Apresentado como um projeto de aprendizado, utilizando HTML5, CSS3 e JavaScript para criar uma central de cálculos com ferramentas de matrizes e tabela verdade.',
    ],
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
