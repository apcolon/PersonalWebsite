export type Tape = "red" | "pink" | "blue" | "yellow" | "green" | "purple" | "orange";

export type Project = {
  slug: string;
  kind: "product" | "study" | "coursework";
  status: "projecting" | "sent";
  tape: Tape;
  year: string;
  title: string;
  role?: string;
  category: string;
  date: string;
  description: string;
  overview: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  liveCta?: string;
  videoUrl?: string;
  videoPoster?: string;
  icon?: string;
  pipeline?: { step: string; detail: string }[];
  phases?: { name: string; summary: string; state: "done" | "active" | "planned" }[];
  notes?: { title: string; body: string }[];
  images?: { src: string; alt: string; width: number; height: number }[];
};

export const projects: Project[] = [
  {
    slug: "rocky",
    kind: "product",
    status: "projecting",
    tape: "red",
    year: "2026",
    title: "Rocky",
    role: "Builder",
    category: "iOS / Computer Vision",
    date: "September 2026 - Present",
    description:
      "An iPhone app that watches you boulder and tells you how to climb better. It finds the holds on a wall, groups them by route, and tracks your body through a recorded climb.",
    overview:
      "Rocky is a climbing coach I'm building for my own sessions, and a way to learn computer vision, backend design, and iOS on one real problem. Today it does two things. Photograph a wall and it boxes every hold and groups them by route colour, with a tap to fix anything it gets wrong. Record a climb and it returns the clip with a skeleton tracked over your body. The part I'm working on now joins the two: working out which hold each hand and foot is on, so a clip becomes a sequence of moves that technique feedback can be built from.",
    highlights: [
      "Fine-tuned YOLOv8n on about 1,700 labelled images of holds and volumes, reaching 0.815 mAP50",
      "Serves the model through ONNX Runtime with hand-written preprocessing and non-max suppression, so the API never loads PyTorch",
      "Groups holds into routes by clustering hue and saturation, with the number of routes chosen by silhouette score",
      "Uploads video straight from the phone to Cloudflare R2 with presigned URLs, then tracks pose in a Redis-backed worker",
      "My first SwiftUI app: camera capture, a hold overlay with tap-to-correct, and skeleton playback",
    ],
    technologies: ["Swift", "SwiftUI", "FastAPI", "YOLOv8", "ONNX Runtime", "MediaPipe", "Redis + RQ", "Cloudflare R2"],
    icon: "/images/rocky/icon.png",
    images: [
      {
        src: "/images/rocky/shot-2.png",
        alt: "Rocky showing a gym wall with 94 detected holds boxed and grouped into 6 route colours",
        width: 1206,
        height: 2622,
      },
      {
        src: "/images/rocky/shot-3.png",
        alt: "Rocky with the pink route selected: its 17 holds highlighted and ready to correct by tapping",
        width: 1206,
        height: 2622,
      },
      {
        src: "/images/rocky/shot-1.png",
        alt: "Rocky's Analyze screen, with buttons to photograph a wall or choose a photo",
        width: 1206,
        height: 2622,
      },
    ],
    pipeline: [
      { step: "iPhone app", detail: "Takes the wall photo and records the climb." },
      { step: "FastAPI", detail: "Creates the climb and hands back a short-lived upload URL." },
      { step: "Cloudflare R2", detail: "The phone uploads the video directly, so the API never touches the bytes." },
      { step: "Redis queue", detail: "The API enqueues the analysis and answers right away." },
      { step: "Worker", detail: "Runs hold detection and pose tracking on the clip." },
      { step: "Back on the phone", detail: "The app polls for the result and draws holds and skeleton over the footage." },
    ],
    phases: [
      { name: "Plumbing", summary: "Record on the phone, upload to storage, get a response from a deployed server.", state: "done" },
      { name: "Hold detection", summary: "Photograph a wall and see every hold boxed and grouped by route colour.", state: "done" },
      { name: "Pose tracking", summary: "Upload a clip and play it back with a skeleton over the climber.", state: "done" },
      { name: "Move segmentation", summary: "Line up holds with joint positions to turn a clip into a list of moves.", state: "active" },
      { name: "Technique feedback", summary: "Hip distance from the wall, hesitation before a move, foot precision, as notes timed to the clip.", state: "planned" },
      { name: "Accounts and history", summary: "Sign in, keep every climb, and see how technique changes over time.", state: "planned" },
      { name: "Grading", summary: "Relative difficulty first: harder or easier than your last few climbs.", state: "planned" },
    ],
    notes: [
      {
        title: "Colour is not RGB",
        body: "The first version grouped holds by raw RGB and produced muddy browns and greys, because gym lighting changes how bright each hold looks far more than it changes its hue. Dropping brightness and clustering on hue and saturation alone fixed it: on my test wall it picked six groups, matching the six routes actually set.",
      },
      {
        title: "A detector on a free tier",
        body: "The server has roughly 512 MB of memory and PyTorch alone uses more than that. I exported the trained model to ONNX and wrote letterboxing, box decoding, and non-max suppression by hand, so the deployed API runs on ONNX Runtime and NumPy with no PyTorch installed.",
      },
    ],
  },
  {
    slug: "cartwise",
    kind: "product",
    status: "sent",
    tape: "green",
    year: "2026",
    title: "CartWise",
    role: "Founder",
    category: "Full Stack",
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
  },
  {
    slug: "modus-ai",
    kind: "product",
    status: "sent",
    tape: "purple",
    year: "2026",
    title: "Modus AI",
    role: "Builder",
    category: "AI / Machine Learning",
    date: "February 2026",
    description:
      "A Top 5 hackathon project, selected from more than 75 teams, that gives university students citation-backed answers from their own course materials.",
    overview:
      "Modus AI ingests lecture transcripts and course resources to answer questions with citations and timestamp links. Retrieval and filtering reduce hallucinations, while separate chat and search experiences support different learning goals. We deployed the system using Oracle Cloud infrastructure.",
    highlights: [
      "Placed Top 5 in a hackathon with more than 75 competing teams",
      "Delivers citation-backed answers with timestamp linking",
      "Uses retrieval and filtering to reduce unsupported responses",
      "Explores chat and search interaction models through user experiments",
    ],
    technologies: ["LLMs", "RAG", "Retrieval systems", "Oracle Cloud", "Product design"],
    videoUrl: "/videos/modus-ai-demo.mp4",
    videoPoster: "/images/modus-ai-poster.jpg",
  },
  {
    slug: "nomad",
    kind: "product",
    status: "projecting",
    tape: "blue",
    year: "2025",
    title: "NOMAD",
    role: "Co-Founder",
    category: "Mobile App",
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
    slug: "learn-plus-plus",
    kind: "product",
    status: "sent",
    tape: "yellow",
    year: "2026",
    title: "Learn++",
    role: "Builder",
    category: "Full Stack",
    date: "June 2026",
    description:
      "A study tool that turns any CS book into a quiz bank you grind against to retain it, with questions generated and grounded in the book's own chapter text.",
    overview:
      "Learn++ closes the gap between reading a CS book and actually retaining it. A Go and SQLite backend extracts a chosen chapter's text and prompts Claude to author a question bank grounded in that material, then serves cards through a React frontend. A mastery engine weights each card so weak or unseen questions resurface more often, while a points system rewards first-try and streak performance. The first target book is A Tour of C++.",
    highlights: [
      "Generates chapter-grounded question banks with claude-sonnet-4-6 from extracted book text",
      "Built a mastery engine that reweights cards based on right and wrong answers",
      "Supports multiple choice, true/false, self-graded recall, and typed free-response questions",
      "Tracks session and lifetime stats with a streak- and difficulty-scaled points system",
    ],
    technologies: ["Go", "SQLite", "React", "Vite", "Claude API"],
  },
  {
    slug: "pacos-puppy-problem",
    kind: "study",
    status: "sent",
    tape: "pink",
    year: "2026",
    title: "Paco's Puppy Problem",
    category: "Machine Learning",
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
  },
  {
    slug: "insta485",
    kind: "coursework",
    status: "sent",
    tape: "orange",
    year: "U-M",
    title: "Insta485",
    category: "Full Stack",
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
    kind: "coursework",
    status: "sent",
    tape: "blue",
    year: "U-M",
    title: "Distributed MapReduce",
    category: "Distributed Systems",
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
    kind: "coursework",
    status: "sent",
    tape: "green",
    year: "U-M",
    title: "Scalable Search Engine",
    category: "Search Systems",
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
    kind: "coursework",
    status: "sent",
    tape: "purple",
    year: "U-M",
    title: "LC-2K Cache Simulator",
    category: "Computer Architecture",
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
    kind: "coursework",
    status: "sent",
    tape: "yellow",
    year: "U-M",
    title: "SillyQL Database Engine",
    category: "Database Systems",
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
    kind: "coursework",
    status: "sent",
    tape: "pink",
    year: "U-M",
    title: "Mine Escape",
    category: "Algorithms",
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
    kind: "coursework",
    status: "sent",
    tape: "orange",
    year: "U-M",
    title: "Letterman Word Morph",
    category: "Algorithms",
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
