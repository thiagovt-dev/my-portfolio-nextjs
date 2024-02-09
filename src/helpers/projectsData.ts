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
    title: "React Portfolio Website",
    description: "Project 1 description",
    imgUrl: "/projects/1.png",
    tags: ["All", "Front-end"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Front-endsite",
    description: "Project 2 description",
    imgUrl: "/projects/2.png",
    tags: ["All", "Front-end"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    imgUrl: "/projects/3.png",
    tags: ["All", "Front-end"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    imgUrl: "/projects/4.png",
    tags: ["All", "Back-end"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    imgUrl: "/projects/5.png",
    tags: ["All", "Front-end"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    imgUrl: "/projects/6.png",
    tags: ["All", "Back-end"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
