export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "AI Strategy",
      subtitle: "Know before you build",
      description:
        "We audit your current workflows, identify the highest-leverage AI opportunities, and design a clear roadmap for Claude adoption — so you invest in what actually moves the needle.",
      highlights: ["Workflow audit", "ROI prioritization", "Custom AI roadmap"],
      color: "bg-violet-50 text-lumos-purple",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      title: "Implementation",
      subtitle: "We build it with you",
      description:
        "From Claude API integrations to custom internal tools — we design and build AI-powered solutions that slot directly into your existing software stack with minimal disruption.",
      highlights: ["API integration", "Custom tooling", "Workflow automation"],
      color: "bg-orange-50 text-lumos-coral",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "Team Training",
      subtitle: "Skills that stick",
      description:
        "Hands-on workshops tailored to your team's role and industry. Your people learn to prompt effectively, automate repetitive tasks, and use Claude confidently — without IT help.",
      highlights: ["Role-based workshops", "Prompt engineering", "Ongoing Q&A support"],
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
      title: "Ongoing Support",
      subtitle: "Your AI partner, long term",
      description:
        "Monthly retainer packages for businesses that want to keep improving. We monitor your AI workflows, add new capabilities as Claude evolves, and ensure you never fall behind.",
      highlights: ["Monthly check-ins", "New capability rollouts", "Priority support"],
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-cream section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lumos-purple font-semibold text-sm uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Everything you need to go from
            <br />
            <span className="text-gradient">curious to capable</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Whether you&apos;re just exploring AI or ready to build — we meet you where you are.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-lumos-purple/20 hover:shadow-xl hover:shadow-lumos-purple/5 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl ${service.color} mb-5`}>
                {service.icon}
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                {service.subtitle}
              </p>
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-5">{service.description}</p>

              <ul className="flex flex-col gap-2">
                {service.highlights.map((h, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-lumos-purple flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
