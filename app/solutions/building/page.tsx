"use client";

import { motion } from "framer-motion";
import { SolutionsHeader } from "@/app/components/solutions-header";
import { FormEvent, useEffect, useRef, useState } from "react";

const deliverables = [
  { title: "Product strategy", text: "Clear direction, scope, and phased execution priorities." },
  { title: "Wireframes / UX flows", text: "Core journeys mapped so product decisions are executable." },
  { title: "Landing page copy", text: "Positioning and page structure ready for launch." },
  { title: "Functional specs", text: "Feature behavior and system requirements documented." },
  { title: "Workflow logic", text: "Operational flow mapped across build and delivery steps." },
  { title: "Documentation / handoff", text: "Handoff-ready outputs with next steps your team can run." },
];

export default function BuildingSolutionPage() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const submitDemo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting || !email) return;

    setSubmitting(true);
    setStatus("idle");

    try {
      const payload = new FormData();
      payload.append("email", email);
      payload.append("source", "building_solution_modal");

      const response = await fetch("https://formspree.io/f/xvzbdvbw", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) throw new Error("submit-failed");
      setStatus("success");
      setEmail("");
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      closeTimerRef.current = setTimeout(() => {
        setOpen(false);
        setStatus("idle");
      }, 7000);
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <SolutionsHeader />

      <main id="top" className="mx-auto w-[min(1200px,calc(100vw-32px))] space-y-8 pb-20 pt-32">
        <section className="relative overflow-hidden rounded-3xl border border-emerald-300/30 bg-black/40 p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(30,215,96,0.22),rgba(0,0,0,0.92)_62%)]" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-[1.02] md:text-7xl">
                Come up with an idea.
                <span className="mt-2 block text-[#1ed760]">Watch it turn into reality.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/82 md:text-2xl">
                Let Axolity handle everything in between. Build, plan, and ship outcomes without expanding headcount.
              </p>
              <p className="mt-4 max-w-2xl text-base text-white/72 md:text-lg">
                Axolity turns a single objective into an execution plan and handoff-ready deliverables, produced by a staffed AI agent team working 24/7.
              </p>

              <div className="mt-8">
                <button
                  onClick={() => setOpen(true)}
                  className="rounded-full border border-emerald-200/80 bg-gradient-to-b from-emerald-200 to-emerald-400 px-8 py-4 text-xl font-bold text-emerald-950 shadow-[0_0_28px_rgba(109,255,158,0.45)]"
                >
                  Get Started
                </button>
                <a href="#how-it-works" className="mt-3 block w-fit text-emerald-100 underline-offset-4 hover:underline">
                  See how it works
                </a>
              </div>
            </div>

            <motion.aside
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-emerald-300/35 bg-emerald-950/20 p-4 shadow-[0_0_32px_rgba(109,255,158,0.18)]"
            >
              <h2 className="mb-3 text-sm uppercase tracking-[0.12em] text-emerald-200/80">Build Console</h2>
              <div className="grid gap-3">
                {[
                  ["Objective", "Build a dating app for people that walk dogs in the same area"],
                  ["System plan", "Plan generated"],
                  ["Workstreams", "UX flow mapped · Core logic scoped"],
                  ["Deliverables", "Landing page drafted · App structure defined"],
                  ["Status", "Execution in progress across agent team"],
                  ["Validation / Handoff", "Handoff package ready"],
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
          <h2 className="text-3xl font-semibold md:text-5xl">One objective in. Full execution out.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-300/25 bg-black/40 p-6">
              <h3 className="text-2xl font-semibold text-emerald-200">What you do</h3>
              <ul className="mt-3 space-y-2 text-white/85">
                <li>• Describe your objective</li>
                <li>• Set priorities or constraints</li>
                <li>• Provide preferences if needed</li>
              </ul>
              <p className="mt-4 text-sm text-white/70">
                <span className="font-semibold text-emerald-200">Example:</span> Build a dating app for people that walk their dogs in the same area.
              </p>
            </article>
            <article className="rounded-2xl border border-emerald-300/25 bg-black/40 p-6">
              <h3 className="text-2xl font-semibold text-emerald-200">What Axolity delivers</h3>
              <ul className="mt-3 space-y-2 text-white/85">
                <li>• Execution plan</li>
                <li>• Assets</li>
                <li>• Copy</li>
                <li>• Code</li>
                <li>• Workflows</li>
                <li>• Documentation</li>
                <li>• Handoff-ready outputs</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-300/30 bg-black/45 p-8">
          <h2 className="text-3xl font-semibold md:text-5xl">Deliverables you can use immediately</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {deliverables.map((item) => (
              <article key={item.title} className="rounded-2xl border border-emerald-300/25 bg-emerald-950/20 p-5">
                <h3 className="text-xl font-semibold text-emerald-200">{item.title}</h3>
                <p className="mt-2 text-white/80">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-300/30 bg-black/45 p-8" id="how-it-works">
          <h2 className="text-3xl font-semibold md:text-5xl">Brief. Build. Deliver.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-emerald-300/25 bg-emerald-950/20 p-5">
              <h3 className="text-2xl font-semibold text-emerald-200">Brief</h3>
              <ul className="mt-3 space-y-2 text-white/80">
                <li>• Objective + requirements</li>
                <li>• Constraints + success criteria</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-emerald-300/25 bg-emerald-950/20 p-5">
              <h3 className="text-2xl font-semibold text-emerald-200">Build</h3>
              <ul className="mt-3 space-y-2 text-white/80">
                <li>• Planning + asset generation</li>
                <li>• Execution across key workstreams</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-emerald-300/25 bg-emerald-950/20 p-5">
              <h3 className="text-2xl font-semibold text-emerald-200">Deliver</h3>
              <ul className="mt-3 space-y-2 text-white/80">
                <li>• Handoff-ready outputs</li>
                <li>• Clear next steps and documentation</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-300/30 bg-black/45 p-8">
          <h2 className="text-3xl font-semibold md:text-5xl">Why teams replace agency overhead with Axolity</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-white/20 bg-black/35 p-4">
              <h3 className="text-2xl font-semibold text-white">Agency</h3>
              {[
                ["Speed", "Project queues and handoffs slow delivery."],
                ["Cost / overhead", "Retainers plus layered account management."],
                ["Iteration frequency", "Optimization often comes in scheduled batches."],
                ["Deliverable transparency", "Outputs spread across threads and tools."],
                ["Team burden", "Internal team still manages coordination overhead."],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/15 bg-black/40 p-3">
                  <p className="text-xs uppercase tracking-[0.08em] text-white/60">{label}</p>
                  <p className="mt-1 text-white/80">{value}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3 rounded-2xl border border-emerald-300/35 bg-emerald-950/20 p-4 shadow-[0_0_20px_rgba(109,255,158,0.15)]">
              <h3 className="text-2xl font-semibold text-emerald-200">Axolity</h3>
              {[
                ["Speed", "One objective maps directly to an execution system."],
                ["Cost / overhead", "Lean run model with lower management drag."],
                ["Iteration frequency", "Continuous build and refinement cycles."],
                ["Deliverable transparency", "Structured output trail and handoff package."],
                ["Team burden", "Less operational load on your internal team."],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-emerald-300/30 bg-black/35 p-3">
                  <p className="text-xs uppercase tracking-[0.08em] text-emerald-200/70">{label}</p>
                  <p className="mt-1 text-white/85">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-300/35 bg-emerald-950/20 p-10 text-center shadow-[0_0_28px_rgba(109,255,158,0.18)]">
          <h2 className="text-4xl font-semibold md:text-6xl">Stop managing prompts. Start shipping outcomes.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">Tell Axolity what you want built — we turn it into execution-ready output.</p>
          <button
            onClick={() => setOpen(true)}
            className="mt-7 rounded-full border border-emerald-200/80 bg-gradient-to-b from-emerald-200 to-emerald-400 px-8 py-4 text-xl font-bold text-emerald-950 shadow-[0_0_28px_rgba(109,255,158,0.45)]"
          >
            Get Started
          </button>
          <a href="#top" className="mx-auto mt-3 block w-fit text-emerald-100 underline underline-offset-4">
            Back to top
          </a>
        </section>
      </main>

      {open && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-black/75 px-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-xl rounded-2xl border border-emerald-300/30 bg-emerald-950/35 p-6 shadow-[0_0_24px_rgba(109,255,158,0.2)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="build-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="build-modal-title" className="text-3xl font-semibold">Get Started with Building</h3>
            <p className="mt-2 text-white/80">Enter your work email and Axolity will send a guided next step.</p>
            <form className="mt-4" onSubmit={submitDemo}>
              <input
                name="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your work email"
                className="h-12 w-full rounded-xl border border-emerald-300/35 bg-black/45 px-4 text-white outline-none focus:border-emerald-200/70"
              />
              <div className="mt-3 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full border border-emerald-200/80 bg-gradient-to-b from-emerald-200 to-emerald-400 px-6 py-2 font-semibold text-emerald-950 disabled:opacity-60"
                >
                  Notify me
                </button>
                <button type="button" onClick={() => setOpen(false)} className="text-emerald-100 underline underline-offset-4">
                  Close
                </button>
              </div>
            </form>
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-center text-sm text-[rgba(183,228,255,0.92)]"
              >
                An agent will reach out to you shortly
              </motion.p>
            )}
            {status === "error" && <p className="mt-3 text-center text-sm text-rose-300">Something went wrong. Please try again.</p>}
          </div>
        </div>
      )}
    </div>
  );
}
