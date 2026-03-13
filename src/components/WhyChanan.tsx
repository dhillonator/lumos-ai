export default function WhyChanan() {
  const reasons = [
    {
      title: "Built on Claude — the safest AI",
      description:
        "We exclusively use Anthropic's Claude — rated the most safe, trustworthy, and capable AI for business use. Your data and your clients' data are protected.",
    },
    {
      title: "SMB-focused, not enterprise bloat",
      description:
        "We don't sell you a 12-month transformation program. We solve real problems for real businesses — quickly, practically, and affordably.",
    },
    {
      title: "Your team actually uses it",
      description:
        "Most AI projects fail because adoption is an afterthought. We design for humans first — training, documentation, and support included in every engagement.",
    },
    {
      title: "Local expertise, global tools",
      description:
        "Based in Vancouver, available across Canada and beyond. We understand Canadian business, privacy law (PIPEDA), and the needs of growing local companies.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-parchment section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: Content */}
          <div className="lg:col-span-7">
            <p className="section-label mb-4">03 — Why Chanan</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6">
              Most AI consultants sell hype.
              <br />
              <em className="text-amber not-italic">We sell results.</em>
            </h2>
            <p className="text-ink-muted text-base leading-relaxed mb-12 max-w-lg">
              Chanan Consulting was founded to bridge the gap between what AI can do and what
              small businesses actually experience. We&apos;ve seen too many SMBs waste
              time on tools that don&apos;t fit — and we exist to change that.
            </p>

            <div className="flex flex-col divide-y divide-stone">
              {reasons.map((reason, i) => (
                <div key={i} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex gap-4">
                    <span className="font-serif text-amber text-lg mt-0.5 flex-shrink-0 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-serif text-lg text-ink mb-1">{reason.title}</h4>
                      <p className="text-ink-muted text-sm leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Call-out block */}
          <div className="lg:col-span-5">
            <div className="border border-stone p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-amber font-sans mb-6">
                  Free Discovery Call
                </p>
                <h3 className="font-serif text-3xl text-ink mb-3 leading-snug">
                  45 minutes.
                  <br />
                  No obligations.
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-8">
                  Walk away with a clear picture of what AI could do for your business —
                  even if you don&apos;t work with us.
                </p>

                <ul className="flex flex-col gap-4 mb-10">
                  {[
                    "Identify your top AI opportunities",
                    "Get honest advice, not a sales pitch",
                    "Understand the real costs and timeline",
                    "Ask anything about Claude and AI",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink-light">
                      <span className="w-3 h-px bg-amber flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="block text-center px-6 py-3 bg-ink text-parchment text-sm font-medium rounded hover:bg-ink-light transition-colors"
              >
                Book Your Free Call
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
