import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About Us | M2X – Machine to Exchange",
  description:
    "Discover the story behind M2X and how we are digitising the industrial equipment marketplace.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">About Us</p>
          <h1 className="text-4xl font-bold">We Power Industrial Commerce</h1>
          <p className="text-white/70 text-lg">
            M2X connects machine owners, dealers, and buyers with curated listings, expert
            inspection, and trusted fulfilment partners.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border rounded-xl p-6 bg-card shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Built for Buyers & Sellers
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                From heavy earthmovers to specialised fabrication lines, we help companies
                discover verified machinery that matches their technical specs, budgets,
                and deployment timelines.
              </p>
            </div>
            <div className="border border-border rounded-xl p-6 bg-card shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Driven by Industrial Experts
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our founding team brings decades of experience in plant operations,
                equipment leasing, and digital commerce—ensuring every listing includes
                data buyers depend on.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <ul className="space-y-3 text-muted-foreground leading-relaxed">
              <li>• Inspection-ready listings with photos, load-test videos, and docs.</li>
              <li>• Finance and insurance partners to accelerate procurement.</li>
              <li>• Logistics orchestration for dismantling, transport, and install.</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

