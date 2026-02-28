export default function WhyLumos() {
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
    <section id="about" className="py-24 bg-cream-dark section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-lumos-purple font-semibold text-sm uppercase tracking-wider mb-3">
              Why Lumos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Most AI consultants
              <br />
              sell hype.{" "}
              <span className="text-gradient">We sell results.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Lumos was founded to bridge the gap between what AI can do and what
              small businesses actually experience. We&apos;ve seen too many SMBs waste
              time on tools that don&apos;t fit — and we exist to change that.
            </p>

            <div className="flex flex-col gap-6">
              {reasons.map((reason, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-lumos-purple/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-lumos-purple"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">{reason.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="relative">
            <div className="bg-navy rounded-3xl p-10 relative overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-lumos-purple opacity-15 blur-[80px]" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-lumos-purple/20 border border-lumos-purple/30 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-lumos-purple-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Free Discovery Call</h3>
                <p className="text-white/50 mb-8 leading-relaxed">
                  45 minutes. No obligations. Walk away with a clear picture of what AI
                  could do for your business — even if you don&apos;t work with us.
                </p>

                <ul className="flex flex-col gap-3 mb-8">
                  {[
                    "Identify your top AI opportunities",
                    "Get honest advice, not a sales pitch",
                    "Understand the real costs and timeline",
                    "Ask anything about Claude and AI",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-lumos-purple-light flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block text-center px-6 py-3 bg-lumos-purple hover:bg-lumos-purple-glow text-white font-semibold rounded-xl transition-colors"
                >
                  Book Your Free Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
