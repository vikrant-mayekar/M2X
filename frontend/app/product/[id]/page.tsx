"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { SimilarAds } from "@/components/similar-ads"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-background">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductDetail productId={params.id} />
        <SimilarAds productId={params.id} />
      </div>

      <Footer />
    </main>
  )
}
