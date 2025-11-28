type SectionHeadingProps = {
  kicker: string;
  title: string;
  description: string;
};

const SectionHeading = ({ kicker, title, description }: SectionHeadingProps) => (
  <div className="mb-10 space-y-3">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
      {kicker}
    </p>
    <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
      {title}
    </h2>
    <p className="max-w-3xl text-lg text-slate-200/80">{description}</p>
  </div>
);

export default SectionHeading;
