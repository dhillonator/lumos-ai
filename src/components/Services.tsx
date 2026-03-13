export default function Services() {
  const services = [
    {
      number: "01",
      title: "AI Strategy",
      subtitle: "Know before you build",
      description:
        "We audit your current workflows, identify the highest-leverage AI opportunities, and design a clear roadmap for Claude adoption — so you invest in what actually moves the needle.",
      highlights: ["Workflow audit", "ROI prioritization", "Custom AI roadmap"],
    },
    {
      number: "02",
      title: "Implementation",
      subtitle: "We build it with you",
      description:
        "From Claude API integrations to custom internal tools — we design and build AI-powered solutions that slot directly into your existing software stack with minimal disruption.",
      highlights: ["API integration", "Custom tooling", "Workflow automation"],
    },
    {
      number: "03",
      title: "Team Training",
      subtitle: "Skills that stick",
      description:
        "Hands-on workshops tailored to your team's role and industry. Your people learn to prompt effectively, automate repetitive tasks, and use Claude confidently — without IT help.",
      highlights: ["Role-based workshops", "Prompt engineering", "Ongoing Q&A support"],
    },
    {
      number: "04",
      title: "Ongoing Support",
      subtitle: "Your AI partner, long term",
      description:
        "Monthly retainer packages for businesses that want to keep improving. We monitor your AI workflows, add new capabilities as Claude evolves, and ensure you never fall behind.",
      highlights: ["Monthly check-ins", "New capability rollouts", "Priority support"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-parchment-dark section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">01 — What We Do</p>
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-end">
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight lg:col-span-7">
              Everything you need to go from
              <br />
              curious to capable
            </h2>
            <p className="text-ink-muted text-base leading-relaxed mt-4 lg:mt-0 lg:col-span-5">
              Whether you&apos;re just exploring AI or ready to build — we meet
              you where you are.
            </p>
          </div>
        </div>

        <div className="divider mb-16" />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-parchment-dark p-8 md:p-10 hover:bg-parchment transition-colors group"
            >
              <span className="font-serif text-4xl text-amber font-normal mb-6 block">
                {service.number}
              </span>
              <p className="text-xs font-medium uppercase tracking-widest text-ink-muted mb-2">
                {service.subtitle}
              </p>
              <h3 className="font-serif text-2xl text-ink mb-4">{service.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="border-t border-stone pt-5">
                <ul className="flex flex-col gap-2">
                  {service.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-3 text-xs text-ink-light">
                      <span className="w-3 h-px bg-amber flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
