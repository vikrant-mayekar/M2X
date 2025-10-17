import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PromoSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/20 to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ready to Sell Your Equipment?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Post your ad for free and reach thousands of buyers looking for industrial equipment in your area.
          </p>
          <Link href="/post-ad">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Post Your Ad Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
