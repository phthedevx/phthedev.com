interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  preview?: string;
}

export const projects: Project[] = [
  {
    title: "Erank (TCC)",
    description: "Plataforma social para gamers de FPS com perfis, times e torneios.",
    stack: ["Java", "Spring Boot", "React", "PostgreSQL"], // Exemplo base
    github: "https://github.com/ofback/E-rank", // Coloque o link real se tiver
  },

  // Adicione os outros depois
];