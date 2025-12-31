// src/data/journey.ts

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
  tags: string[];
}

export const journeyData: JourneyItem[] = [
  {
    year: "2022",
    title: "O Primeiro Contato (Ensino Médio Integrado)",
    description: "Tudo começou no ensino médio integrado ao técnico de TI. Tive meu primeiro contato com programação usando Pascal e Banco de Dados Relacional (SQL). Também vi Java e C com Arduino tudo de forma muito superficial. Eu ainda não tinha ideia de onde estava me metendo, mas o interesse pela área já havia despertado.",
    tags: ["Pascal", "SQL", "Arduino", "Iniciação"],
  },
  {
    year: "Jan 2024",
    title: "Desenvolvimento de Sistemas no SENAI",
    description: "No 3º ano do ensino médio, decidi me aprofundar e iniciei o Técnico em Desenvolvimento de Sistemas no SENAI em Feira de Santana. Foi um período intenso: conciliava trabalho, ensino médio e viajar para outra cidade à noite para o curso. Foi aqui que a 'bolha estourou': aprendi lógica de programação de verdade, linguagens como C, PHP, Java, além de HTML, CSS e Bootstrap.",
    tags: ["SENAI", "Rotina Intensa", "PHP", "Java", "Lógica"],
  },
  {
    year: "Final de 2024",
    title: "TCC do Ensino Médio: Óculos Anti-sono",
    description: "Ainda cursando o SENAI junto com o colégio, desenvolvi meu TCC do ensino médio: um Óculos Anti-sono utilizando Arduino e linguagem C. Esse projeto foi crucial para minha formação, consolidando meu entendimento de hardware e lógica de programação aplicada.",
    tags: ["Arduino", "C", "IoT", "Hardware", "TCC"],
  },
  {
    year: "Início de 2025",
    title: "Aprofundamento com Rocketseat",
    description: "Após terminar o ensino médio, ainda tinha um ano de SENAI pela frente. Decidi não parar e estudei por fora para complementar o curso. Mergulhei nos cursos da Rocketseat focando no ecossistema Java: Microsserviços com Spring Cloud, Java com Spring Boot e Bancos de Dados avançados.",
    tags: ["Spring Boot", "Spring Cloud", "Microsserviços", "Autodidata"],
  },
  {
    year: "Meados de 2025",
    title: "Primeiro Estágio",
    description: "Na reta final do meu último semestre do SENAI, recebi uma proposta de estágio na Avanza Telecom, na minha própria cidade. O desafio? Trabalhar com Low-Code, uma stack totalmente diferente da que eu estudava. Foi uma experiência incrível que me ensinou a ser adaptável e a aprender rápido. Além disso, tive a oportunidade de trabalhar com PostgreSQL, aprofundando meus conhecimentos em bancos de dados relacionais.",
    tags: ["Estágio", "Avanza", "Low-Code", "PostgreSQL"],
  },
  {
    year: "Late 2025",
    title: "Hackathon SESI e o Projeto Erank",
    description: "Para fechar o técnico com chave de ouro, participei do meu primeiro Hackathon (SESI Feira de Santana), conquistando o 3º lugar. Simultaneamente, entreguei meu TCC do SENAI: o 'Erank', uma plataforma social competitiva para gamers com sistema de rankings e torneios.",
    tags: ["Hackathon", "3º Lugar", "Erank", "Gamificação", "TCC"],
  },
  {
    year: "Dez 2025",
    title: "Analista de Sistemas Júnior",
    description: "Após 3 meses de estágio e ao finalizar o curso técnico, fui efetivado na Avanza Telecom como Analista de Sistemas Júnior.",
    tags: ["Efetivação", "Analista Jr", "Carreira"],
  },
  {
    year: "2026",
    title: "Engenharia de Software",
    description: "Com a base técnica sólida, decidi dar o próximo grande passo. Iniciei minha graduação na FIAP em Engenharia de Software, visando aprofundar meus conhecimentos e expandir minhas habilidades na área de desenvolvimento de software.",
    tags: ["FIAP", "Graduação", "Engenharia de Software"],
  },
];