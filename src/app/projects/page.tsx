import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects | Antonio Colon" };

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C++", "C", "TypeScript", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Web Development",
    skills: ["React", "React Native", "Next.js", "Flask", "Django", "Jinja", "REST APIs", "Authentication"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["PyTorch", "LLMs", "RAG", "CNNs", "Vision Transformers", "Transfer learning", "Retrieval systems"],
  },
  {
    title: "Data & Infrastructure",
    skills: ["PostgreSQL", "SQLite", "Docker", "MapReduce", "Inverted indexes", "TF-IDF", "PageRank", "Data modeling"],
  },
  {
    title: "Security & Networking",
    skills: ["TCP", "UDP", "Wireshark", "Network sockets", "Authentication", "Fault tolerance"],
  },
  {
    title: "Systems & Algorithms",
    skills: ["Distributed systems", "Threads", "Computer architecture", "Caching", "LRU", "Hash tables", "Binary search trees", "Priority queues", "BFS", "DFS", "Graph traversal", "Query processing"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="page shell">
      <div className="page-intro">
        <p className="eyebrow">Projects</p>
        <h1>Selected things I&apos;ve built.</h1>
        <p>
          A growing collection of products, experiments, and technical
          problems I&apos;ve enjoyed working through.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <section className="skills-section" aria-labelledby="skills-heading">
        <div className="skills-heading">
          <p className="eyebrow">Across my work</p>
          <h2 id="skills-heading">Skills learned</h2>
          <p>
            Technologies, algorithms, and engineering concepts I&apos;ve practiced
            while building these projects.
          </p>
        </div>
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <section className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skills-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </section>
  );
}
