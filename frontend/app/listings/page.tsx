"use client"

import { Suspense, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Footer } from "@/components/footer"
import { ListingFilters } from "@/components/listing-filters"
import { ListingGrid } from "@/components/listing-grid"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

function ListingsPageContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category") ?? ""
  const decodedCategory = decodeURIComponent(categoryParam)
  const [filters, setFilters] = useState({
    category: "",
    priceMin: 0,
    priceMax: 1000000,
    condition: "",
    location: "",
  })

  useEffect(() => {
    setFilters((prev) => {
      if (prev.category === decodedCategory) {
        return prev
      }
      return {
        ...prev,
        category: decodedCategory,
      }
    })
  }, [decodedCategory])

  const breadcrumbItems = useMemo(() => {
    const items: Array<{ label: string; href?: string }> = [
      { label: "Home", href: "/" },
      { label: "Listings", href: "/listings" },
    ]

    if (filters.category) {
      items.push({ label: filters.category })
    }

    return items
  }, [filters.category])

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-border/70 bg-slate-950 py-16">
        <Image
          src="/sliders/bread.jpg"
          alt="Industrial header background"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="text-white/80">
            <BreadcrumbList>
              {breadcrumbItems.map((item, index) => (
                <BreadcrumbItem key={`${item.label}-${index}`}>
                  {item.href ? (
                    <BreadcrumbLink asChild className="text-white/80 hover:text-white">
                      <Link href={item.href}>{item.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="text-white">
                      {item.label}
                    </BreadcrumbPage>
                  )}
                  {index < breadcrumbItems.length - 1 && (
                    <BreadcrumbSeparator className="text-white/60" />
                  )}
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-8 space-y-4">
            <h1 className="text-4xl font-bold text-white">
              {filters.category ? filters.category : "Browse Listings"}
            </h1>
            <p className="text-white/75 max-w-2xl">
              Explore verified industrial machinery and equipment sourced from trusted
              sellers. Filter by category, location, and condition to find assets that fit
              your project timeline and budget.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

export default function ListingsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ListingsPageContent />
    </Suspense>
  )
}
