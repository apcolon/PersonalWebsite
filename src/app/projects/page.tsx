import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects | Antonio Colon" };

export default function ProjectsPage() {
  const skills = Array.from(
    new Set(projects.flatMap((project) => project.technologies)),
  ).sort((a, b) => a.localeCompare(b));

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
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
