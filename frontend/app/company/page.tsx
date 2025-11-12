import { Footer } from "@/components/footer";

export const metadata = {
  title: "Company | M2X – Machine to Exchange",
  description:
    "Learn about M2X, the trusted marketplace for industrial machines, equipment, and spare parts.",
};

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Company</p>
          <h1 className="text-4xl font-bold">M2X – Machine to Exchange</h1>
          <p className="text-white/70 text-lg">
            We are building India&apos;s most trusted industrial marketplace, connecting
            verified sellers with serious buyers across construction, manufacturing, and
            services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              What Drives M2X
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              M2X brings transparency, financing readiness, and inspection-backed
              assurance to pre-owned industrial machinery. Our mission is to make buying
              and selling equipment as seamless as ecommerce, while maintaining the rigor
              industrial assets demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Sellers",
                description:
                  "We vet every seller profile, collect documentary proof, and verify ownership before an asset goes live.",
              },
              {
                title: "Pan-India Reach",
                description:
                  "From metro yards to remote industrial clusters, our network spans 25+ cities and continues to grow.",
              },
              {
                title: "Service Partners",
                description:
                  "Through certified partners we offer inspection, dismantling, transportation, and commissioning support.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-border rounded-xl p-6 bg-card shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

