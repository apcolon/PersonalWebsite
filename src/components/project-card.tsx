import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <div className="project-card-label">
          <p className="eyebrow">{project.role}</p>
          {project.standout && (
            <span className="standout-star" title="A standout project I especially enjoyed" aria-label="Standout project">
              ★
            </span>
          )}
        </div>
        <Link
          className="project-arrow"
          href={`/projects/${project.slug}`}
          aria-label={`Open ${project.title} case study`}
        >
          ↗
        </Link>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tag-list" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <div className="card-links">
        <Link href={`/projects/${project.slug}`}>View project</Link>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            {project.liveCta ?? "Live site"} ↗
          </a>
        )}
      </div>
    </article>
  );
}
