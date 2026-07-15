export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
}

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-panel/80 to-panel/30 p-8 transition-all duration-300 hover:border-teal/30">
      <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gold/5 blur-2xl" />
      <div className="font-mono text-5xl leading-none text-teal/40">&ldquo;</div>
      <blockquote className="mt-2 text-lg leading-relaxed text-ink">
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal/15 font-mono text-sm font-bold text-teal">
          {t.initials}
        </div>
        <div>
          <div className="font-semibold text-ink">{t.name}</div>
          <div className="text-xs text-muted">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}
