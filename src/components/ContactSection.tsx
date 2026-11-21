"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Users,
  Sparkles,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { PROFILE, REFERENCES } from "@/data/portfolio";

const ELEGANT_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative bg-[#120910] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Bold Magazine Spread Header + Giant Direct Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: ELEGANT_EASE }}
          className="border-b border-white/12 pb-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#CE0058]/50 bg-[#1C0E18] px-4 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#F79B02]">
            <Sparkles className="h-3.5 w-3.5 text-[#CE0058]" />
            Open for Opportunities &amp; Collaborations
          </span>

          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-[#FFF5EC] sm:text-6xl">
              Let&apos;s Create Something{" "}
              <span className="text-[#DF5000]">Memorable.</span>
            </h2>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#CE0058] px-5 py-3 font-mono text-xs font-bold text-[#FFF5EC] transition-colors hover:bg-[#DF5000] sm:text-sm"
              >
                <Mail className="h-4 w-4" />
                {PROFILE.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#1C0E18] px-4 py-3 font-mono text-xs font-bold text-[#FFF5EC] transition-colors hover:border-[#F79B02] hover:text-[#F79B02]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#F79B02]" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Asymmetric Studio Desk Layout */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Vibrant Direct Channels Block + Compact References */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: ELEGANT_EASE }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            {/* Solid Pink & Orange Social Channels Card */}
            <div className="overflow-hidden rounded-3xl bg-[#CE0058] p-6 text-[#FFF5EC] sm:p-7">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FFF5EC]/80">
                Direct Channels
              </span>

              <div className="mt-4 divide-y divide-white/20">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3.5"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-[#F79B02]" />
                    <div>
                      <span className="block font-display text-sm font-extrabold">
                        LinkedIn
                      </span>
                      <span className="block font-mono text-[10px] text-[#FFF5EC]/80">
                        in/graciella-pastoral-a7775a4155
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3.5"
                >
                  <div className="flex items-center gap-3">
                    <Github className="h-4 w-4 text-[#F79B02]" />
                    <div>
                      <span className="block font-display text-sm font-extrabold">
                        GitHub
                      </span>
                      <span className="block font-mono text-[10px] text-[#FFF5EC]/80">
                        github.com/graeeez
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={`tel:${PROFILE.phone}`}
                  className="group flex items-center justify-between py-3.5"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#F79B02]" />
                    <div>
                      <span className="block font-display text-sm font-extrabold">
                        Phone
                      </span>
                      <span className="block font-mono text-[10px] text-[#FFF5EC]/80">
                        {PROFILE.phone}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="flex items-center gap-3 pt-3.5">
                  <MapPin className="h-4 w-4 text-[#F79B02]" />
                  <div>
                    <span className="block font-display text-sm font-extrabold">
                      Location
                    </span>
                    <span className="block font-mono text-[10px] text-[#FFF5EC]/80">
                      {PROFILE.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Warm Orange Character References Strip */}
            <div className="rounded-3xl bg-[#DF5000] p-6 text-[#FFF5EC]">
              <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#FFF5EC]/90">
                <Users className="h-3.5 w-3.5 text-[#F79B02]" />
                Character References
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {REFERENCES.map((ref) => (
                  <div
                    key={ref.name}
                    className="rounded-2xl bg-[#120910]/25 p-3.5"
                  >
                    <p className="font-display text-xs font-extrabold text-[#FFF5EC]">
                      {ref.name}
                    </p>
                    <p className="mt-0.5 text-[11px] font-semibold text-[#F79B02]">
                      {ref.title}
                    </p>
                    <p className="text-[10px] text-[#FFF5EC]/80">{ref.org}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial Minimal-Line Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: ELEGANT_EASE }}
            className="flex flex-col justify-between rounded-3xl border border-white/12 bg-[#1C0E18] p-7 sm:p-9 lg:col-span-7"
          >
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#F79B02]">
                Project Inquiry
              </span>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-[#FFF5EC] sm:text-3xl">
                Send a Quick Note
              </h3>
              <p className="mt-1 text-sm text-[#DAC4BA]">
                Have a project idea, internship role, or creative brief? Drop a
                note and I&apos;ll reply soon.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: ELEGANT_EASE }}
                  className="mt-8 rounded-3xl bg-[#CE0058] p-8 text-center text-[#FFF5EC]"
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF5EC] text-[#CE0058]">
                    <Check className="h-7 w-7" />
                  </span>
                  <h4 className="mt-4 font-display text-2xl font-extrabold">
                    Message Received!
                  </h4>
                  <p className="mt-2 text-sm text-[#FFF5EC]/90">
                    Thank you for reaching out. You can also connect on{" "}
                    <a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#F79B02] underline"
                    >
                      LinkedIn
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full bg-[#120910] px-6 py-2.5 text-xs font-extrabold text-[#F79B02] transition-colors hover:bg-[#DF5000] hover:text-white"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#F79B02]"
                      >
                        01 / Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Alex Rivera"
                        className="mt-2 w-full border-b-2 border-white/15 bg-transparent pb-3 text-base text-[#FFF5EC] placeholder-[#DAC4BA]/45 outline-none transition-colors focus:border-[#CE0058]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#F79B02]"
                      >
                        02 / Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="mt-2 w-full border-b-2 border-white/15 bg-transparent pb-3 text-base text-[#FFF5EC] placeholder-[#DAC4BA]/45 outline-none transition-colors focus:border-[#CE0058]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#F79B02]"
                    >
                      03 / Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your project, team, or idea..."
                      className="mt-2 w-full resize-none border-b-2 border-white/15 bg-transparent pb-3 text-base text-[#FFF5EC] placeholder-[#DAC4BA]/45 outline-none transition-colors focus:border-[#DF5000]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#DF5000] px-8 py-4 text-sm font-extrabold text-[#FFF5EC] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#CE0058] sm:w-auto"
                    >
                      <Send className="h-4 w-4 text-[#F79B02]" />
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#CE0058] font-display text-xs font-extrabold text-[#FFF5EC]">
              GP
            </span>
            <span className="font-display text-sm font-extrabold text-[#FFF5EC]">
              Graciella E. Pastoral
            </span>
          </div>
          <p className="font-mono text-xs font-medium text-[#DAC4BA]">
            Crafted with Next.js, Three.js &amp; Framer Motion • © 2026
          </p>
        </footer>
      </div>
    </section>
  );
}
