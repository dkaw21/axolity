"use client";

import { motion } from "framer-motion";
import { SolutionsHeader } from "@/app/components/solutions-header";
import { FormEvent, useState } from "react";

const useCases = [
  "Market expansion planning",
  "Operational process rollout",
  "Customer support scaling",
  "Sales operations enablement",
  "Cross-functional program execution",
  "Global team coordination",
];

const compareRows = [
  ["Speed", "Weeks of staffing and alignment.", "Objective-to-execution workflows start immediately."],
  ["Overhead", "Additional managers, vendors, and handoffs.", "Single execution layer with lower coordination load."],
  ["Consistency", "Process drift across teams and regions.", "Standardized workflows with transparent delivery."],
  ["Visibility", "Progress fragmented across tools.", "Unified console with clear operational status."],
];

export default function ScalingSolutionPage() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const submitDemo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting || !email) return;

    setSubmitting(true);
    setStatus("idle");

    try {
      const payload = new FormData();
      payload.append("email", email);
      payload.append("source", "scaling_solution_modal");

      const response = await fetch("https://formspree.io/f/xvzbdvbw", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) throw new Error("submit-failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SolutionsHeader />

      <main className="mx-auto w-[min(1200px,calc(100vw-32px))] space-y-8 pb-20 pt-32">
        <section className="relative overflow-hidden rounded-3xl border border-emerald-300/30 bg-black/40 p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(30,215,96,0.22),rgba(0,0,0,0.92)_62%)]" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-[1.05] md:text-7xl">
                Scale the outcome.
                <span className="mt-2 block text-[#1ed760]">Not the overhead.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/82 md:text-2xl">
                Expand execution capacity across teams, regions, and workflows without adding coordination drag.
              </p>
              <p className="mt-4 max-w-2xl text-base text-white/72 md:text-lg">
                Axolity orchestrates staffed AI agents to route work, maintain standards, and deliver measurable operational output.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => setOpen(true)}
                  className="rounded-full border border-emerald-200/80 bg-gradient-to-b from-emerald-200 to-emerald-400 px-8 py-4 text-xl font-bold text-emerald-950 shadow-[0_0_28px_rgba(109,255,158,0.45)]"
                >
                  Get a scaling demo
                </button>
              </div>
            </div>

            <motion.aside
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-emerald-300/35 bg-emerald-950/20 p-4 shadow-[0_0_32px_rgba(109,255,158,0.18)]"
            >
              <h2 className="mb-3 text-sm uppercase tracking-[0.12em] text-emerald-200/80">Operations Console</h2>
              <div className="grid gap-3">
                {[
                  ["Objective", "Open 3 new markets without increasing ops headcount"],
                  ["Workflow status", "Routing active across launch workstreams"],
                  ["Coverage", "Sales ops · Support · Enablement"],
                  ["SLA health", "97.4% tasks delivered within target"],
                  ["Bottleneck watch", "2 dependencies flagged for review"],
                  ["Readiness", "Execution package synced to team leads"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-emerald-200/20 bg-black/40 p-3">
                    <p className="text-xs uppercase tracking-[0.1em] text-emerald-200/70">{label}</p>
                    <p className="mt-1 text-sm text-white/90">{value}</p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-300/30 bg-emerald-950/15 p-8">
          <h2 className="text-3xl font-semibold md:text-5xl">Input → Output</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-300/25 bg-black/40 p-6">
              <h3 className="text-2xl font-semibold text-emerald-200">What you define</h3>
              <ul className="mt-3 space-y-2 text-white/85">
                <li>• Target outcome</li>
                <li>• Constraints and timelines</li>
                <li>• Quality and compliance standards</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-emerald-300/25 bg-black/40 p-6">
              <h3 className="text-2xl font-semibold text-emerald-200">What Axolity delivers</h3>
              <ul className="mt-3 space-y-2 text-white/85">
                <li>• Routed operational workflows</li>
                <li>• Cross-functional execution plans</li>
                <li>• Traceable delivery and reporting</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-300/30 bg-black/45 p-8">
          <h2 className="text-3xl font-semibold md:text-5xl">Where teams use Scaling</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {useCases.map((item) => (
              <article key={item} className="rounded-2xl border border-emerald-300/25 bg-emerald-950/20 p-5">
                <h3 className="text-xl font-semibold text-emerald-200">{item}</h3>
                <p className="mt-2 text-white/80">Structured execution throughput without adding management overhead.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-300/30 bg-black/45 p-8" id="how-it-works">
          <h2 className="text-3xl font-semibold md:text-5xl">Define. Route. Deliver.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Define", "Capture the operating objective and success thresholds."],
              ["Route", "Dispatch workstreams to the right AI agent teams."],
              ["Deliver", "Ship verified outputs with clear operational visibility."],
            ].map(([title, copy], index) => (
              <article key={title} className="rounded-2xl border border-emerald-300/25 bg-emerald-950/20 p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-emerald-200/70">Step {index + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold text-emerald-200">{title}</h3>
                <p className="mt-3 text-white/80">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-300/30 bg-black/45 p-8">
          <h2 className="text-3xl font-semibold md:text-5xl">Traditional expansion vs Axolity</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/20">
            <table className="min-w-full divide-y divide-white/15 text-left text-sm md:text-base">
              <thead className="bg-black/35">
                <tr>
                  <th className="px-4 py-3 font-semibold text-white/80">Category</th>
                  <th className="px-4 py-3 font-semibold text-white/80">Traditional expansion</th>
                  <th className="px-4 py-3 font-semibold text-emerald-200">Axolity Scaling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {compareRows.map(([label, traditional, axolity]) => (
                  <tr key={label} className="bg-black/25">
                    <td className="px-4 py-3 text-white/75">{label}</td>
                    <td className="px-4 py-3 text-white/70">{traditional}</td>
                    <td className="px-4 py-3 text-emerald-100">{axolity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-300/30 bg-emerald-950/20 p-8 text-center">
          <h2 className="text-3xl font-semibold md:text-5xl">Scale with operational clarity.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Replace fragmented growth operations with one coordinated execution layer designed for output.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="mt-6 rounded-full border border-emerald-200/80 bg-gradient-to-b from-emerald-200 to-emerald-400 px-8 py-4 text-xl font-bold text-emerald-950 shadow-[0_0_28px_rgba(109,255,158,0.45)]"
          >
            Start scaling with Axolity
          </button>
        </section>
      </main>

      {open ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-2xl border border-emerald-300/40 bg-black p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-[#1ed760]">Get a scaling demo</h3>
              <button onClick={() => setOpen(false)} className="text-sm text-white/70 hover:text-white">Close ✕</button>
            </div>
            <p className="mt-3 text-white/80">Share your work email and our team will reach out.</p>
            <form className="mt-5 space-y-3" onSubmit={submitDemo}>
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/25 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/45 focus:border-emerald-300"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl border border-emerald-200/70 bg-gradient-to-b from-emerald-200 to-emerald-400 px-4 py-3 font-semibold text-emerald-950 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Submitting..." : "Book my demo"}
              </button>
            </form>
            {status === "success" ? <p className="mt-3 text-sm text-emerald-200">Thanks! We&apos;ll reach out shortly.</p> : null}
            {status === "error" ? <p className="mt-3 text-sm text-rose-300">Something went wrong. Please try again.</p> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
