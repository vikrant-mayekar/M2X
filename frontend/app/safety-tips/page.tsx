import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Safety Tips | M2X – Machine to Exchange",
  description:
    "Follow best practices to stay safe while buying or selling industrial equipment on M2X.",
};

const tips = [
  {
    title: "Verify Seller Credentials",
    description:
      "Only transact with verified sellers. Check the verification badge and review inspection reports before committing.",
  },
  {
    title: "Use M2X Escrow Payments",
    description:
      "Avoid direct transfers. Escrow ensures funds are released only after inspections, paperwork, and delivery confirmations.",
  },
  {
    title: "Schedule Certified Inspections",
    description:
      "Insist on M2X-certified inspection checklists covering mechanical, electrical, and control systems.",
  },
  {
    title: "Document Every Step",
    description:
      "Capture videos during dismantling and loading. Store purchase orders, delivery challans, and inspection forms safely.",
  },
];

export default function SafetyTipsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Safety Tips</p>
          <h1 className="text-4xl font-bold">Trade Securely on M2X</h1>
          <p className="text-white/70 text-lg">
            We prioritise safe, transparent transactions. Follow these guidelines to
            protect your organisation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="border border-border rounded-xl bg-card p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-foreground mb-2">
                {tip.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

