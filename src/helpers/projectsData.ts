export type ProjectsData = {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  tags: string[];
  gitUrl: string;
  previewUrl: string;
};

export const projectsData: ProjectsData[] = [
  {
    id: 1,
    title: "Portfólio React ",
    description: "Portfólio de um cliente usando React.js",
    imgUrl: "/projects/1.png",
    tags: ["All", "Front-end"],
    gitUrl: " ",
    previewUrl: "https://andredesign.netlify.app/",
  },
  {
    id: 2,
    title: "Onebitflix",
    description: "Projeto de EAD de cursos da Onebitcode",
    imgUrl: "/projects/2.png",
    tags: ["All", "Front-end"],
    gitUrl: "https://github.com/thiagovt-dev/onebitflix_frontend",
    previewUrl: "https://onebitflix-thiago.vercel.app/",
  },
  {
    id: 3,
    title: "Homepage de noticias ",
    description: "Solução para o desafio do Frontend Mentor",
    imgUrl: "/projects/3.png",
    tags: ["All", "Front-end"],
    gitUrl: "https://github.com/thiagovt-dev/new-homepage-main",
    previewUrl: "https://thiagovt-dev.github.io/new-homepage-main/",
  },
  {
    id: 4,
    title: "Api Onebitflix",
    description: "Api para o projeto Onebitflix com painel administrativo e banco de dados",
    imgUrl: "/projects/4.png",
    tags: ["All", "Back-end"],
    gitUrl: "https://github.com/thiagovt-dev/OnebitFlix_backend",
    previewUrl: "https://api-onebitlfix.onrender.com/admin",
  },
  {
    id: 5,
    title: "Portfólio Next.js ",
    description: "Portfólio para desenvolvedor utilizando Next.js",
    imgUrl: "/projects/5.png",
    tags: ["All", "Front-end"],
    gitUrl: "https://github.com/thiagovt-dev/my-portfolio-nextjs",
    previewUrl: "thiagovasconcelos.dev.br/",
  },
  {
    id: 6,
    title: "Gym Junkies ",
    description: "Contribuição para projeto open source construindo uma TDEE calculator",
    imgUrl: "/projects/6.png",
    tags: ["All", "Front-end"],
    gitUrl: "https://github.com/thiagovt-dev/Gym-Junkies",
    previewUrl: "https://gymjunkies.netlify.app/",
  },
];
