import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero shell">
        <p className="eyebrow">Software engineer · Miami, Florida</p>
        <h1>
          I build thoughtful software for <em>real problems.</em>
        </h1>
        <p className="hero-copy">
          I&apos;m Antonio, a computer science graduate interested in full-stack
          products, practical AI, and the details that make technology useful.
        </p>
        <div className="button-row">
          <Link className="button button-primary" href="/projects">
            Explore my work
          </Link>
          <Link className="button button-secondary" href="/contact">
            Get in touch
          </Link>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Things I&apos;ve built</h2>
          </div>
          <Link className="text-link" href="/projects">
            View all projects →
          </Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section shell callout home-about">
        <div className="home-about-photo">
          <Image
            src="/images/antonio-graduation-portrait.jpg"
            alt="Antonio Colon at University of Michigan graduation"
            width={1200}
            height={1800}
            sizes="(max-width: 700px) 100vw, 36vw"
          />
        </div>
        <div>
          <p className="eyebrow">A little more</p>
          <h2>Curious by default. Always building.</h2>
          <p>
            My work sits at the intersection of solid engineering and useful
            product thinking. I care about why something should exist as much as
            how it gets built.
          </p>
          <Link className="text-link" href="/about">More about me →</Link>
        </div>
      </section>
    </>
  );
}
