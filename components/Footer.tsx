export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold tracking-tight text-ink">
                CiphezNexus
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-teal">
                Academy
              </span>
            </div>
            <p className="mt-3 text-2xl font-extrabold tracking-tight">
              <span className="text-ink">Learn. Build. </span>
              <span className="text-gradient">Launch.</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:items-end">
            <a
              href="mailto:academy@cipheznexus.com"
              className="text-muted transition-colors hover:text-teal"
            >
              academy@cipheznexus.com
            </a>
            <a
              href="https://wa.me/message"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-teal"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-xs text-muted/70">
          A CiphezNexus company · © 2026
        </div>
      </div>
    </footer>
  );
}
