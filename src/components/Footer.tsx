export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy py-16 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-lumos-purple flex items-center justify-center text-white font-bold text-sm">
                L
              </span>
              <span className="text-white font-bold text-lg">Lumos</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              AI consulting for growing businesses. We help you adopt Claude and
              AI tools that actually work for your team.
            </p>
            <p className="text-white/30 text-xs mt-4">
              Vancouver, BC · Canada
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-white/70 font-semibold text-sm mb-4">Services</p>
            <ul className="flex flex-col gap-2.5">
              {[
                "AI Strategy",
                "Implementation",
                "Team Training",
                "Ongoing Support",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-white/40 hover:text-white/70 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white/70 font-semibold text-sm mb-4">Company</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "How It Works", href: "#process" },
                { label: "Why Lumos", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/40 hover:text-white/70 text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} Lumos AI Consulting. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Powered by{" "}
            <span className="text-lumos-purple-light/60">Claude</span> ·
            Built with care in Vancouver
          </p>
        </div>
      </div>
    </footer>
  );
}
