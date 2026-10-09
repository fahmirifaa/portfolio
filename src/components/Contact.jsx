import { profile } from "../data";
import Section from "./Section";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Contact() {
  return (
    <Section id="contact" title="Kontak">
      <p className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
        Ingin berkolaborasi di riset atau punya pertanyaan tentang proyek saya? Kirim email.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block break-all text-xl underline decoration-line underline-offset-8 transition-colors hover:text-brand hover:decoration-brand sm:text-2xl"
      >
        {profile.email}
      </a>

      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
        {profile.github && (
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted transition-colors hover:text-brand">
              <GitHubIcon size={18} /> GitHub
            </a>
          </li>
        )}
        {profile.linkedin && (
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted transition-colors hover:text-brand">
              <LinkedInIcon size={18} /> LinkedIn
            </a>
          </li>
        )}
      </ul>
    </Section>
  );
}
