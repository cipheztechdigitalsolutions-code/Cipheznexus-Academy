import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import NeuralArt from "@/components/NeuralArt";
import ProgramCard, { type Program } from "@/components/ProgramCard";
import ProcessStep, { type Step } from "@/components/ProcessStep";
import TestimonialCard, { type Testimonial } from "@/components/TestimonialCard";

// Lazy-load the 3D hero (client-only) so three.js never blocks first paint.
const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

const STATS = [
  ["1,200+", "Learners trained"],
  ["40+", "Projects shipped"],
  ["85%", "Grads placed"],
  ["3", "Active tracks"],
];

const WHY = [
  {
    title: "You build, not just watch",
    blurb:
      "Every cohort ends with a shipped project you can show employers or clients.",
  },
  {
    title: "Small, mentored cohorts",
    blurb: "Real feedback, real code review, real accountability.",
  },
  {
    title: "A community that lasts",
    blurb: "Alumni, mentors and job leads long after the bootcamp ends.",
  },
];

const PROGRAMS: Program[] = [
  {
    title: "AI Agents Bootcamp",
    status: "Enrolling",
    blurb:
      "Build autonomous agents from scratch: planning, tools, memory, deployment.",
    length: "8 weeks",
    level: "Intermediate",
  },
  {
    title: "LLM & RAG Bootcamp",
    status: "Enrolling",
    blurb:
      "Master retrieval-augmented generation, embeddings and production pipelines.",
    length: "6 weeks",
    level: "Beginner",
  },
  {
    title: "AI Product Engineering",
    status: "Coming Soon",
    blurb: "Ship an AI feature to real users, with evals and guardrails.",
    length: "10 weeks",
    level: "Advanced",
  },
];

const STEPS: Step[] = [
  { num: "01", title: "Apply", blurb: "Tell us where you're starting from." },
  {
    num: "02",
    title: "Build",
    blurb: "Join live sessions, ship weekly projects, get real feedback.",
  },
  {
    num: "03",
    title: "Launch",
    blurb: "Graduate with a portfolio and a community behind you.",
  },
];

const WINS: Testimonial[] = [
  {
    quote:
      "I came in barely able to call an API. Eight weeks later I shipped an AI agent and landed a junior ML role.",
    initials: "AO",
    name: "Amara Okonkwo",
    role: "AI Agents grad · now ML Engineer",
  },
  {
    quote:
      "The capstone changed everything. My cohort project became my portfolio piece, and my co-founder.",
    initials: "SR",
    name: "Sofia Rahman",
    role: "LLM & RAG grad · founder",
  },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.3em] text-teal">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main id="top" className="relative">
      <Nav />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden pt-28">
        <div className="circuit-grid absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <Hero3D />
        </div>
        {/* radial wash so text stays legible over the 3D */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_40%,rgba(8,10,17,0.85),transparent)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center pt-10">
            <div className="animate-reveal">
              <Label>AI Bootcamps &amp; Cohorts</Label>
            </div>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
              <span className="text-ink">Stop Watching AI.</span>
              <br />
              <span className="text-gradient">Start Building It.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Learn AI agents, LLMs, and RAG through hands-on bootcamps and
              hackathons, then walk away with real projects, not just
              certificates.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-base font-semibold text-night transition-all hover:glow-teal hover:brightness-110"
              >
                Enroll in the Next Cohort
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-base font-semibold text-ink transition-all hover:border-teal/50"
              >
                View Programs
              </a>
            </div>

            {/* floating status chips */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["Live cohort", "Mentored build", "Shipped project"].map(
                (chip, i) => (
                  <span
                    key={chip}
                    style={{ animationDelay: `${i * 0.8}s` }}
                    className="animate-float rounded-full border border-teal/20 bg-panel/60 px-4 py-1.5 font-mono text-xs text-teal"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Mobile / no-WebGL fallback visual */}
          <div className="relative flex items-center justify-center lg:hidden">
            <NeuralArt className="w-full max-w-md opacity-80" />
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-y border-white/5 bg-panel/30 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:px-8 md:grid-cols-4">
            {STATS.map(([n, l]) => (
              <div key={l} className="py-8 text-center">
                <div className="text-3xl font-extrabold text-ink sm:text-4xl">
                  {n}
                </div>
                <div className="mt-1 text-sm text-muted">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY / ABOUT ================= */}
      <section id="about" className="relative px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Label>01 / Why learn with us</Label>
            <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              You build, we mentor, it ships.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-panel/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal/30">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-teal/30 bg-teal/10 font-mono text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-bold text-ink">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {w.blurb}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section id="programs" className="relative overflow-hidden px-5 py-24 sm:px-8">
        <NeuralArt className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <Label>02 / Programs</Label>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Current &amp; upcoming bootcamps
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <ProgramCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="relative px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Label>03 / How it works</Label>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Apply → Build → Launch
            </h2>
          </Reveal>
          <div className="mt-14 flex flex-col gap-12 md:flex-row md:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} delay={i * 120} className="flex-1">
                <ProcessStep step={s} last={i === STEPS.length - 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STUDENT WINS ================= */}
      <section id="wins" className="relative px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Label>04 / Student wins</Label>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Real graduates. Real outcomes.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {WINS.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="relative overflow-hidden px-5 py-24 sm:px-8">
        <div className="circuit-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-teal/20 bg-gradient-to-br from-panel/80 to-night p-10 text-center glow-teal sm:p-16">
              <Label>05 / Contact</Label>
              <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
                Your next cohort <span className="text-gradient">starts soon.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
                Seats are limited. Tell us where you&apos;re starting from and
                we&apos;ll take it from there.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/message"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 font-semibold text-night transition-all hover:brightness-110"
                >
                  Message us on WhatsApp
                </a>
                <a
                  href="mailto:academy@cipheznexus.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-ink transition-all hover:border-teal/50"
                >
                  academy@cipheznexus.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
