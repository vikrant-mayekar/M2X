import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact | M2X – Machine to Exchange",
  description:
    "Get in touch with the M2X team for sales inquiries, partnerships, or support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Contact</p>
          <h1 className="text-4xl font-bold">Talk to the M2X Team</h1>
          <p className="text-white/70 text-lg">
            Whether you are buying, selling, or exploring partnerships, we are here to
            help.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Customer Success
              </h2>
              <p className="text-muted-foreground">
                support@m2x.market <br />
                +91 98765 43210
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Partnerships & OEMs
              </h2>
              <p className="text-muted-foreground">
                partnerships@m2x.market <br />
                +91 91234 56780
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Seller Onboarding
              </h2>
              <p className="text-muted-foreground">
                sellers@m2x.market <br />
                Book a slot for equipment inspection and listing activation.
              </p>
            </div>
          </div>

          <div className="border border-border rounded-xl bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Write to Us
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow transition hover:bg-primary/90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

