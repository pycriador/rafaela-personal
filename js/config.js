/**
 * SITE PERSONAL RAFAELA — Configuração Central
 * 
 * Centraliza dados comerciais, de contato e preçários.
 * Para atualizar valores, contatos ou mensagens de conversão, edite apenas este arquivo.
 */

const SITE_CONFIG = {
  brand: {
    name: "Rafaela",
    title: "Personal Trainer",
    badge: "PERSONAL TRAINER",
    tagline: "Treino personalizado para uma vida mais forte, saudável e equilibrada."
  },

  // Contatos comerciais (placeholders até fornecimento dos dados reais)
  contact: {
    whatsapp: "5511999999999", // Apenas dígitos com DDI e DDD (ex: 5511999999999)
    whatsappFormatted: "(11) 99999-9999",
    instagram: "@rafaelapersonal",
    instagramUrl: "https://instagram.com",
    email: "contato@rafaelapersonal.com.br",
    location: "Atendimento presencial e consultoria remota"
  },

  // Valores e pacotes comerciais
  pricing: {
    singleClass: {
      price: 120,
      unit: "por hora/aula",
      title: "Aula Avulsa",
      badge: "Flexibilidade",
      description: "Para quem deseja experimentar o acompanhamento personalizado ou contratar aulas pontuais."
    },
    combos: {
      threeTimes: {
        pricePerHour: 100,
        frequency: "3 sessões por semana",
        title: "Combo 3x por semana",
        badge: "Maior frequência",
        description: "Treinamento com maior frequência para quem deseja manter uma rotina consistente."
      },
      twoTimes: {
        pricePerHour: 150,
        frequency: "2 sessões por semana",
        title: "Combo 2x por semana",
        badge: "Equilíbrio",
        description: "Uma frequência equilibrada para encaixar o treinamento na rotina."
      }
    },
    monthly: {
      performance: {
        priceMonth: 1500,
        frequency: "3x por semana",
        title: "Plano Performance",
        badge: "Mais acompanhamento",
        popular: true,
        features: [
          "3 treinos por semana",
          "Acompanhamento personalizado presencial",
          "Planejamento de treinamento sob medida",
          "Acesso ao aplicativo exclusivo da Rafaela",
          "Acompanhamento da evolução de cargas e medidas",
          "Orientação contínua durante o período contratado"
        ]
      },
      equilibrium: {
        priceMonth: 1350,
        frequency: "2x por semana",
        title: "Plano Equilíbrio",
        badge: "Consistência e foco",
        popular: false,
        features: [
          "2 treinos por semana",
          "Acompanhamento personalizado presencial",
          "Planejamento de treinamento sob medida",
          "Acesso ao aplicativo exclusivo da Rafaela",
          "Acompanhamento da evolução de cargas e medidas",
          "Orientação contínua durante o período contratado"
        ]
      }
    }
  },

  // Mensagens pré-formatadas para WhatsApp de acordo com o contexto do clique
  whatsappMessages: {
    default: "Olá Rafaela! Vi seu site e gostaria de saber mais sobre o acompanhamento de Personal Trainer.",
    assessment: "Olá Rafaela! Gostaria de agendar uma avaliação inicial para entender as melhores opções para minha rotina.",
    hero: "Olá Rafaela! Gostaria de conversar sobre como começar meus treinos personalizados com você.",
    singleClass: "Olá Rafaela! Vi seu site e tenho interesse na aula avulsa de Personal Trainer.",
    combo3x: "Olá Rafaela! Vi o combo de 3x por semana e gostaria de saber mais sobre horários e disponibilidade.",
    combo2x: "Olá Rafaela! Vi o combo de 2x por semana e gostaria de saber mais sobre horários e disponibilidade.",
    monthlyPerformance: "Olá Rafaela! Tenho interesse no Plano Performance (3x por semana com aplicativo exclusivo) e gostaria de saber como funciona.",
    monthlyEquilibrium: "Olá Rafaela! Tenho interesse no Plano Equilíbrio (2x por semana com aplicativo exclusivo) e gostaria de saber como funciona.",
    app: "Olá Rafaela! Gostaria de saber mais sobre os planos mensais que incluem o aplicativo exclusivo de acompanhamento.",
    specialPrograms: "Olá Rafaela! Gostaria de entender mais sobre os programas de treinamento adaptados ao meu momento de vida.",
    nutrition: "Olá Rafaela! Vi no site o foco em hábitos saudáveis e gostaria de iniciar meu acompanhamento com você.",
    finalCta: "Olá Rafaela! Estou pronto(a) para começar a treinar e quero encontrar a melhor opção para meus objetivos."
  }
};

// Congelar para prevenir mutações acidentais em runtime
Object.freeze(SITE_CONFIG);
