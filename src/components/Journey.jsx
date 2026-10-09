import { timeline } from "../data";
import Section from "./Section";

export default function Journey() {
  return (
    <Section id="journey" title="Riwayat">
      <ol className="ms-2 max-w-2xl border-s border-line">
        {timeline.map((item) => (
          <li key={item.title} className="relative pb-10 ps-8 last:pb-0">
            <span className="absolute -start-[6px] top-2 h-3 w-3 rounded-full border-2 border-brand bg-paper" aria-hidden="true" />
            <p className="text-sm text-muted">{item.period}</p>
            <h3 className="mt-1 font-display text-xl font-medium">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
