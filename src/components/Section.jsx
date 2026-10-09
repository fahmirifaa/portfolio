// Pembungkus bagian: judul di kiri, isi di kanan (desktop); bertumpuk di mobile.
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:py-24 lg:grid-cols-12 lg:gap-10">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl lg:col-span-3">{title}</h2>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}
