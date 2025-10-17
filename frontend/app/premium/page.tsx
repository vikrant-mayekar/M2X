import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PremiumPackages } from "@/components/premium-packages"

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PremiumPackages />
      <Footer />
    </main>
  )
}
