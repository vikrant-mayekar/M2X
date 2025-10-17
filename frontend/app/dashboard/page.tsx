import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Dashboard } from "@/components/dashboard"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Dashboard />
      <Footer />
    </main>
  )
}
