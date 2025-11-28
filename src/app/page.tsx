import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Logo from "@/components/Logo";
import SectionHeading from "@/components/SectionHeading";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const services = [
  {
    title: "Elite delivery pods",
    description:
      "Full-stack feature teams that ship modules, dashboards, and integrations while you stay client-facing.",
    icon: "🚀",
    bullets: [
      "Drop-in squads for Next.js, Node, Python, and mobile",
      "Weekly demo cadence with measurable output",
      "Owner-level accountability with clean handoffs",
    ],
  },
  {
    title: "Proposal accelerator",
    description:
      "We write drafts, estimates, and solution outlines so you win more invitations without losing billable hours.",
    icon: "📝",
    bullets: [
      "Proposal and scope drafting in your voice",
      "Pre-built milestone templates to answer fast",
      "Competitive pricing models that still protect margin",
    ],
  },
  {
    title: "QA + stabilization",
    description:
      "Automated and manual testing that protects your ratings and keeps production stable.",
    icon: "🧪",
    bullets: [
      "Unit, integration, and visual regression coverage",
      "Performance and security checks before handoff",
      "Traceable test runs with concise defect notes",
    ],
  },
  {
    title: "DevOps + launch",
    description:
      "Pipelines, environments, and observability so every delivery feels senior and reliable.",
    icon: "⚙️",
    bullets: [
      "CI/CD on GitHub Actions, GitLab, or CircleCI",
      "Cloud setups on AWS, GCP, and Vercel",
      "Playbooks for rollback, on-call, and uptime",
    ],
  },
  {
    title: "Night shift coverage",
    description:
      "We keep the lights on while you rest, answering clients and moving tickets overnight.",
    icon: "🌙",
    bullets: [
      "Timezone-bridged standups and delivery",
      "Inbox monitoring with canned responses",
      "Lightweight fixes to keep momentum high",
    ],
  },
  {
    title: "Fractional leadership",
    description:
      "Architecture reviews and technical direction for thorny client asks.",
    icon: "🧭",
    bullets: [
      "Architecture briefs and risk callouts",
      "Code reviews with senior guardrails",
      "Vendor selection and proof-of-concepts",
    ],
  },
];

const steps = [
  {
    title: "Pairing & kickoff (24h)",
    detail:
      "Share your inbox and pipeline. We align on tone, repos, and delivery rules so everything stays white-label.",
  },
  {
    title: "Delivery engine",
    detail:
      "Pods work in parallel: feature builds, QA, and proposal drafting. You approve before anything reaches clients.",
  },
  {
    title: "Quality wall",
    detail:
      "Code review, test evidence, and demo clips. We make it easy for you to press send with confidence.",
  },
  {
    title: "Handoff & scale",
    detail:
      "We package work for client delivery and queue the next batch so you can accept more invitations.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$499",
    cadence: "/month",
    description: "For trying the collective on prep work and quick wins.",
    features: [
      "20 hours of delivery and proposal support",
      "Research, estimates, and light feature fixes",
      "Response drafts for inbound invites",
      "Same-day onboarding playbook",
    ],
  },
  {
    name: "Pro",
    price: "$1,499",
    cadence: "/month",
    description: "The sweet spot for busy top-rated or Top Rated Plus earners.",
    highlight: true,
    features: [
      "60 hours of engineering + QA",
      "Feature pods for dashboards and APIs",
      "Proposal accelerator (5+ per week)",
      "Night-shift coverage for critical threads",
    ],
  },
  {
    name: "Elite",
    price: "$3,499",
    cadence: "/month",
    description: "Dedicated squad, senior reviewer, and DevOps baked in.",
    features: [
      "120 hours with a dedicated delivery pod",
      "Senior reviewer before every handoff",
      "Custom CI/CD, monitoring, and on-call",
      "Priority start times and weekend coverage",
    ],
  },
];

const quickWins = [
  {
    title: "Response in 2 hours",
    detail: "We mirror your tone and draft replies so you never leave clients waiting.",
  },
  {
    title: "Ship in days",
    detail: "Pods plug into your repos on day one with linting, tests, and previews.",
  },
  {
    title: "White-label guarantee",
    detail: "We stay invisible and protect your Upwork ratings and relationships.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-x-0 top-[-20%] h-[480px] bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.16),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(103,232,249,0.16),transparent_32%)] blur-3xl" />
        <div className="absolute left-[10%] top-1/2 h-80 w-80 rounded-full bg-cyan-300/10 blur-[120px]" />
        <div className="absolute right-[5%] top-[35%] h-64 w-64 rounded-full bg-emerald-300/10 blur-[110px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#process">
              How it works
            </a>
            <a className="transition hover:text-white" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href="mailto:james.wang@techalphasolutions.com"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:-translate-y-0.5 hover:shadow-cyan-300/40 md:inline-flex"
          >
            Book a slot
          </a>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-4 pb-24 pt-10 md:px-8 lg:px-10">
        <section className="py-10 sm:py-16 lg:py-20">
          <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/10 px-6 py-10 shadow-2xl shadow-black/50 sm:px-10 md:px-12 lg:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(94,234,212,0.18),transparent_30%),radial-gradient(circle_at_30%_70%,rgba(251,191,36,0.12),transparent_30%)]" />
            <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
              <div className="space-y-6">
                <span className="chip text-sm font-semibold text-white">
                  White-label delivery for top Upwork earners
                </span>
                <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                  Scale your Upwork empire with a silent engineering collective.
                </h1>
                <p className="max-w-3xl text-lg text-slate-200/80">
                  We are the delivery engine behind high-earning freelancers. Keep the client
                  spotlight while we handle production code, QA, proposals, and round-the-clock
                  momentum.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:james.wang@techalphasolutions.com"
                    className="rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:-translate-y-0.5 hover:shadow-cyan-300/40"
                  >
                    Email the collective
                  </a>
                  <a
                    href="#pricing"
                    className="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/5"
                  >
                    View pricing
                  </a>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-slate-100/90">
                  <span className="chip">⚡ Kickoff in 24 hours</span>
                  <span className="chip">🛡️ White-label + NDA</span>
                  <span className="chip">⏱️ Response time: ~2 hours</span>
                </div>
              </div>

              <div className="glass-panel relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-100">
                      Delivery OS
                    </p>
                    <h3 className="font-display text-2xl text-white">
                      Built for throughput
                    </h3>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-300" />
                </div>
                <ul className="mt-6 space-y-4 text-sm text-slate-200/85">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_0_6px_rgba(94,234,212,0.25)]" />
                    Delivery pods for features, QA, and DevOps
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_0_6px_rgba(103,232,249,0.25)]" />
                    Proposal desk that drafts, prices, and replies for you
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_0_6px_rgba(251,191,36,0.25)]" />
                    Senior review before every client handoff
                  </li>
                </ul>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center text-xs text-slate-300">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                    <p className="font-display text-2xl text-white">30-70%</p>
                    <p className="text-[11px] uppercase tracking-wide text-slate-300/80">
                      work offloaded
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                    <p className="font-display text-2xl text-white">12+</p>
                    <p className="text-[11px] uppercase tracking-wide text-slate-300/80">
                      stack experts
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                    <p className="font-display text-2xl text-white">24/7</p>
                    <p className="text-[11px] uppercase tracking-wide text-slate-300/80">
                      coverage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-12 md:py-16 lg:py-20">
          <SectionHeading
            kicker="Services"
            title="The crew behind your Upwork profile."
            description="From drafting proposals to pushing production code, TechAlpha Solutions operates as your invisible engineering department."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-panel h-full rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-white/30 hover:shadow-cyan-300/20"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-lg">
                    {service.icon}
                  </span>
                  <h3 className="font-display text-xl text-white">{service.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-200/80">{service.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-200/80">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="py-12 md:py-16 lg:py-20">
          <SectionHeading
            kicker="How it works"
            title="Structured like a product team, invisible like a ghostwriter."
            description="We blend delivery pods, QA, and proposal drafting into one rhythm so you can say yes to more work without losing sleep."
          />
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="glass-panel flex flex-col justify-between gap-4 rounded-2xl border border-white/10 p-6 md:flex-row md:items-center"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 font-display text-lg text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-200/80">{step.detail}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-100">
                  <span className="h-px w-10 bg-gradient-to-r from-emerald-200/60 to-cyan-200" />
                  Momentum
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="glass-panel rounded-3xl border border-white/10 p-8 shadow-xl shadow-black/40">
            <SectionHeading
              kicker="Why teams pick us"
              title="We protect your rating while multiplying your throughput."
              description="High earners can’t risk shaky delivery. Our ops keep you looking fast, responsive, and senior."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {quickWins.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-white/5"
                >
                  <h3 className="font-display text-xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-200/80">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12 md:py-16 lg:py-20">
          <SectionHeading
            kicker="Pricing"
            title="Flexible, white-label support tiers."
            description="Start with a light lift or lock in a dedicated squad. Every plan includes NDA, proposal help, and senior review before client handoff."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`glass-panel flex h-full flex-col rounded-2xl border p-6 ${plan.highlight ? "border-cyan-300/60 bg-white/10 shadow-cyan-200/30" : "border-white/10 bg-white/5"}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl text-white">{plan.name}</h3>
                  {plan.highlight ? (
                    <span className="rounded-full bg-gradient-to-r from-cyan-300 to-emerald-200 px-3 py-1 text-xs font-semibold text-slate-900">
                      Most booked
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm text-slate-200/80">{plan.description}</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-4xl text-white">{plan.price}</span>
                  <span className="text-sm text-slate-300">{plan.cadence}</span>
                </div>
                <div className="mt-5 flex-1">
                  <ul className="space-y-2 text-sm text-slate-200/85">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="mailto:james.wang@techalphasolutions.com"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${plan.highlight ? "bg-white text-slate-950 shadow-lg shadow-cyan-400/30 hover:-translate-y-0.5 hover:shadow-cyan-300/40" : "border border-white/30 text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/5"}`}
                >
                  Book this plan
                </a>
              </div>
            ))}
          </div>
        </section>

        <AboutSection />

        <section id="contact" className="py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
            <div className="glass-panel rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-slate-800/60 p-8 shadow-2xl shadow-black/50">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">
                Contact
              </p>
              <h3 className="mt-2 font-display text-3xl text-white">
                Ready to offload 30–70% of your workload?
              </h3>
              <p className="mt-3 text-sm text-slate-200/80">
                Tell us what&apos;s in your Upwork pipeline and we&apos;ll show you how our pods can
                keep you shipping fast—and quietly.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-100">
                    Direct email
                  </p>
                  <a
                    className="mt-2 block break-all font-display text-lg text-white underline underline-offset-4"
                    href="mailto:james.wang@techalphasolutions.com"
                  >
                    james.wang@techalphasolutions.com
                  </a>
                  <p className="mt-1 text-xs text-slate-300">Avg reply ~2 hours</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-100">
                    What to share
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-200/80">
                    <li>• Links to scopes or Figma</li>
                    <li>• Deadlines & timezones</li>
                    <li>• Tech stack + repos</li>
                    <li>• Budget or hours needed</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-100/90">
                <span className="chip">⚡ Kickoff in 24 hours</span>
                <span className="chip">🛡️ White-label + NDA</span>
                <span className="chip">⏱️ Response time: ~2 hours</span>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/80 py-6 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            Built for you by TechAlpha Solutions — the silent engineering collective for top Upwork earners.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:james.wang@techalphasolutions.com"
              className="font-semibold text-white transition hover:text-cyan-100"
            >
              james.wang@techalphasolutions.com
            </a>
            <span className="hidden text-slate-600 md:inline">|</span>
            <a className="transition hover:text-white" href="#pricing">
              Plans
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
}
