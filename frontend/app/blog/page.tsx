import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog | M2X – Machine to Exchange",
  description:
    "Insights on buying, selling, and maintaining industrial machinery from the M2X team.",
};

const featuredArticles = [
  {
    title: "Checklist for Evaluating Pre-Owned CNC Machines",
    excerpt:
      "Use this 9-point inspection framework before purchasing any second-hand CNC equipment.",
    date: "May 15, 2025",
    readTime: "6 min read",
  },
  {
    title: "How Financing Accelerates Industrial Upgrades",
    excerpt:
      "Explore flexible financing structures that keep your capex light while expanding capacity.",
    date: "Apr 28, 2025",
    readTime: "5 min read",
  },
  {
    title: "Decoding Asset Valuation for Heavy Equipment",
    excerpt:
      "Learn the key levers that influence resale value—usage hours, maintenance logs, and compliance.",
    date: "Apr 02, 2025",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Insights</p>
          <h1 className="text-4xl font-bold">Industrial Marketplace Blog</h1>
          <p className="text-white/70 text-lg">
            Guides, best practices, and success stories from the M2X community.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-6">
            {featuredArticles.map((article) => (
              <article
                key={article.title}
                className="border border-border rounded-xl bg-card p-6 shadow-sm transition hover:border-primary"
              >
                <p className="text-xs uppercase tracking-wide text-primary mb-2">
                  {article.date} • {article.readTime}
                </p>
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  {article.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
                <button className="mt-4 text-sm font-semibold text-primary hover:text-primary/80">
                  Coming soon →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

