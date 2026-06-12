export type Project = {
  slug: string;
  title: string;
  role: string;
  date: string;
  description: string;
  overview: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  liveCta?: string;
  videoUrl?: string;
  videoPoster?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "cartwise",
    title: "CartWise",
    role: "Founder",
    date: "January 2026 - Present",
    description:
      "A full-stack system that transforms recipes into one-click shopping carts by mapping structured ingredients to retailer products.",
    overview:
      "CartWise closes the gap between finding a recipe and buying what it requires. The system structures recipe ingredients, maps them to retailer SKUs, and integrates with Walmart APIs to create an automated shopping cart.",
    highlights: [
      "Transforms recipes into structured, shoppable ingredient lists",
      "Maps recipe ingredients to matching retailer SKUs",
      "Integrates with Walmart APIs for automated cart creation",
    ],
    technologies: ["Full-stack", "Walmart APIs", "Product matching", "Data modeling"],
    liveUrl: "https://trycartwise.com/home/",
    liveCta: "Check the live product out!",
    featured: true,
  },
  {
    slug: "modus-ai",
    title: "Modus AI",
    role: "Builder",
    date: "February 2026",
    description:
      "A grounded, LLM-based tutoring system that gives university students citation-backed answers from their own course materials.",
    overview:
      "Modus AI ingests lecture transcripts and course resources to answer questions with citations and timestamp links. Retrieval and filtering reduce hallucinations, while separate chat and search experiences support different learning goals.",
    highlights: [
      "Delivers citation-backed answers with timestamp linking",
      "Uses retrieval and filtering to reduce unsupported responses",
      "Explores chat and search interaction models through user experiments",
    ],
    technologies: ["LLMs", "RAG", "Retrieval systems", "Product design"],
    videoUrl: "/videos/modus-ai-demo.mp4",
    videoPoster: "/images/modus-ai-poster.jpg",
    featured: true,
  },
  {
    slug: "nomad",
    title: "NOMAD",
    role: "Co-Founder",
    date: "June 2025 - Present",
    description:
      "A social travel app focused on making travel discovery and planning simpler and more collaborative.",
    overview:
      "NOMAD combines travel discovery with social interaction. As a co-founder, I have worked across the React Native application and Django backend to establish the product's core account and community features.",
    highlights: [
      "Implemented user authentication and profile experiences",
      "Built posts and social interaction features",
      "Developed against a Django backend backed by PostgreSQL",
    ],
    technologies: ["React Native", "Django", "PostgreSQL", "Authentication"],
  },
  {
    slug: "pacos-puppy-problem",
    title: "Paco's Puppy Problem",
    role: "Machine Learning Engineer",
    date: "April 2026",
    description:
      "A large-scale image classification project comparing deep learning approaches across roughly 8,800 images.",
    overview:
      "This project focused on building and optimizing image-classification pipelines in PyTorch. I compared CNNs, transfer learning, and Vision Transformers, then improved results through architecture decisions and systematic hyperparameter tuning.",
    highlights: [
      "Built PyTorch pipelines for approximately 8,800 images",
      "Compared CNN, transfer-learning, and Vision Transformer approaches",
      "Evaluated and tuned model performance using AUROC",
    ],
    technologies: ["Python", "PyTorch", "CNNs", "Vision Transformers"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

