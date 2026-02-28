"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-lumos-purple opacity-10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-lumos-coral opacity-8 blur-[100px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pt-20 pb-40 md:pt-0 md:pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lumos-purple/30 bg-lumos-purple/10 text-lumos-purple-light text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-lumos-purple-light animate-pulse" />
          Vancouver · Canada · Worldwide
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
          AI that actually works
          <br />
          <span className="text-gradient-light">for your business</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Lumos helps businesses cut through the AI hype —
          designing, building, and training you on Claude-powered workflows
          that save real time and create real results.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-lumos-purple hover:bg-lumos-purple-glow text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-lumos-purple/25 hover:-translate-y-0.5"
          >
            Book a Free Consultation
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all hover:bg-white/5 backdrop-blur-sm"
          >
            See Our Services
          </a>
        </div>

        {/* Social proof strip */}
        <div className="mt-16 mb-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-lumos-purple-light" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No AI background required
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-lumos-purple-light" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Powered by Claude (Anthropic)
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-lumos-purple-light" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Results in weeks, not months
          </div>
        </div>
      </div>

    </section>
  );
}
