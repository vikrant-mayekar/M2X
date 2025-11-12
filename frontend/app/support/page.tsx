import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Support | M2X – Machine to Exchange",
  description:
    "Get assistance with listings, transactions, inspections, and account management on M2X.",
};

const supportChannels = [
  {
    title: "Ticket Support",
    description:
      "Raise a ticket for listing upgrades, inspection requests, or post-sale assistance.",
    contact: "support@m2x.market",
    sla: "Response within 12 business hours",
  },
  {
    title: "Seller Hotline",
    description:
      "Priority lane for sellers needing help with documentation, verification, or pricing.",
    contact: "+91 98765 44400",
    sla: "Mon–Sat 9:00 – 19:00 IST",
  },
  {
    title: "Buyer Advisory",
    description:
      "Talk to procurement specialists for asset recommendations and financing partners.",
    contact: "+91 91234 55660",
    sla: "Mon–Sat 9:00 – 19:00 IST",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Support</p>
          <h1 className="text-4xl font-bold">We Are Here to Help</h1>
          <p className="text-white/70 text-lg">
            Reach our specialists for onboarding, asset discovery, financing, or dispute
            resolution.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportChannels.map((channel) => (
              <div
                key={channel.title}
                className="border border-border rounded-xl bg-card p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-foreground mb-2">
                  {channel.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {channel.description}
                </p>
                <p className="text-sm font-medium text-primary">{channel.contact}</p>
                <p className="text-xs text-muted-foreground mt-1">{channel.sla}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

