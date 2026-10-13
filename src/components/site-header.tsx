import Link from "next/link";
import { CommandPalette } from "@/components/command-palette";
import { ThemeToggle } from "@/components/theme-toggle";
import { projects } from "@/data/projects";

const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/">
          Antonio Colon
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-tools">
          <CommandPalette
            pages={[{ href: "/", label: "Home" }, ...navigation]}
            projects={projects.map(({ slug, title, category }) => ({ slug, title, category }))}
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
