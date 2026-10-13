import type { Tape } from "@/data/projects";

// A few irregular outlines so holds on the same wall don't look stamped.
const shapes = [
  "M12 2.5c4.6-.6 8.9 2.3 9.6 6.9.7 4.7-2.3 9.5-7.2 11.4-4.3 1.6-9.7-.2-11.3-4.7C1.4 11.4 4.9 3.4 12 2.5Z",
  "M9.2 3.1c3.9-1.7 9.3-.5 11.3 3.6 2.1 4.3.3 9.9-3.8 12.6-3.7 2.4-9.6 2.1-12.5-1.5C.8 13.5 3.6 5.5 9.2 3.1Z",
  "M13.6 2.8c4.2.7 7.7 4.3 7.9 8.6.2 4.9-3.7 9.3-8.7 9.8-4.7.5-9.5-2.5-10.3-7.1C1.5 8 7.4 1.7 13.6 2.8Z",
];

export function Hold({ tape, shape = 0 }: { tape: Tape; shape?: number }) {
  return (
    <svg className="hold" viewBox="0 0 24 24" aria-hidden="true" style={{ color: `var(--tape-${tape})` }}>
      <path d={shapes[shape % shapes.length]} fill="currentColor" />
      <circle className="hold-bolt" cx="12" cy="12" r="2.2" />
    </svg>
  );
}
