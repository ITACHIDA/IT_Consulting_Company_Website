"use client";

import type React from "react";
import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  const isInvalid = useMemo(() => {
    return (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.projectType.trim() ||
      !form.message.trim()
    );
  }, [form]);

  const handleChange = (
    key: keyof FormState,
    value: FormState[keyof FormState],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isInvalid) return;

    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fallbackMailto?: string;
      };

      if (data.fallbackMailto) {
        window.location.href = data.fallbackMailto;
        setStatus("success");
        return;
      }

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to send message.";
      setError(message);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel w-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">
            Contact form
          </p>
          <h4 className="font-display text-xl text-white">Tell us about the work</h4>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-200">
          Avg reply: ~2h
        </span>
      </div>

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-200/80">
            <span className="block text-slate-100">Name</span>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-200 focus:bg-slate-900"
              placeholder="Your name"
            />
          </label>
          <label className="space-y-2 text-sm text-slate-200/80">
            <span className="block text-slate-100">Email</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-200 focus:bg-slate-900"
              placeholder="you@company.com"
            />
          </label>
        </div>
        <label className="space-y-2 text-sm text-slate-200/80">
          <span className="block text-slate-100">Project type</span>
          <input
            type="text"
            required
            value={form.projectType}
            onChange={(e) => handleChange("projectType", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-200 focus:bg-slate-900"
            placeholder="Dashboard build, API integration, QA sprint, etc."
          />
        </label>
        <label className="space-y-2 text-sm text-slate-200/80">
          <span className="block text-slate-100">Project details</span>
          <textarea
            required
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            rows={5}
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-200 focus:bg-slate-900"
            placeholder="Timeline, budget, links, and what you want us to handle."
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={isInvalid || status === "loading"}
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:-translate-y-0.5 hover:shadow-cyan-300/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </button>
        <p className="text-xs text-slate-300">
          Or email us directly at{" "}
          <a
            className="break-all font-semibold text-white underline underline-offset-4"
            href="mailto:james.wang@techalphasolutions.com"
          >
            james.wang@techalphasolutions.com
          </a>
        </p>
      </div>

      {status === "success" ? (
        <p className="mt-4 rounded-xl border border-emerald-300/40 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
          Thanks! Message sent to james.wang@techalphasolutions.com — we&apos;ll reply in ~2 hours.
        </p>
      ) : null}
      {status === "error" && error ? (
        <p className="mt-4 rounded-xl border border-rose-300/40 bg-rose-300/10 px-4 py-3 text-sm text-rose-100">
          {error}
        </p>
      ) : null}
    </form>
  );
};

export default ContactForm;
