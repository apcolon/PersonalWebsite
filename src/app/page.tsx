import Image from "next/image";
import Link from "next/link";
import { ProjectRow } from "@/components/project-row";
import { RouteMap, type RouteStop } from "@/components/route-map";
import { getProject, projects } from "@/data/projects";
import { email } from "@/lib/contact";

// Newest at the top, the way you'd read a route from the ground up.
const routeSlugs = ["rocky", "learn-plus-plus", "modus-ai", "cartwise", "nomad"];

export default function Home() {
  const stops: RouteStop[] = routeSlugs.flatMap((slug) => {
    const project = getProject(slug);
    return project
      ? [
          {
            id: project.slug,
            href: `/projects/${project.slug}`,
            title: project.title,
            tape: project.tape,
            status: project.status,
            year: project.year,
            description: project.description,
            technologies: project.technologies,
            morphTitle: true,
          },
        ]
      : [];
  });
  stops.push({
    id: "start",
    href: "/about",
    title: "University of Michigan",
    tape: "yellow",
    status: "start",
    year: "Ann Arbor",
    description:
      "Computer science degree with a math minor. Most of the systems and algorithms projects further down come from here.",
    technologies: [],
  });

  const otherProjects = projects.filter((project) => !routeSlugs.includes(project.slug));

  return (
    <>
      <section className="intro topo">
        <div className="shell">
          <h1>Software engineer who climbs.</h1>
          <p>
            I&apos;m Antonio Colon. I studied computer science and math at
            Michigan and live in Miami. I&apos;ve built a tool that turns
            recipes into grocery carts and a study assistant that answers from
            a course&apos;s own lectures. Right now I&apos;m building Rocky, an
            iPhone app that coaches bouldering.
          </p>
          <p className="intro-links">
            <Link href="/projects/rocky">See Rocky</Link>
            <Link href="/resume">Resume</Link>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      </section>

      <section className="shell section">
        <div className="section-heading">
          <h2>The route so far</h2>
          <p className="legend">
            <span>projecting</span> still working on it <span>sent</span> shipped
          </p>
        </div>
        <RouteMap stops={stops} />
      </section>

      <section className="shell section">
        <div className="section-heading">
          <h2>Also on the wall</h2>
          <Link className="text-link" href="/projects">
            All projects →
          </Link>
        </div>
        <ul className="project-list">
          {otherProjects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </ul>
      </section>

      <section className="shell section home-about">
        <div className="photo-frame">
          <Image
            src="/images/antonio-graduation-portrait.jpg"
            alt="Antonio Colon at University of Michigan graduation"
            width={1200}
            height={1800}
            sizes="(max-width: 700px) 100vw, 32vw"
          />
        </div>
        <div className="prose">
          <h2>Off the wall</h2>
          <p>
            Born in Puerto Rico, based in Miami. Away from the screen I climb,
            lift, run, and read. I once walked the Camino de Santiago, 150
            miles in 10 days from Porto to Santiago de Compostela.
          </p>
          <Link className="text-link" href="/about">
            More about me →
          </Link>
        </div>
      </section>
    </>
  );
}
