import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Cookie Policy | M2X – Machine to Exchange",
  description:
    "Learn how M2X uses cookies and similar technologies to improve your browsing experience.",
};

const cookies = [
  {
    title: "Essential Cookies",
    description:
      "Required for secure login, session management, and enabling listing actions such as favourites or saved filters.",
  },
  {
    title: "Analytics Cookies",
    description:
      "Help us measure traffic, understand user flows, and improve marketplace performance. Collected data is aggregated and anonymised.",
  },
  {
    title: "Preference Cookies",
    description:
      "Store your preferred language, default search filters, and dashboard layouts for a faster experience.",
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Cookie Policy
          </p>
          <h1 className="text-4xl font-bold">Managing Cookies & Preferences</h1>
          <p className="text-white/70 text-lg">
            M2X uses cookies to deliver secure sessions, personalised suggestions, and
            product insights. You can manage them anytime.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {cookies.map((cookie) => (
            <div
              key={cookie.title}
              className="border border-border rounded-xl bg-card p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {cookie.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {cookie.description}
              </p>
            </div>
          ))}
          <p className="text-sm text-muted-foreground">
            Adjust cookie preferences from your account settings or reach us at
            privacy@m2x.market.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

