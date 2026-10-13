"use client";

import Link from "next/link";
import { ViewTransition, useState } from "react";
import { Hold } from "@/components/hold";
import type { Tape } from "@/data/projects";

export type RouteStop = {
  id: string;
  href: string;
  title: string;
  tape: Tape;
  status: string;
  year: string;
  description: string;
  technologies: string[];
  morphTitle?: boolean;
};

// Horizontal position of each hold, as a percentage of the wall's width.
const holdPositions = [60, 30, 64, 26, 58, 36, 62, 30];
const rowHeight = 100;

// Stops are listed top to bottom, so the last one is where the route starts.
export function RouteMap({ stops }: { stops: RouteStop[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = stops[activeIndex];
  const x = (index: number) => holdPositions[index % holdPositions.length];
  const y = (index: number) => index * rowHeight + rowHeight / 2;

  return (
    <div className="route" style={{ "--route-tape": `var(--tape-${active.tape})` } as React.CSSProperties}>
      <div className="route-wall" style={{ "--rows": stops.length } as React.CSSProperties}>
        <svg
          className="route-lines"
          viewBox={`0 0 100 ${stops.length * rowHeight}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {stops.slice(0, -1).map((stop, index) => (
            <g key={stop.id}>
              <line className="route-line" x1={x(index)} y1={y(index)} x2={x(index + 1)} y2={y(index + 1)} />
              <line
                className="route-line-lit"
                data-lit={index >= activeIndex}
                x1={x(index)}
                y1={y(index)}
                x2={x(index + 1)}
                y2={y(index + 1)}
              />
            </g>
          ))}
        </svg>
        <ol className="route-stops">
          {stops.map((stop, index) => (
            <li
              key={stop.id}
              className="route-stop"
              data-side={x(index) > 50 ? "left" : "right"}
              data-active={index === activeIndex}
              style={{ "--x": `${x(index)}%` } as React.CSSProperties}
            >
              <Link href={stop.href} onMouseEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)}>
                <Hold tape={stop.tape} shape={index} />
                <span className="route-label">
                  {stop.morphTitle ? (
                    <ViewTransition name={`title-${stop.id}`}>
                      <span className="route-title">{stop.title}</span>
                    </ViewTransition>
                  ) : (
                    <span className="route-title">{stop.title}</span>
                  )}
                  <span className="route-meta">
                    {stop.status} · {stop.year}
                  </span>
                  <span className="route-inline-description">{stop.description}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <aside className="route-panel" aria-live="polite">
        <span className="tape-strip" aria-hidden="true" />
        <h3>{active.title}</h3>
        <p className="route-meta">
          {active.status} · {active.year}
        </p>
        <p>{active.description}</p>
        {active.technologies.length > 0 && <p className="stack-line">{active.technologies.join(" / ")}</p>}
        <Link className="text-link" href={active.href}>
          Open {active.title} →
        </Link>
      </aside>
    </div>
  );
}
