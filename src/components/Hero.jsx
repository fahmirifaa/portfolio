import { profile } from "../data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import ScanFigure from "./ScanFigure";

const rise = (ms) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  const socials = [
    { label: "GitHub", href: profile.github, Icon: GitHubIcon },
    { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon },
    { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
  ].filter((s) => s.href);

  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-28">
      <div className="lg:col-span-7">
        <p className="animate-rise text-base text-muted" style={rise(0)}>
          {profile.name}, {profile.location}
        </p>
        <h1
          className="animate-rise mt-4 font-display text-[2.6rem] font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
          style={rise(100)}
        >
          {profile.headline}
        </h1>
        <p className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={rise(220)}>
          {profile.intro}
        </p>

        <div className="animate-rise mt-9 flex flex-wrap gap-3" style={rise(340)}>
          <a
            href="#projects"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            Lihat proyek
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
          >
            Hubungi saya
          </a>
          {profile.cv && (
            <a
              href={`${import.meta.env.BASE_URL}${profile.cv}`}
              download
              className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
            >
              Unduh CV
            </a>
          )}
        </div>

        <ul className="animate-rise mt-10 flex flex-wrap gap-x-6 gap-y-3" style={rise(440)}>
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand"
              >
                <Icon size={18} />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <figure className="animate-rise mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none" style={rise(260)}>
        <div className="aspect-square overflow-hidden rounded-lg border border-line bg-[#0a0f1a]">
          <ScanFigure />
        </div>
        <figcaption className="mt-3 font-display text-base italic text-muted">{profile.figureCaption}</figcaption>
      </figure>
    </section>
  );
}
