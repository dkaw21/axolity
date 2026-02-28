"use client";

import { motion } from "framer-motion";
import { SolutionsHeader } from "@/app/components/solutions-header";
import { FormEvent, useEffect, useRef, useState } from "react";

const deliverables = [
  { title: "Product strategy", text: "Clear scope, sequencing, and build priorities for execution." },
  { title: "UX flows", text: "Core journeys mapped so decisions convert directly into work." },
  { title: "Landing page copy", text: "Positioning and launch-ready messaging structured for handoff." },
  { title: "Functional specs", text: "Feature behavior, constraints, and requirements documented." },
  { title: "Workflow logic", text: "System flow and dependencies defined across build stages." },
  { title: "Documentation", text: "Handoff-ready outputs with clear next steps for your team." },
];

const consoleRows = [
  ["Objective", "Build a dating app for local dog owners"],
  ["Plan generated", "Execution architecture and phases mapped"],
  ["Workstreams", "UX flow mapped · Core feature scope drafted"],
  ["Deliverables", "Landing page drafted · Functional spec generated"],
  ["Validation", "Workflow logic defined · review pass complete"],
  ["Handoff", "Build package ready for execution"],
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
        <section className="relative overflow-hidden rounded-3xl border border-emerald-300/30 bg-black/45 p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(30,215,96,0.2),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(30,215,96,0.12),transparent_34%),radial-gradient(circle_at_52%_92%,rgba(20,90,45,0.25),transparent_40%)]" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.1fr,0.9fr]">
            <div>
              <h1 className="text-4xl font-semibold leading-[1.02] md:text-7xl">
                Come up with an idea.
                <span className="mt-2 block text-[#1ed760]">Watch it turn into reality.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-white/82 md:text-2xl">
                Set the objective. Axolity handles planning, structure, and execution.
              </p>
              <p className="mt-4 max-w-2xl text-base text-white/72 md:text-lg">
                From concept to handoff-ready output, the system turns one idea into real deliverables.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setOpen(true)}
                  className="rounded-full border border-emerald-200/80 bg-gradient-to-b from-emerald-200 to-emerald-400 px-8 py-4 text-xl font-bold text-emerald-950 shadow-[0_0_28px_rgba(109,255,158,0.45)]"
                >
                  Get Started
                </button>
                <a href="#how-it-works" className="text-emerald-100 underline-offset-4 hover:underline">
                  See how it works
                </a>
              </div>
            </div>

            <motion.aside
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-emerald-300/35 bg-emerald-950/20 p-4 shadow-[0_0_32px_rgba(109,255,158,0.18)] backdrop-blur"
            >
              <h2 className="mb-3 text-sm uppercase tracking-[0.12em] text-emerald-200/80">Build Console</h2>
              <div className="grid gap-3">
                {consoleRows.map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-emerald-200/20 bg-black/45 p-3">
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
                <li>• Describe the objective</li>
                <li>• Set constraints or priorities</li>
                <li>• Add preferences if needed</li>
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
                <li>• Workflow logic</li>
                <li>• Documentation</li>
                <li>• Handoff-ready output</li>
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
                <li>• Execution across workstreams</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-emerald-300/25 bg-emerald-950/20 p-5">
              <h3 className="text-2xl font-semibold text-emerald-200">Deliver</h3>
              <ul className="mt-3 space-y-2 text-white/80">
                <li>• Handoff-ready outputs</li>
                <li>• Clear documentation and next steps</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-300/35 bg-emerald-950/20 p-10 text-center shadow-[0_0_28px_rgba(109,255,158,0.18)]">
          <h2 className="text-4xl font-semibold md:text-6xl">Stop managing prompts. Start shipping outcomes.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Tell Axolity what you want built — we turn it into execution-ready output.
          </p>
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
              <button
                type="submit"
                disabled={submitting}
                className="mt-3 w-full rounded-xl border border-emerald-200/70 bg-gradient-to-b from-emerald-200 to-emerald-400 px-4 py-3 font-semibold text-emerald-950 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Submitting..." : "Get Started"}
              </button>
            </form>
            {status === "success" ? <p className="mt-3 text-emerald-200">Thanks — we&apos;ll reach out shortly.</p> : null}
            {status === "error" ? <p className="mt-3 text-rose-300">Something went wrong. Please try again.</p> : null}
          </div>
        </div>
      )}
    </div>
  );
}
