import SectionHeading from "./SectionHeading";

const history = [
  {
    label: "2019 - Remote strike team",
    detail:
      "Started as a three-person pod handling emergency feature work and QA for fast-scaling clients.",
  },
  {
    label: "2021 - Pods + proposal desk",
    detail:
      "Added proposal drafting, pricing models, and a QA wall to keep client comms and delivery in sync.",
  },
  {
    label: "2023 - DevOps + night coverage",
    detail:
      "Expanded into DevOps playbooks, on-call rotations, and overnight coverage for global accounts.",
  },
  {
    label: "Today - White-label collective",
    detail:
      "Dedicated squads across frontend, backend, mobile, QA, and SRE - built to keep top freelancers looking senior and fast.",
  },
];

const stack = [
  "Next.js",
  "React / React Native",
  "Node.js",
  "Python / FastAPI",
  "PostgreSQL + Prisma",
  "AWS / GCP / Vercel",
  "CI/CD & Docker",
  "Stripe & Auth0",
];

const leaders = [
  {
    name: "James Wang",
    role: "CEO & Co-Founder",
    focus: "Partnerships, delivery velocity, and client trust.",
    summary:
      "Built remote pods for SaaS, marketplaces, and enterprise rollouts; insists on senior review before anything is sent client-side.",
    badges: ["Product ops", "Client relationships"],
  },
  {
    name: "Priya Desai",
    role: "CTO",
    focus: "Architecture, QA wall, and platform reliability.",
    summary:
      "Led distributed teams across Next.js, Node, and Python; designs the playbooks that keep uptime and handoffs predictable.",
    badges: ["Architecture", "QA discipline"],
  },
  {
    name: "Alex Romero",
    role: "Head of Backend",
    focus: "APIs, data, and integrations.",
    summary:
      "Owns backend guilds across Node, FastAPI, and PostgreSQL; sets standards for observability and rollout safety.",
    badges: ["APIs", "Data pipelines"],
  },
  {
    name: "Mina Kwon",
    role: "Head of Frontend",
    focus: "Experience, design systems, and accessibility.",
    summary:
      "Runs frontend squads shipping dashboards and mobile; enforces performance budgets and clean handoffs from design to build.",
    badges: ["UI systems", "Performance"],
  },
];

const AboutSection = () => (
  <section id="about" className="py-12 md:py-16 lg:py-20">
    <div className="glass-panel grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/40 lg:grid-cols-[1.1fr_1.1fr]">
      <div className="space-y-6">
        <SectionHeading
          kicker="About"
          title="A collective built for velocity and trust."
          description="Founded by engineers who grew up inside distributed agencies, TechAlpha Solutions stays invisible while making you look faster, sharper, and senior."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {history.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 shadow-inner shadow-white/5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-100">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-slate-200/85">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-100">
            Stack and guilds
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="chip bg-white/10 text-xs font-semibold text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-5 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-100">
              Leadership and pods
            </p>
            <h3 className="font-display text-2xl text-white">Hands-on leads</h3>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-200">
            5-10 seat pods
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-white/5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-lg text-white">{leader.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-100">
                    {leader.role}
                  </p>
                </div>
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-400/70 via-emerald-300/70 to-amber-200/70" />
              </div>
              <p className="mt-3 text-sm text-slate-200/85">{leader.focus}</p>
              <p className="mt-2 text-xs text-slate-300">{leader.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {leader.badges.map((badge) => (
                  <span
                    key={badge}
                    className="chip bg-white/10 px-3 py-1 text-[11px] font-semibold text-white"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-4">
            <p className="font-display text-3xl text-white">98%</p>
            <p className="mt-1 uppercase tracking-wide">On-time</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-4">
            <p className="font-display text-3xl text-white">12h</p>
            <p className="mt-1 uppercase tracking-wide">SLA replies</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-4">
            <p className="font-display text-3xl text-white">0</p>
            <p className="mt-1 uppercase tracking-wide">Client-facing risk</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
