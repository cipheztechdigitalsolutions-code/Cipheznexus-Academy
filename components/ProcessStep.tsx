export interface Step {
  num: string;
  title: string;
  blurb: string;
}

export default function ProcessStep({ step, last }: { step: Step; last?: boolean }) {
  return (
    <div className="relative flex-1">
      {/* connector line */}
      {!last && (
        <div className="absolute left-7 top-7 hidden h-px w-full bg-gradient-to-r from-teal/40 to-transparent md:block" />
      )}
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-teal/40 bg-panel font-mono text-lg font-bold text-teal glow-teal">
        {step.num}
      </div>
      <h3 className="mt-5 text-xl font-bold text-ink">{step.title}</h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
        {step.blurb}
      </p>
    </div>
  );
}
