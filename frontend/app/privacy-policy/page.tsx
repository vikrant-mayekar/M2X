import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | M2X – Machine to Exchange",
  description:
    "Understand how M2X collects, uses, and protects your personal information while using the marketplace.",
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect account information, listing details, transaction history, device data, and usage analytics. Inspection reports and documents submitted for verification are stored securely.",
  },
  {
    title: "How We Use Your Data",
    content:
      "Data allows us to verify sellers, tailor asset recommendations, prevent fraud, and streamline logistics. We may share limited information with inspection, finance, or logistics partners with user consent.",
  },
  {
    title: "Your Rights & Choices",
    content:
      "You can access, correct, or delete personal data by contacting privacy@m2x.market. Opt-out of marketing emails anytime through the unsubscribe link.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Privacy Policy
          </p>
          <h1 className="text-4xl font-bold">Protecting Your Data & Trust</h1>
          <p className="text-white/70 text-lg">
            Our policies reflect our commitment to privacy, transparency, and regulatory
            compliance.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="border border-border rounded-xl bg-card p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
          <p className="text-xs text-muted-foreground">
            Last updated: May 2025 · For questions contact privacy@m2x.market
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

