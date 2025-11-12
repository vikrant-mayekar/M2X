import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Report Abuse | M2X – Machine to Exchange",
  description:
    "Notify the M2X trust & safety team about suspicious activity, fraudulent listings, or policy violations.",
};

export default function ReportAbusePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Trust & Safety</p>
          <h1 className="text-4xl font-bold">Report Abuse</h1>
          <p className="text-white/70 text-lg">
            Help us keep the M2X marketplace safe. Report suspicious listings, behaviour,
            or policy violations.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border border-border rounded-xl bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              When to report
            </h2>
            <ul className="space-y-2 text-muted-foreground leading-relaxed">
              <li>• Listings that misrepresent ownership or machine condition.</li>
              <li>• Requests for payments outside M2X escrow.</li>
              <li>• Suspicious communication, threats, or policy violations.</li>
            </ul>
          </div>

          <div className="border border-border rounded-xl bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Submit a report
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Listing ID or URL
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="https://m2x.market/listing/123"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Describe what happened and share any evidence."
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow transition hover:bg-primary/90"
              >
                Submit Report
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

