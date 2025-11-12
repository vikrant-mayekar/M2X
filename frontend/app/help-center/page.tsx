import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Help Center | M2X – Machine to Exchange",
  description:
    "Find quick answers to common questions about M2X listings, payments, and account management.",
};

const faqs = [
  {
    question: "How do I list my machine on M2X?",
    answer:
      "Create an account, upload detailed photos and specifications, and schedule an inspection slot. Our onboarding team verifies ownership and activates the listing within 48 hours.",
  },
  {
    question: "What documents are required for verification?",
    answer:
      "We request proof of ownership, maintenance/service logs, and a government-issued ID. Additional paperwork may be required for specialised equipment.",
  },
  {
    question: "How are payments handled?",
    answer:
      "Payments are routed through secure escrow. Buyers transfer funds to M2X, we facilitate inspection and logistics, then release the payout to the seller.",
  },
  {
    question: "Can I request live inspection videos?",
    answer:
      "Yes. Our inspection partners capture HD videos, operational tests, and key measurements. Buyers can also join live video calls during inspections.",
  },
];

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Help Center</p>
          <h1 className="text-4xl font-bold">FAQs & Quick Guides</h1>
          <p className="text-white/70 text-lg">
            Everything you need to know to get started with buying or selling on M2X.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border border-border rounded-xl bg-card p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-foreground mb-2">
                {faq.question}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

