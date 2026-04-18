"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const subjectOptions = [
  { value: "", label: "Select a topic..." },
  { value: "hire", label: "💼 Hire Me" },
  { value: "consulting", label: "🔍 Consulting" },
  { value: "freelance", label: "🚀 Freelance Project" },
  { value: "other", label: "💬 Other" },
];

const MAX_MESSAGE = 500;

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address";
  }
  if (form.phone && !/^[\d\s\+\-\(\)]{7,15}$/.test(form.phone)) {
    errors.phone = "Enter a valid phone number";
  }
  if (!form.message.trim()) {
    errors.message = "Message is required";
  } else if (form.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<keyof FormState>>(new Set());
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    const field = id.replace("contact-", "") as keyof FormState;
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched.has(field)) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const field = e.target.id.replace("contact-", "") as keyof FormState;
    setTouched((prev) => new Set(prev).add(field));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allFields = new Set(Object.keys(form) as (keyof FormState)[]);
    setTouched(allFields);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  const inputClass = (field: keyof FormState) =>
    `w-full bg-[#0a1a1f] border rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-all font-mono ${
      touched.has(field) && errors[field]
        ? "border-[#ff3b5c]/60 focus:border-[#ff3b5c] focus:shadow-[0_0_12px_rgba(255,59,92,0.2)]"
        : "border-[#00e5cc]/15 focus:border-[#00e5cc]/50 focus:shadow-[0_0_12px_rgba(0,229,204,0.15)]"
    }`;

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5cc]/30 to-transparent" />
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[#00e5cc] text-sm mb-4">// contact.init()</div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Whether you&apos;re looking to hire or discuss QA strategies — I&apos;m here.
          </p>
          <div className="h-0.5 w-24 bg-gradient-to-r from-[#00e5cc] to-[#7c3aed] mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact info sidebar (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Get in Touch
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Open to QA Engineer roles, automation consulting, or freelance testing engagements.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "pritidandvate97@gmail.com",
                  href: "mailto:pritidandvate97@gmail.com",
                  color: "teal",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91-7057264071",
                  href: "tel:+917057264071",
                  color: "teal",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Pune, Maharashtra",
                  href: "#",
                  color: "red",
                },
                {
                  icon: ExternalLink,
                  label: "LinkedIn",
                  value: "linkedin.com/in/priti-dandvate",
                  href: "https://linkedin.com/in/priti-dandvate",
                  color: "purple",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 glass-card rounded-xl border transition-all duration-300 group ${
                    item.color === "teal"
                      ? "border-[#00e5cc]/15 hover:border-[#00e5cc]/40"
                      : item.color === "purple"
                      ? "border-[#7c3aed]/15 hover:border-[#7c3aed]/40"
                      : "border-[#ff3b5c]/15 hover:border-[#ff3b5c]/40"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      item.color === "teal"
                        ? "bg-[#00e5cc]/10"
                        : item.color === "purple"
                        ? "bg-[#7c3aed]/10"
                        : "bg-[#ff3b5c]/10"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        item.color === "teal"
                          ? "text-[#00e5cc]"
                          : item.color === "purple"
                          ? "text-[#7c3aed]"
                          : "text-[#ff3b5c]"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">{item.label}</div>
                    <div className="text-white text-sm group-hover:text-[#00e5cc] transition-colors truncate max-w-[180px]">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability note */}
            <div className="glass-card rounded-xl p-4 border border-[#00e5cc]/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#00e5cc] animate-pulse" />
                <span className="text-[#00e5cc] text-xs font-bold font-mono">Currently Available</span>
              </div>
              <p className="text-slate-500 text-xs font-mono">
                Actively looking for Senior QA Engineer opportunities. Response within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Contact form (60%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card rounded-2xl p-12 border border-[#00e5cc]/30 text-center flex flex-col items-center justify-center min-h-[400px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
                  >
                    <CheckCircle2 className="w-20 h-20 text-[#00e5cc] mb-6" />
                  </motion.div>
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Message Sent! ✓
                  </h3>
                  <p className="text-slate-400 font-mono text-sm mb-2">
                    contact.form → PASSED
                  </p>
                  <p className="text-slate-500 text-sm">I&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setTouched(new Set()); setErrors({}); }}
                    className="mt-8 px-6 py-2.5 border border-[#00e5cc]/30 text-[#00e5cc] rounded-xl text-sm font-mono hover:bg-[#00e5cc]/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass-card rounded-2xl p-8 border border-[#00e5cc]/15 space-y-5"
                >
                  <div className="font-mono text-xs text-[#00e5cc]/60 mb-1">// new_message.qa</div>

                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm text-slate-400 font-mono mb-1.5">
                        <span className="text-[#00e5cc]/50">@</span> Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("name")}
                      />
                      {touched.has("name") && errors.name && (
                        <p className="mt-1 text-xs text-[#ff3b5c] font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm text-slate-400 font-mono mb-1.5">
                        <span className="text-[#00e5cc]/50">@</span> Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("email")}
                      />
                      {touched.has("email") && errors.email && (
                        <p className="mt-1 text-xs text-[#ff3b5c] font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone + Subject row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm text-slate-400 font-mono mb-1.5">
                        <span className="text-[#00e5cc]/50">@</span> Phone (optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+91-XXXXXXXXXX"
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("phone")}
                      />
                      {touched.has("phone") && errors.phone && (
                        <p className="mt-1 text-xs text-[#ff3b5c] font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm text-slate-400 font-mono mb-1.5">
                        <span className="text-[#00e5cc]/50">@</span> Subject
                      </label>
                      <select
                        id="contact-subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full bg-[#0a1a1f] border border-[#00e5cc]/15 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00e5cc]/50 transition-all font-mono appearance-none"
                      >
                        {subjectOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-[#0a1a1f]">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label htmlFor="contact-message" className="block text-sm text-slate-400 font-mono">
                        <span className="text-[#00e5cc]/50">@</span> Message *
                      </label>
                      <span className={`text-xs font-mono ${form.message.length > MAX_MESSAGE * 0.9 ? "text-[#ff3b5c]" : "text-slate-600"}`}>
                        {form.message.length}/{MAX_MESSAGE}
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      placeholder="Tell me about the role or project..."
                      rows={5}
                      maxLength={MAX_MESSAGE}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputClass("message")} resize-none`}
                    />
                    {touched.has("message") && errors.message && (
                      <p className="mt-1 text-xs text-[#ff3b5c] font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit + Clear */}
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      id="contact-submit"
                      disabled={status === "sending"}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#00e5cc] text-[#050d0f] rounded-xl font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(0,229,204,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => { setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setErrors({}); setTouched(new Set()); }}
                      className="px-5 py-3.5 border border-white/10 text-slate-400 rounded-xl text-sm font-mono hover:border-white/20 hover:text-white transition-all"
                    >
                      Clear
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
