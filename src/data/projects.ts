export type Project = {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "CartWise",
    description:
      "A full-stack shopping assistant that turns recipes into one-click grocery carts by parsing ingredients and matching them with store products.",
    highlights: [
      "Designed the recipe-to-product matching workflow",
      "Built a practical full-stack shopping experience",
      "Focused on reducing the friction between meal planning and checkout",
    ],
    technologies: ["TypeScript", "React", "Node.js", "APIs"],
    githubUrl: "https://github.com/your-username/cartwise",
    featured: true,
  },
  {
    title: "Modus AI",
    description:
      "An AI-focused application built to turn complex workflows into a simpler, more useful experience.",
    highlights: [
      "Integrated modern AI capabilities into a user-facing product",
      "Iterated on prompts and product behavior",
      "Built with an emphasis on clarity and usability",
    ],
    technologies: ["Next.js", "TypeScript", "AI", "APIs"],
    githubUrl: "https://github.com/your-username/modus-ai",
    featured: true,
  },
];

