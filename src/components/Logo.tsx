import type { FC } from "react";

type LogoProps = {
  withTagline?: boolean;
};

const Logo: FC<LogoProps> = ({ withTagline = true }) => (
  <div className="flex items-center gap-3">
    <div className="relative">
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/40 via-emerald-200/35 to-amber-200/30 blur-xl"
        aria-hidden="true"
      />
      <LogoMark />
    </div>
    {withTagline ? (
      <div className="leading-tight">
        <p className="font-display text-lg text-white">TechAlpha Solutions</p>
        <p className="text-xs text-slate-300">
          White-label engineering collective
        </p>
      </div>
    ) : null}
  </div>
);

const LogoMark: FC = () => (
  <svg
    className="relative h-12 w-12 drop-shadow-[0_12px_30px_rgba(94,234,212,0.28)]"
    viewBox="0 0 120 120"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id="markOuter"
        x1="14"
        y1="10"
        x2="110"
        y2="112"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#67e8f9" />
        <stop offset="1" stopColor="#a7f3d0" />
      </linearGradient>
      <linearGradient
        id="markStroke"
        x1="26"
        y1="18"
        x2="96"
        y2="102"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#e0faff" />
        <stop offset="1" stopColor="#d1ffe7" />
      </linearGradient>
      <radialGradient
        id="markGlow"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(36 24) rotate(60) scale(82)"
      >
        <stop stopColor="#67e8f9" stopOpacity="0.9" />
        <stop offset="1" stopColor="#67e8f9" stopOpacity="0" />
      </radialGradient>
    </defs>
    <path
      d="M60 8L104 32V88L60 112L16 88V32L60 8Z"
      fill="url(#markOuter)"
      fillOpacity="0.2"
      stroke="url(#markOuter)"
      strokeWidth="2.5"
    />
    <path
      d="M60 8L104 32V88L60 112L16 88V32L60 8Z"
      fill="url(#markGlow)"
    />
    <path
      d="M36 88L60 38L84 88"
      stroke="url(#markStroke)"
      strokeWidth="8.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M46 70H74"
      stroke="#e9f7ff"
      strokeWidth="7"
      strokeLinecap="round"
    />
    <path
      d="M64 30H90"
      stroke="#9ef7e0"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M78 30V50"
      stroke="#9ef7e0"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <circle cx="40" cy="30" r="5.5" fill="#e0faff" opacity="0.9" />
  </svg>
);

export default Logo;
