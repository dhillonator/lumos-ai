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

  const inputClass =
    "w-full px-4 py-2.5 bg-parchment border border-stone focus:border-ink focus:ring-0 outline-none text-sm text-ink placeholder:text-ink-muted/60 transition-colors rounded-sm";

  return (
    <section id="contact" className="py-24 bg-parchment-dark section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left: Info */}
          <div className="lg:col-span-2">
            <p className="section-label mb-4">04 — Get In Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-5">
              Let&apos;s talk about
              <br />
              your business
            </h2>
            <p className="text-ink-muted text-base leading-relaxed mb-10">
              Not sure where to start? That&apos;s exactly why we&apos;re here. Send us a
              message and we&apos;ll get back to you within one business day.
            </p>

            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-amber font-sans mb-1">Based in</p>
                <p className="text-ink-light text-sm">Vancouver, BC · Available across Canada &amp; worldwide</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-amber font-sans mb-1">Response time</p>
                <p className="text-ink-light text-sm">Within 1 business day</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-amber font-sans mb-1">Free consultation</p>
                <p className="text-ink-light text-sm">45-minute discovery call, no commitment</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="border border-stone p-10 flex flex-col items-start justify-center h-full">
                <div className="w-10 h-10 border border-ink flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-ink mb-2">Message sent.</h3>
                <p className="text-ink-muted text-sm mb-6">
                  Thanks for reaching out. We&apos;ll be in touch within one business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-amber text-sm font-medium hover:underline"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-stone bg-parchment p-8 md:p-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-ink-muted mb-2">
                      Full name <span className="text-amber">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-ink-muted mb-2">
                      Email <span className="text-amber">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-ink-muted mb-2">
                      Company name
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-ink-muted mb-2">
                      I&apos;m interested in
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      <option value="AI Strategy">AI Strategy</option>
                      <option value="Implementation">Implementation &amp; Integration</option>
                      <option value="Team Training">Team Training &amp; Workshops</option>
                      <option value="Ongoing Support">Ongoing Support</option>
                      <option value="Not sure yet">Not sure yet — let&apos;s talk</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-medium uppercase tracking-widest text-ink-muted mb-2">
                    Tell us about your business <span className="text-amber">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="What does your business do? What are your biggest time drains or pain points? Where do you think AI could help?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <div className="mb-4 px-4 py-3 border border-red-300 bg-red-50 text-red-700 text-sm">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 bg-ink text-parchment text-sm font-medium rounded hover:bg-ink-light disabled:opacity-60 transition-colors"
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

                <p className="text-xs text-ink-muted mt-4">
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
