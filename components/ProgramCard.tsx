type Status = "Enrolling" | "Coming Soon";

export interface Program {
  title: string;
  status: Status;
  blurb: string;
  length: string;
  level: string;
}

export default function ProgramCard({ p }: { p: Program }) {
  const enrolling = p.status === "Enrolling";
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:glow-teal">
      {/* corner circuit glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal/10 blur-3xl transition-opacity duration-300 group-hover:bg-teal/20" />

      <div className="mb-4 flex items-center justify-between">
        <span
          className={`font-mono text-[11px] uppercase tracking-widest ${
            enrolling ? "text-teal" : "text-gold"
          }`}
        >
          {enrolling ? "● Enrolling" : "○ Coming Soon"}
        </span>
      </div>

      <h3 className="text-xl font-bold text-ink">{p.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.blurb}</p>

      <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-white/5 pt-5 text-sm">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-widest text-muted/70">
            Length
          </dt>
          <dd className="mt-1 font-semibold text-ink">{p.length}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-widest text-muted/70">
            Level
          </dt>
          <dd className="mt-1 font-semibold text-ink">{p.level}</dd>
        </div>
      </dl>

      <a
        href="#contact"
        className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
          enrolling
            ? "bg-teal text-night hover:brightness-110"
            : "border border-white/15 text-ink hover:border-gold/50 hover:text-gold"
        }`}
      >
        {enrolling ? "Enroll" : "Join Waitlist"}
      </a>
    </div>
  );
}
