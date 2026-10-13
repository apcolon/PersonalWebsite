import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const phaseLabels = { done: "Done", active: "In progress", planned: "Planned" };

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
    <article
      className="shell entry"
      style={{ "--tape": `var(--tape-${project.tape})` } as React.CSSProperties}
    >
      <Link className="back-link" href="/projects">← All projects</Link>
      <header className="entry-header">
        <div className="entry-title">
          {project.icon && (
            <Image className="entry-icon" src={project.icon} alt={`${project.title} app icon`} width={96} height={96} />
          )}
          <div>
            <span className="tape-strip" aria-hidden="true" />
            <ViewTransition name={`title-${project.slug}`}>
              <h1>{project.title}</h1>
            </ViewTransition>
            <p className="entry-meta">
              {project.status} · {project.role ?? project.category} · {project.date}
            </p>
          </div>
        </div>
        <p className="entry-lede">{project.description}</p>
      </header>

      {project.videoUrl && (
        <section className="entry-section" aria-label={`${project.title} demo`}>
          <h2>Demo</h2>
          <div className="entry-media">
            <video controls playsInline preload="metadata" poster={project.videoPoster}>
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        </section>
      )}

      {project.images && project.images.length > 0 && (
        <section className="entry-section" aria-label={`${project.title} screenshots`}>
          <h2>In the app</h2>
          <div className="entry-gallery">
            {project.images.map((image) => (
              <Image key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 760px) 50vw, 280px" />
            ))}
          </div>
        </section>
      )}

      <div className="entry-grid">
        <section>
          <h2>What it is</h2>
          <p>{project.overview}</p>
          {project.liveUrl && (
            <a className="button" href={project.liveUrl} target="_blank" rel="noreferrer">
              {project.liveCta ?? "Visit live project"} ↗
            </a>
          )}
        </section>
        <aside>
          <h2>Key work</h2>
          <ul className="entry-highlights">
            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          <h2>Built with</h2>
          <p className="stack-line">{project.technologies.join(" / ")}</p>
        </aside>
      </div>

      {project.pipeline && (
        <section className="entry-section">
          <h2>How a climb moves through it</h2>
          <ol className="pipeline">
            {project.pipeline.map((stage) => (
              <li key={stage.step}>
                <strong>{stage.step}</strong>
                <span>{stage.detail}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {project.phases && (
        <section className="entry-section">
          <h2>Build log</h2>
          <ol className="phases">
            {project.phases.map((phase, index) => (
              <li key={phase.name} data-state={phase.state}>
                <span className="phase-number">{index}</span>
                <div>
                  <h3>{phase.name}</h3>
                  <p>{phase.summary}</p>
                </div>
                <span className="phase-state">{phaseLabels[phase.state]}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {project.notes && (
        <section className="entry-section">
          <h2>What I learned building it</h2>
          <div className="entry-notes">
            {project.notes.map((note) => (
              <div key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
