import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service | M2X – Machine to Exchange",
  description:
    "Review the terms that govern your access to and use of the M2X marketplace.",
};

const clauses = [
  {
    title: "Acceptance of Terms",
    description:
      "By creating an account or using M2X, you agree to follow these terms, our privacy policy, and any supplemental guidelines shared for specific services.",
  },
  {
    title: "Listing Responsibilities",
    description:
      "Sellers must provide accurate information, proof of ownership, and cooperate with inspections. M2X may suspend listings if discrepancies are found.",
  },
  {
    title: "Transactional Policies",
    description:
      "All payments must be routed through approved channels. Buyers agree to inspection windows and release timelines stated within the transaction workflow.",
  },
  {
    title: "Limitation of Liability",
    description:
      "M2X facilitates discovery and logistics but does not accept liability for consequential damages. Our liability is limited to fees collected for a specific transaction.",
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Terms of Service
          </p>
          <h1 className="text-4xl font-bold">Usage Terms & Obligations</h1>
          <p className="text-white/70 text-lg">
            Please read these terms carefully before accessing or transacting on M2X.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {clauses.map((clause) => (
            <div
              key={clause.title}
              className="border border-border rounded-xl bg-card p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {clause.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {clause.description}
              </p>
            </div>
          ))}
          <p className="text-xs text-muted-foreground">
            Last updated: May 2025 · For clarifications contact legal@m2x.market
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

