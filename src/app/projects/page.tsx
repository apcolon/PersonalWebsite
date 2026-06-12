import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects | Antonio Colon" };

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
    </section>
  );
}

