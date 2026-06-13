import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero shell">
        <p className="eyebrow">Computer science · Math · Finance · Machine learning</p>
        <h1>
          I build to explore what technology can <em>make possible.</em>
        </h1>
        <p className="hero-copy">
          I&apos;m Antonio, a computer science graduate drawn to software that
          helps people understand information, make decisions, and solve
          practical problems. Recently, I&apos;ve been especially interested in
          machine learning and learning where it can be genuinely useful.
        </p>
        <blockquote className="hero-principle">
          “It&apos;s a leap of faith.”
          <cite>Spider-Man: Into the Spider-Verse</cite>
        </blockquote>
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
          <h2>Curious about systems, markets, and people.</h2>
          <p>
            I enjoy learning how technical systems work and how they connect
            to the decisions people and businesses make. That curiosity has
            taken me from full-stack products to distributed systems and,
            more recently, machine learning.
          </p>
          <Link className="text-link" href="/about">More about me →</Link>
        </div>
      </section>
    </>
  );
}
