import { skillGroups } from "../data";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Keahlian">
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((g) => (
          <div key={g.title} className="border-t border-ink pt-4">
            <h3 className="font-display text-xl font-medium">{g.title}</h3>
            <ul className="mt-4 space-y-2 text-muted">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
