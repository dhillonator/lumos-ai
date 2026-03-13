export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-16 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-6 bg-parchment text-charcoal flex items-center justify-center text-xs font-bold font-sans">
                CC
              </span>
              <span className="text-parchment font-sans font-semibold text-sm">Chanan Consulting</span>
            </div>
            <p className="text-parchment/40 text-sm leading-relaxed max-w-xs">
              AI consulting for growing businesses. We help you adopt Claude and
              AI tools that actually work for your team.
            </p>
            <p className="text-parchment/25 text-xs mt-4">
              Vancouver, BC · Canada
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-parchment/50 font-sans text-xs uppercase tracking-widest mb-5">Services</p>
            <ul className="flex flex-col gap-3">
              {["AI Strategy", "Implementation", "Team Training", "Ongoing Support"].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-parchment/40 hover:text-parchment/70 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-parchment/50 font-sans text-xs uppercase tracking-widest mb-5">Company</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "How It Works", href: "#process" },
                { label: "Why Chanan", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-parchment/40 hover:text-parchment/70 text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-parchment/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-parchment/25 text-xs">
            © {year} Chanan Consulting. All rights reserved.
          </p>
          <p className="text-parchment/20 text-xs">
            Powered by{" "}
            <span className="text-amber/60">Claude</span>
            {" "}· Built with care in Vancouver
          </p>
        </div>
      </div>
    </footer>
  );
}
