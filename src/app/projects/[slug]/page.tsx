import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project
    ? { title: `${project.title} | Antonio Colon`, description: project.description }
    : {};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <article className="project-page shell">
      <Link className="back-link" href="/projects">← All projects</Link>
      <header className="project-hero">
        <div>
          <p className="eyebrow">{project.role} · {project.date}</p>
          <h1>{project.title}</h1>
        </div>
        <p>{project.description}</p>
      </header>

      {project.videoUrl && (
        <section className="project-media" aria-label={`${project.title} demo`}>
          <video controls playsInline preload="metadata" poster={project.videoPoster}>
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </section>
      )}

      <div className="project-detail-grid">
        <section className="project-overview">
          <p className="eyebrow">Overview</p>
          <h2>What I built</h2>
          <p>{project.overview}</p>
          {project.liveUrl && (
            <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
              {project.liveCta ?? "Visit live project"} ↗
            </a>
          )}
        </section>
        <aside className="project-facts">
          <p className="eyebrow">Key work</p>
          <ul>
            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          <div className="project-stack">
            <p className="eyebrow">Tools & concepts</p>
            <ul className="tag-list">
              {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}

