// src/data/about.tsx

export const aboutData = {
  name: "Pedro Henrique",
  title: "Desenvolvedor de Software",
  avatarUrl: "/eu.jpeg",

  shortBio: `Prazer, me chamo Pedro. Analista de Sistemas Júnior e Desenvolvedor de Software, com formação técnica em Desenvolvimento de Sistemas. Busco construir soluções que façam sentido na prática e entreguem valor real para quem usa e para quem mantém.

Gosto de evoluir na prática, enfrentar desafios e construir coisas que agreguem valor de verdade. Acredito que constância, aprendizado contínuo e responsabilidade com o que se constrói dizem mais do que qualquer título. Vamos trocar ideias, fazer networking e, quem sabe, criar algo juntos!`,

  // ADICIONADO: O objeto social que estava faltando
  social: {
    linkedin: "https://www.linkedin.com/in/phdevx/", // Coloque seu link real aqui
    github: "https://github.com/phthedevx",           // Coloque seu link real aqui
    email: "mailto:contatopedrohenrique.dev@gmail.com",               // Coloque seu email real aqui
  },

  experience: [
    {
      company: "Avanza Telecom",
      role: "Estagiário de Desenvolvimento Low-Code",
      period: "Abr 2025 - Dez 2025",
      description: "Desenvolvimento e manutenção de aplicações ágeis utilizando plataformas Low-Code, focando na automação de processos internos e aumento de produtividade da equipe.",
    },
  ],

  education: [
    {
      institution: "FIAP",
      degree: "Engenharia de Software",
      period: "Jan 2026 - Dez 2029 (Previsão)",
    },
    {
      institution: "Senai",
      degree: "Técnico em Desenvolvimento de Sistemas",
      period: "Jan 2024 - Dez 2025",
    },
  ],

  achievements: [
    {
      title: "Hackathon SESI",
      description: "Participação em desafios de inovação tecnológica, desenvolvendo protótipos funcionais em equipe.",
    },
  ],
};