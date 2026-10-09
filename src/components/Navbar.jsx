import { useState } from "react";
import { profile, nav } from "../data";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./Icons";

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const dark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Navigasi utama">
        <a href="#home" className="font-display text-2xl font-semibold tracking-tight">
          {profile.shortName}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={dark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-paper px-5 py-2 md:hidden">
          {nav.map((item) => (
            <li key={item.href} className="border-b border-line last:border-0">
              <a href={item.href} onClick={() => setOpen(false)} className="block py-3 text-base">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
