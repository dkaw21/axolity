"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FormEvent, useState } from "react";

const compareRows = [
  {
    label: "Speed",
    agency: "Launch pace tied to queue cycles and handoffs.",
    axolity: "Objective-to-launch workflow runs in one system.",
  },
  {
    label: "Cost / overhead",
    agency: "Layered account overhead and retainer drag.",
    axolity: "Lean execution model focused on output efficiency.",
  },
  {
    label: "Iteration frequency",
    agency: "Optimizations often batched weekly.",
    axolity: "Continuous creative and audience iteration.",
  },
  {
    label: "Deliverable transparency",
    agency: "Assets and decisions spread across tools.",
    axolity: "Clear output trail and optimization log.",
  },
  {
    label: "Team burden",
    agency: "Internal team still manages coordination overhead.",
    axolity: "Lower operational load through structured automation.",
  },
];

export default function MarketingSolutionPage() {
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
      payload.append("source", "marketing_solution_modal");

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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-300/30 bg-black/80 backdrop-blur">
        <nav className="mx-auto flex h-[92px] w-[min(1240px,calc(100vw-32px))] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full border border-emerald-300/40 bg-emerald-300/10" />
            <span className="text-3xl font-semibold tracking-[0.045em] text-[#1ed760]">AXOLITY</span>
          </Link>
          <div className="hidden items-center gap-14 md:flex">
            <Link href="/building" className="border-b border-emerald-300/60 pb-1 text-lg text-white drop-shadow-[0_0_10px_rgba(30,215,96,0.42)]">
              Solutions ▾
            </Link>
            <Link href="/research" className="text-lg text-white/95">Research</Link>
            <Link href="/company" className="text-lg text-white/95">Company</Link>
            <Link href="/hiring" className="text-lg text-white/95">Jobs</Link>
          </div>
          <button className="hidden rounded-full border border-white/60 px-8 py-2 text-lg md:inline-flex">Sign in</button>
        </nav>
      </header>

      <main className="mx-auto w-[min(1200px,calc(100vw-32px))] space-y-8 pb-20 pt-32">
        <section className="relative overflow-hidden rounded-3xl border border-emerald-300/30 bg-black/40 p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(30,215,96,0.22),rgba(0,0,0,0.92)_62%)]" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-[1.05] md:text-7xl">
                Set the objective.
                <span className="mt-2 block text-[#1ed760]">Axolity runs the growth system.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/80 md:text-2xl">
                Strategy, creative, launch, testing, and optimization — handled end to end.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => setOpen(true)}
                  className="rounded-full border border-emerald-200/80 bg-gradient-to-b from-emerald-200 to-emerald-400 px-8 py-4 text-xl font-bold text-emerald-950 shadow-[0_0_28px_rgba(109,255,158,0.45)]"
                >
                  Get a demo →
                </button>
                <a href="#how-it-works" className="mt-3 block w-fit text-emerald-100 underline-offset-4 hover:underline">
                  See how it works
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full border border-emerald-300/30 bg-black/40 px-3 py-1">Creative Generation</span>
                <span className="rounded-full border border-emerald-300/30 bg-black/40 px-3 py-1">Campaign Setup</span>
                <span className="rounded-full border border-emerald-300/30 bg-black/40 px-3 py-1">Continuous Optimization</span>
              </div>
            </div>

            <motion.aside
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-emerald-300/35 bg-emerald-950/20 p-4 shadow-[0_0_32px_rgba(109,255,158,0.18)]"
            >
              <h2 className="mb-3 text-sm uppercase tracking-[0.12em] text-emerald-200/80">Marketing Console</h2>
              <div className="grid gap-3">
                {[
                  ["Budget", "$45k / month"],
                  ["KPI target", "Qualified demo bookings"],
                  ["Channel mix", "Search · Paid Social · Retargeting"],
                  ["Creative library", "12 active variants / 4 in review"],
                  ["Live experiments", "Audience test A/B/C running"],
                  ["Optimization status", "Reallocating spend toward best CPA"],
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
              <h3 className="text-2xl font-semibold text-emerald-200">What you set</h3>
              <ul className="mt-3 space-y-2 text-white/85">
                <li>• Budget</li>
                <li>• KPI target</li>
                <li>• Brand constraints</li>
                <li>• Offer or objective</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-emerald-300/25 bg-black/40 p-6">
              <h3 className="text-2xl font-semibold text-emerald-200">What Axolity runs</h3>
              <ul className="mt-3 space-y-2 text-white/85">
                <li>• Creative generation</li>
                <li>• Campaign launch</li>
                <li>• Audience testing</li>
                <li>• Performance optimization</li>
                <li>• Reporting + handoff assets</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-300/30 bg-black/45 p-8" id="how-it-works">
          <h2 className="text-3xl font-semibold md:text-5xl">Execution loop</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Brief", "Set objective and operating constraints."],
              ["Launch", "Deploy creative, campaigns, and targeting."],
              ["Optimize", "Iterate continuously toward KPI efficiency."],
            ].map(([title, body], index) => (
              <article key={title} className="rounded-2xl border border-emerald-300/25 bg-emerald-950/20 p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-emerald-200/70">Step {index + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold text-emerald-200">{title}</h3>
                <p className="mt-2 text-white/80">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-300/30 bg-black/45 p-8">
          <h2 className="text-3xl font-semibold md:text-5xl">Why teams replace agency overhead with Axolity</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-white/20 bg-black/35 p-4">
              <h3 className="text-2xl font-semibold text-white">Agency</h3>
              {compareRows.map((row) => (
                <div key={row.label} className="rounded-xl border border-white/15 bg-black/40 p-3">
                  <p className="text-xs uppercase tracking-[0.08em] text-white/60">{row.label}</p>
                  <p className="mt-1 text-white/80">{row.agency}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3 rounded-2xl border border-emerald-300/35 bg-emerald-950/20 p-4 shadow-[0_0_20px_rgba(109,255,158,0.15)]">
              <h3 className="text-2xl font-semibold text-emerald-200">Axolity</h3>
              {compareRows.map((row) => (
                <div key={row.label} className="rounded-xl border border-emerald-300/30 bg-black/35 p-3">
                  <p className="text-xs uppercase tracking-[0.08em] text-emerald-200/70">{row.label}</p>
                  <p className="mt-1 text-white/85">{row.axolity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-300/35 bg-emerald-950/20 p-10 text-center shadow-[0_0_28px_rgba(109,255,158,0.18)]">
          <h2 className="text-4xl font-semibold md:text-6xl">Stop managing prompts. Start shipping outcomes.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">Tell Axolity the target and budget — we run the system.</p>
          <button
            onClick={() => setOpen(true)}
            className="mt-7 rounded-full border border-emerald-200/80 bg-gradient-to-b from-emerald-200 to-emerald-400 px-8 py-4 text-xl font-bold text-emerald-950 shadow-[0_0_28px_rgba(109,255,158,0.45)]"
          >
            Get a demo →
          </button>
        </section>
      </main>

      {open && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-black/75 px-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-xl rounded-2xl border border-emerald-300/30 bg-emerald-950/35 p-6 shadow-[0_0_24px_rgba(109,255,158,0.2)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="demo-modal-title" className="text-3xl font-semibold">Get a Marketing Solution Demo</h3>
            <p className="mt-2 text-white/80">Enter your work email and we’ll send a guided walkthrough.</p>
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
