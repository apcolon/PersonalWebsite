import Link from "next/link";
import { ViewTransition } from "react";
import { Hold } from "@/components/hold";
import type { Project } from "@/data/projects";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <li className="project-row">
      <Link href={`/projects/${project.slug}`}>
        <Hold tape={project.tape} shape={index} />
        <span className="row-main">
          <span className="row-line">
            <ViewTransition name={`title-${project.slug}`}>
              <span className="row-title">{project.title}</span>
            </ViewTransition>
            <span className="row-leader" aria-hidden="true" />
            <span className="row-meta">
              {project.category} · {project.year}
            </span>
          </span>
          <span className="row-description">{project.description}</span>
        </span>
      </Link>
    </li>
  );
}
