import { about, profile } from "../data";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="Tentang">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-5 text-lg leading-relaxed md:col-span-3">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="md:col-span-2">
          {profile.photo && (
            <img
              src={`${import.meta.env.BASE_URL}${profile.photo}`}
              alt={`Foto ${profile.name}`}
              className="mb-6 aspect-[4/5] w-full max-w-xs rounded-lg border border-line object-cover"
            />
          )}
          <dl className="border-t border-line text-sm">
            {about.facts.map((f) => (
              <div key={f.label} className="grid grid-cols-[6rem_1fr] gap-3 border-b border-line py-3">
                <dt className="text-muted">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
