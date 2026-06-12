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
  standout?: boolean;
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
    standout: true,
  },
  {
    slug: "modus-ai",
    title: "Modus AI",
    role: "Builder",
    date: "February 2026",
    description:
      "A Top 5 hackathon project, selected from more than 75 teams, that gives university students citation-backed answers from their own course materials.",
    overview:
      "Modus AI ingests lecture transcripts and course resources to answer questions with citations and timestamp links. Retrieval and filtering reduce hallucinations, while separate chat and search experiences support different learning goals.",
    highlights: [
      "Placed Top 5 in a hackathon with more than 75 competing teams",
      "Delivers citation-backed answers with timestamp linking",
      "Uses retrieval and filtering to reduce unsupported responses",
      "Explores chat and search interaction models through user experiments",
    ],
    technologies: ["LLMs", "RAG", "Retrieval systems", "Product design"],
    videoUrl: "/videos/modus-ai-demo.mp4",
    videoPoster: "/images/modus-ai-poster.jpg",
    featured: true,
    standout: true,
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
    standout: true,
  },
  {
    slug: "pacos-puppy-problem",
    title: "Paco's Puppy Problem",
    role: "Machine Learning Engineer",
    date: "April 2026",
    description:
      "An image-classification study comparing CNNs, transfer learning, and a Vision Transformer across roughly 8,800 images.",
    overview:
      "This project focused on building and evaluating image-classification pipelines in PyTorch. I implemented a CNN and a Vision Transformer, explored transfer learning with different frozen-layer configurations, and designed a deeper regularized CNN using batch normalization, dropout, and weight decay. The experiments showed that transfer learning improved held-out generalization and that the CNN outperformed the ViT on this limited-data task.",
    highlights: [
      "Built PyTorch pipelines for approximately 8,800 images",
      "Implemented and compared CNN, transfer-learning, and Vision Transformer approaches",
      "Used AUROC, early stopping, confusion matrices, and controlled fine-tuning experiments",
    ],
    technologies: ["Python", "PyTorch", "CNNs", "Vision Transformers"],
    standout: true,
  },
  {
    slug: "insta485",
    title: "Insta485",
    role: "Full-Stack Engineer",
    date: "University of Michigan Course Project",
    description:
      "An Instagram-style social platform built from static pages into a server-rendered application and finally an interactive React experience.",
    overview:
      "Insta485 was developed in three stages that mirror the evolution of a production web application. I began with responsive HTML templates, then built a Flask and SQLite server with authentication and relational social data, and finally added a REST API and React client for dynamic feed interactions.",
    highlights: [
      "Built account creation, login, profile editing, and password management",
      "Modeled users, posts, follows, comments, and likes in SQLite with relational constraints",
      "Added a React feed with REST endpoints, live likes and comments, and infinite scrolling",
      "Handled uploads, authorization checks, and cascading account and post deletion",
    ],
    technologies: ["React", "Flask", "SQLite", "REST APIs", "Jinja"],
  },
  {
    slug: "distributed-mapreduce",
    title: "Distributed MapReduce",
    role: "Distributed Systems Engineer",
    date: "University of Michigan Course Project",
    description:
      "A fault-tolerant MapReduce framework that coordinates parallel map and reduce jobs across networked worker processes.",
    overview:
      "This Python framework implements the core mechanics behind distributed batch processing. A central manager schedules jobs and tracks worker state, while workers execute mapper and reducer programs, partition intermediate output, externally sort data, and merge partitions for reduction.",
    highlights: [
      "Implemented TCP messaging for commands and UDP heartbeats for worker health",
      "Scheduled map and reduce tasks across registered worker processes",
      "Detected failed workers and reassigned unfinished work",
      "Managed partitioned intermediate files, sorting, merging, and final outputs",
    ],
    technologies: ["Python", "TCP/UDP", "Threads", "Distributed systems", "Fault tolerance"],
  },
  {
    slug: "scalable-search-engine",
    title: "Scalable Search Engine",
    role: "Search Systems Engineer",
    date: "University of Michigan Course Project",
    description:
      "A multi-service search engine with a MapReduce indexing pipeline, segmented inverted indexes, and relevance-ranked results.",
    overview:
      "This project builds a complete search stack from crawled documents to a browser-facing results page. A multi-stage MapReduce pipeline cleans and indexes document text, computes document statistics, and produces partitioned inverted indexes. Flask index servers score queries in parallel, while the search service merges those results with document metadata.",
    highlights: [
      "Generated segmented inverted indexes through a multi-stage MapReduce pipeline",
      "Normalized queries with token cleanup, stop-word removal, and stemming",
      "Combined TF-IDF relevance with PageRank signals for result scoring",
      "Queried multiple index-server segments concurrently and merged ranked results",
    ],
    technologies: ["Python", "Flask", "MapReduce", "Inverted indexes", "TF-IDF", "PageRank"],
  },
  {
    slug: "lc2k-cache-simulator",
    title: "LC-2K Cache Simulator",
    role: "Computer Architecture Engineer",
    date: "University of Michigan Course Project",
    description:
      "A configurable set-associative cache integrated with an LC-2K processor simulator to model real memory behavior.",
    overview:
      "The simulator places a configurable cache between an LC-2K processor and main memory. It decodes addresses into tags, set indexes, and block offsets, then models cache hits, misses, block fills, and evictions across different block sizes and associativity settings.",
    highlights: [
      "Supported configurable block size, set count, and associativity",
      "Implemented LRU replacement within each cache set",
      "Used write-back and write-allocate behavior with dirty-block tracking",
      "Logged processor, cache, and memory transfers while tracking memory accesses",
    ],
    technologies: ["C", "Computer architecture", "Caching", "LRU", "LC-2K"],
  },
  {
    slug: "sillyql-database-engine",
    title: "SillyQL Database Engine",
    role: "Systems Programmer",
    date: "University of Michigan Course Project",
    description:
      "An in-memory relational database engine with typed tables, conditional queries, indexing, deletion, and joins.",
    overview:
      "SillyQL parses a SQL-inspired command language and manages multiple typed in-memory tables. The engine supports table creation and removal, row insertion, conditional selection and deletion, plus joins across tables while maintaining optional indexes for faster lookup.",
    highlights: [
      "Built a command parser for create, insert, print, delete, join, index, and remove operations",
      "Represented heterogeneous table values through a type-safe TableEntry abstraction",
      "Implemented hash and ordered indexes for accelerated conditional queries",
      "Used temporary hash indexing to perform efficient equijoins between tables",
    ],
    technologies: ["C++", "Hash tables", "Binary search trees", "Relational databases", "Query processing"],
  },
  {
    slug: "mine-escape",
    title: "Mine Escape",
    role: "Algorithms Engineer",
    date: "University of Michigan Course Project",
    description:
      "A priority-driven pathfinding simulation that clears the least difficult route out of a mine while handling TNT chain reactions.",
    overview:
      "Mine Escape models a miner navigating a grid of rubble and TNT. A priority queue selects the easiest reachable tile to clear, while TNT explosions dynamically clear neighboring tiles and can trigger additional explosions. Optional reporting tracks running medians and detailed clearing statistics.",
    highlights: [
      "Used priority queues to choose the lowest-cost reachable rubble tiles",
      "Modeled TNT chain reactions and dynamically updated the exploration frontier",
      "Maintained a streaming median of rubble-clearing difficulty",
      "Reported first, last, easiest, and hardest cleared tiles without changing the core search",
    ],
    technologies: ["C++", "Priority queues", "Graph search", "Heaps", "Streaming median"],
  },
  {
    slug: "letterman-word-morph",
    title: "Letterman Word Morph",
    role: "Algorithms Engineer",
    date: "University of Michigan Course Project",
    description:
      "A configurable word-transformation solver that finds paths between dictionary words using breadth-first or depth-first search.",
    overview:
      "Letterman treats words as nodes in an implicit graph and valid single-step edits as edges. The solver reads simple and compressed dictionaries, discovers reachable transformations, and reconstructs a path between the requested start and end words.",
    highlights: [
      "Supported character changes, adjacent swaps, insertions, and deletions",
      "Implemented both queue-based breadth-first and stack-based depth-first traversal",
      "Parsed compressed dictionary syntax into searchable word variants",
      "Reconstructed solutions as complete word paths or concise edit operations",
    ],
    technologies: ["C++", "BFS", "DFS", "Graph traversal", "Dictionary parsing"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
