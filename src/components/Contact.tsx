"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setForm({ name: "", email: "", company: "", service: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="py-24 bg-cream section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <p className="text-lumos-purple font-semibold text-sm uppercase tracking-wider mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Let&apos;s talk about
              <br />
              your business
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Not sure where to start? That&apos;s exactly why we&apos;re here. Send us a
              message and we&apos;ll get back to you within one business day.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-lumos-purple/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-lumos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">Based in</p>
                  <p className="text-gray-500 text-sm">Vancouver, BC · Available across Canada & worldwide</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-lumos-purple/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-lumos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">Response time</p>
                  <p className="text-gray-500 text-sm">Within 1 business day</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-lumos-purple/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-lumos-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">Free consultation</p>
                  <p className="text-gray-500 text-sm">45-minute discovery call, no commitment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Message sent!</h3>
                  <p className="text-gray-500 mb-6">
                    Thanks for reaching out. We&apos;ll be in touch within one business day.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-lumos-purple text-sm font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full name <span className="text-lumos-coral">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-lumos-purple focus:ring-2 focus:ring-lumos-purple/10 outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email <span className="text-lumos-coral">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-lumos-purple focus:ring-2 focus:ring-lumos-purple/10 outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company name
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-lumos-purple focus:ring-2 focus:ring-lumos-purple/10 outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      I&apos;m interested in
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-lumos-purple focus:ring-2 focus:ring-lumos-purple/10 outline-none text-sm transition-colors bg-white text-gray-700"
                    >
                      <option value="">Select a service</option>
                      <option value="AI Strategy">AI Strategy</option>
                      <option value="Implementation">Implementation & Integration</option>
                      <option value="Team Training">Team Training & Workshops</option>
                      <option value="Ongoing Support">Ongoing Support</option>
                      <option value="Not sure yet">Not sure yet — let&apos;s talk</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tell us about your business <span className="text-lumos-coral">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="What does your business do? What are your biggest time drains or pain points? Where do you think AI could help?"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-lumos-purple focus:ring-2 focus:ring-lumos-purple/10 outline-none text-sm transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 bg-lumos-purple hover:bg-lumos-purple-glow disabled:opacity-60 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lumos-purple/25 disabled:translate-y-0 disabled:shadow-none"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  We respond within 1 business day. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
