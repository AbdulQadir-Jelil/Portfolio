"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const filters = [
  { id: "all", label: "All work" },
  { id: "featured", label: "Featured" },
  { id: "training", label: "Training" },
  { id: "earlier", label: "Earlier" },
];

export default function ProjectsExplorer() {
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((project) => project.categories.includes(active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const selected = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActive(filter.id)}
                aria-pressed={selected}
                className={`inline-flex min-h-[38px] items-center rounded-full border px-4 text-[0.86rem] font-semibold transition-colors duration-200 ${
                  selected
                    ? "border-accent bg-accent text-on-accent"
                    : "border-line bg-surface text-muted hover:border-line-strong hover:text-ink"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="text-[0.85rem] text-muted">
          Showing {visible.length} of {projects.length} projects
        </p>
      </div>

      {visible.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="card mt-8 p-6 text-[0.95rem] text-muted">
          Nothing in this group yet — check back soon.
        </p>
      )}
    </div>
  );
}
