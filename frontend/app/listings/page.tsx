"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ListingFilters } from "@/components/listing-filters"
import { ListingGrid } from "@/components/listing-grid"

export default function ListingsPage() {
  const [filters, setFilters] = useState({
    category: "",
    priceMin: 0,
    priceMax: 1000000,
    condition: "",
    location: "",
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Browse Listings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ListingFilters filters={filters} setFilters={setFilters} />
          </div>

          {/* Listings Grid */}
          <div className="lg:col-span-3">
            <ListingGrid filters={filters} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
