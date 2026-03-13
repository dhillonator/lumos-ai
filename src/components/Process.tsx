export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We start with a free 45-minute consultation to understand your business, your pain points, and where AI could make the biggest difference. No jargon, no pressure.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "We map out your custom AI strategy — which workflows to automate, which tools to build, and how to train your team. You approve the plan before anything is built.",
    },
    {
      number: "03",
      title: "Deploy",
      description:
        "We build and implement your solution, train your team in-person or remotely, and stick around to ensure it works. Most projects go live within 2–4 weeks.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-charcoal section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-amber mb-4">
            02 — How It Works
          </p>
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-end">
            <h2 className="font-serif text-4xl md:text-5xl text-parchment leading-tight lg:col-span-7">
              Simple process, real results
            </h2>
            <p className="text-parchment/50 text-base leading-relaxed mt-4 lg:mt-0 lg:col-span-5">
              From first conversation to working AI — typically in under a month.
            </p>
          </div>
        </div>

        <div className="border-t border-parchment/10 mb-16" />

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-parchment/10">
          {steps.map((step, i) => (
            <div key={i} className="bg-charcoal p-8 md:p-10">
              <span className="font-serif text-5xl text-amber font-normal mb-8 block">
                {step.number}
              </span>
              <h3 className="font-serif text-2xl text-parchment mb-4">{step.title}</h3>
              <p className="text-parchment/50 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 border-t border-parchment/10 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-serif text-xl text-parchment">
            Ready to see what AI can do for your business?
          </p>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-parchment text-ink text-sm font-medium rounded hover:bg-amber hover:text-parchment transition-colors flex-shrink-0"
          >
            Start with a free discovery call
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
