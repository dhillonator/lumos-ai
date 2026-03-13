"use client";

export default function Hero() {
  return (
    <section className="bg-parchment min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">

          {/* Left: Main content */}
          <div className="lg:col-span-8">
            <p className="section-label mb-10">Vancouver · Canada · Worldwide</p>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-[4.5rem] text-ink leading-[1.06] tracking-tight mb-7">
              AI that actually works
              <br />
              <em className="text-amber not-italic">for your business</em>
            </h1>

            <p className="text-ink-muted text-lg leading-relaxed max-w-xl mb-10">
              Chanan Consulting helps businesses cut through the AI hype —
              designing, building, and training you on Claude-powered workflows
              that save real time and create real results.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
              <a
                href="#contact"
                className="px-6 py-3 bg-ink text-parchment text-sm font-medium rounded hover:bg-ink-light transition-colors"
              >
                Book a Free Consultation
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors py-3"
              >
                See Our Services
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-ink-muted font-sans">
              <span>No AI background required</span>
              <span className="text-stone hidden sm:inline">·</span>
              <span>Powered by Claude (Anthropic)</span>
              <span className="text-stone hidden sm:inline">·</span>
              <span>Results in weeks, not months</span>
            </div>
          </div>

          {/* Right: Editorial aside */}
          <div className="hidden lg:block lg:col-span-4 pt-4">
            <div className="border-l border-stone pl-8">
              <p className="text-xs uppercase tracking-widest text-ink-muted mb-6 font-sans">
                What we do
              </p>
              <ul className="space-y-5">
                {["AI Strategy", "Implementation", "Team Training", "Ongoing Support"].map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-ink-light font-medium">
                    <span className="w-4 h-px bg-amber flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-stone">
                <blockquote className="font-serif text-2xl text-ink leading-snug mb-3">
                  &ldquo;Results in weeks,
                  <br />
                  not months.&rdquo;
                </blockquote>
                <p className="text-xs text-ink-muted font-sans">Chanan Consulting</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
