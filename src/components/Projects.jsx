import { useState } from "react";
import { projects, categories } from "../data";
import Section from "./Section";

export default function Projects() {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <Section id="projects" title="Proyek">
      <div role="group" aria-label="Filter proyek" className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActive(c.id)}
            aria-pressed={active === c.id}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === c.id
                ? "border-ink bg-ink text-paper"
                : "border-line text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul className="border-t border-line">
        {visible.map((p) => (
          <li key={p.title} className="group grid gap-4 border-b border-line py-7 md:grid-cols-5 md:gap-8">
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl font-medium leading-snug transition-colors group-hover:text-brand">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{p.type}</p>
            </div>

            <div className="md:col-span-3">
              <p className="leading-relaxed">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {t}
                  </li>
                ))}
              </ul>
              {(p.github || p.demo) && (
                <div className="mt-4 flex gap-5 text-sm font-medium">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand">
                      Lihat kode
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand">
                      Buka demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
