import { ProjectRow } from "@/components/project-row";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects | Antonio Colon" };

const groups = [
  {
    title: "Projecting",
    note: "Still working on these.",
    items: projects.filter((project) => project.status === "projecting"),
  },
  {
    title: "Sent",
    note: "Finished or live.",
    items: projects.filter((project) => project.status === "sent" && project.kind !== "coursework"),
  },
  {
    title: "Coursework",
    note: "Systems and algorithms projects from the University of Michigan.",
    items: projects.filter((project) => project.kind === "coursework"),
  },
];

export default function ProjectsPage() {
  return (
    <>
      <header className="page-header topo">
        <div className="shell">
          <h1>Projects</h1>
          <p>
            Everything I&apos;ve built that I&apos;d show someone, from the
            app I&apos;m working on this week back to the coursework that
            taught me how systems fit together.
          </p>
        </div>
      </header>
      <div className="shell page-body">
        {groups.map((group) => (
          <section className="project-group" key={group.title} aria-labelledby={`group-${group.title}`}>
            <div className="project-group-heading">
              <h2 id={`group-${group.title}`}>{group.title}</h2>
              <p>{group.note}</p>
            </div>
            <ul className="project-list">
              {group.items.map((project, index) => (
                <ProjectRow key={project.slug} project={project} index={index} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
