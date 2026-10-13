"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { email, githubUrl, linkedinUrl, resumeUrl } from "@/lib/contact";
import { toggleTheme } from "@/lib/theme";

type Command = {
  id: string;
  label: string;
  hint: string;
  run: () => void;
  keepOpen?: boolean;
};

type CommandPaletteProps = {
  pages: { href: string; label: string }[];
  projects: { slug: string; title: string; category: string }[];
};

const subscribeToNothing = () => () => {};
const isApplePlatform = () => /Mac|iPhone|iPad/.test(navigator.platform);

export function CommandPalette({ pages, projects }: CommandPaletteProps) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const isApple = useSyncExternalStore(subscribeToNothing, isApplePlatform, () => true);

  const commands = useMemo<Command[]>(
    () => [
      ...pages.map((page) => ({
        id: `page-${page.href}`,
        label: page.label,
        hint: "Page",
        run: () => router.push(page.href),
      })),
      ...projects.map((project) => ({
        id: `project-${project.slug}`,
        label: project.title,
        hint: project.category,
        run: () => router.push(`/projects/${project.slug}`),
      })),
      {
        id: "copy-email",
        label: "Copy email address",
        hint: email,
        keepOpen: true,
        run: () => {
          navigator.clipboard.writeText(email).then(() => setCopied(true));
        },
      },
      { id: "resume", label: "Open resume PDF", hint: "Action", run: () => window.open(resumeUrl, "_blank", "noopener") },
      { id: "github", label: "GitHub", hint: "Link", run: () => window.open(githubUrl, "_blank", "noopener") },
      { id: "linkedin", label: "LinkedIn", hint: "Link", run: () => window.open(linkedinUrl, "_blank", "noopener") },
      { id: "theme", label: "Switch light / dark theme", hint: "Action", keepOpen: true, run: toggleTheme },
    ],
    [pages, projects, router],
  );

  const results = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    return commands.filter((command) => {
      const haystack = `${command.label} ${command.hint}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
  }, [commands, query]);

  function open() {
    setQuery("");
    setActiveIndex(0);
    setCopied(false);
    dialogRef.current?.showModal();
    inputRef.current?.focus();
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (dialogRef.current?.open) dialogRef.current.close();
        else open();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Leave "Copied" on screen for a moment before the menu closes.
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => dialogRef.current?.close(), 700);
    return () => clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    const active = results[activeIndex];
    if (active) document.getElementById(`command-${active.id}`)?.scrollIntoView({ block: "nearest" });
  }, [results, activeIndex]);

  function runCommand(command: Command) {
    command.run();
    if (!command.keepOpen) dialogRef.current?.close();
  }

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (results.length ? (index + 1) % results.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (results.length ? (index - 1 + results.length) % results.length : 0));
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      runCommand(results[activeIndex]);
    }
  }

  const active = results[activeIndex];

  return (
    <>
      <button className="palette-trigger" type="button" onClick={open} aria-label="Open command menu">
        <span>Jump to</span>
        <kbd>{isApple ? "⌘K" : "Ctrl K"}</kbd>
      </button>
      <dialog
        ref={dialogRef}
        className="palette"
        aria-label="Command menu"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <div className="palette-body">
          <input
            ref={inputRef}
            className="palette-input"
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-results"
            aria-activedescendant={active ? `command-${active.id}` : undefined}
            aria-label="Search pages, projects, and actions"
            placeholder="Search pages, projects, actions"
            autoComplete="off"
            spellCheck={false}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={onInputKeyDown}
          />
          <ul className="palette-results" id="palette-results" role="listbox" aria-label="Results">
            {results.map((command, index) => (
              <li
                key={command.id}
                id={`command-${command.id}`}
                role="option"
                aria-selected={index === activeIndex}
                onPointerMove={() => setActiveIndex(index)}
                onClick={() => runCommand(command)}
              >
                <span>{command.label}</span>
                <span className="palette-hint">{command.id === "copy-email" && copied ? "Copied" : command.hint}</span>
              </li>
            ))}
            {results.length === 0 && <li className="palette-empty">Nothing matches “{query}”.</li>}
          </ul>
          <p className="palette-help">
            <kbd>↑</kbd>
            <kbd>↓</kbd> to move, <kbd>Enter</kbd> to open, <kbd>Esc</kbd> to close
          </p>
        </div>
      </dialog>
    </>
  );
}
