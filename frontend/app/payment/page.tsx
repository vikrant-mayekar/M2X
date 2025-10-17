"use client"

import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PaymentForm } from "@/components/payment-form"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const packageId = searchParams.get("package") || "pro"

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PaymentForm packageId={packageId} />
      <Footer />
    </main>
  )
}
