// Ilustrasi dekoratif: irisan citra medis dengan peta aktivasi (heatmap).
export default function ScanFigure() {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Ilustrasi irisan citra medis dengan peta aktivasi berwarna" className="h-full w-full">
      <defs>
        <radialGradient id="tissue" cx="50%" cy="48%" r="52%">
          <stop offset="0" stopColor="#dde1e8" />
          <stop offset="0.55" stopColor="#8c95a6" />
          <stop offset="1" stopColor="#2b3444" />
        </radialGradient>
        <radialGradient id="heat">
          <stop offset="0" stopColor="#ff2a1a" stopOpacity="0.95" />
          <stop offset="0.25" stopColor="#ff9a1a" stopOpacity="0.85" />
          <stop offset="0.5" stopColor="#d8e83a" stopOpacity="0.55" />
          <stop offset="0.75" stopColor="#2fd0a0" stopOpacity="0.25" />
          <stop offset="1" stopColor="#2fd0a0" stopOpacity="0" />
        </radialGradient>
        <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="1" fill="#000" opacity="0.14" />
        </pattern>
      </defs>

      <rect width="400" height="400" fill="#0a0f1a" />

      {/* irisan jaringan */}
      <ellipse cx="200" cy="205" rx="150" ry="170" fill="url(#tissue)" />
      <ellipse cx="200" cy="205" rx="150" ry="170" fill="none" stroke="#e8edf5" strokeOpacity="0.55" strokeWidth="7" />
      <ellipse cx="200" cy="205" rx="122" ry="142" fill="none" stroke="#1b2230" strokeOpacity="0.4" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
      <path d="M186 135c-30 10-34 62-6 82 14-18 18-56 6-82z" fill="#1a2232" opacity="0.6" />
      <path d="M214 135c30 10 34 62 6 82-14-18-18-56-6-82z" fill="#1a2232" opacity="0.6" />
      <path d="M200 70v270" stroke="#1a2232" strokeOpacity="0.25" strokeWidth="2" />

      {/* peta aktivasi */}
      <g style={{ transformOrigin: "262px 160px" }} className="animate-breathe">
        <circle cx="262" cy="160" r="80" fill="url(#heat)" />
        <circle cx="240" cy="188" r="42" fill="url(#heat)" opacity="0.7" />
      </g>

      {/* penanda area */}
      <g fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="square">
        <path d="M205 132V105h27" />
        <path d="M293 105h27v27" />
        <path d="M320 188v27h-27" />
        <path d="M232 215h-27v-27" />
      </g>

      <rect width="400" height="400" fill="url(#scanlines)" />
    </svg>
  );
}
