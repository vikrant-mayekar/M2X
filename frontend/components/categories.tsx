"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Building2, Tractor, Factory, Shirt, Coffee, Home,
  Cpu, TestTube, Recycle, Wrench, Car, Wind,
  Battery, Blocks, Package2, Sprout, Ship, Building,
  Settings2
} from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    title: "Used CNC Lathe Machine",
    price: "₹2,50,000",
    location: "Pune",
    image: "/cnc-lathe-machine-industrial-equipment.jpg",
    verified: true,
  },
  {
    id: 2,
    title: "Industrial Hydraulic Press",
    price: "₹1,80,000",
    location: "Mumbai",
    image: "/hydraulic-press-industrial.jpg",
    verified: true,
  },
  {
    id: 3,
    title: "Heavy Duty Welding Machine",
    price: "₹95,000",
    location: "Bangalore",
    image: "/welding-machine-industrial.jpg",
    verified: false,
  },
  {
    id: 4,
    title: "Pneumatic Drill Set",
    price: "₹45,000",
    location: "Delhi",
    image: "/pneumatic-drill-tools.jpg",
    verified: true,
  },
]

const categories = [
  { name: "Construction & Building", icon: Building2, count: 1240, slug: "construction-building-machinery" },
  { name: "Agriculture & Farming", icon: Tractor, count: 856, slug: "agriculture-farming-equipment" },
  { name: "Industrial Manufacturing", icon: Factory, count: 2103, slug: "industrial-manufacturing-machinery" },
  { name: "Textile & Garment", icon: Shirt, count: 567, slug: "textile-garment-machines" },
  { name: "Food & Beverage", icon: Coffee, count: 934, slug: "food-beverage-processing" },
  { name: "Wood & Furniture", icon: Home, count: 642, slug: "wood-furniture-machines" },
  { name: "Electrical & Electronics", icon: Cpu, count: 1456, slug: "electrical-electronics-production" },
  { name: "Chemical & Pharma", icon: TestTube, count: 789, slug: "chemical-pharma-laboratory" },
  { name: "Recycling & Waste", icon: Recycle, count: 523, slug: "recycling-waste-management" },
  { name: "Hand Tools & Power Tools", icon: Wrench, count: 1856, slug: "hand-tools-power-tools" },
  { name: "Automobile Workshop", icon: Car, count: 1234, slug: "automobile-workshop-machines" },
  { name: "HVAC & Cooling", icon: Wind, count: 678, slug: "hvac-cooling-systems" },
  { name: "Energy & Power", icon: Battery, count: 1120, slug: "energy-power-equipment" },
  { name: "Construction Materials", icon: Blocks, count: 845, slug: "construction-material-plants" },
  { name: "Packaging & Printing", icon: Package2, count: 967, slug: "packaging-printing-machines" },
  { name: "Plastic & Rubber", icon: Sprout, count: 723, slug: "plastic-rubber-processing" },
  { name: "Marine & Heavy Transport", icon: Ship, count: 456, slug: "marine-heavy-transport" },
  { name: "Office & Commercial", icon: Building, count: 623, slug: "office-commercial-machines" },
  { name: "Spare Parts", icon: Settings2, count: 3421, slug: "spare-parts-components" },
]

export function Categories() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
  const categoriesPerPage = 4

  // Auto-rotate products
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % featuredProducts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextProduct = () => setCurrentProductIndex((prev) => (prev + 1) % featuredProducts.length)
  const prevProduct = () => setCurrentProductIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
  
  const nextCategory = () => setCurrentCategoryIndex((prev) => 
    (prev + categoriesPerPage) % categories.length
  )
  const prevCategory = () => setCurrentCategoryIndex((prev) => 
    (prev - categoriesPerPage + categories.length) % categories.length
  )

  const displayedCategories = Array.from({ length: categoriesPerPage }, (_, i) => 
    categories[(currentCategoryIndex + i) % categories.length]
  )

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50/30 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Browse machinery by industry</h2>
          <p className="text-muted-foreground">Explore our wide range of industrial equipment</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column: Sliding Categories */}
          <div className="relative">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-border shadow-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Featured Categories</h3>
              
              {/* Categories Grid */}
              <div className="grid grid-cols-2 gap-3 relative h-[400px] overflow-hidden">
                {displayedCategories.map((category, idx) => {
                  const Icon = category.icon
                  return (
                    <Link 
                      key={`${category.name}-${idx}`} 
                      href={`/listings?category=${category.slug}`} 
                      className="group"
                    >
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-4 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border border-purple-100 dark:border-slate-600 h-full">
                        <div className="flex justify-center mb-3">
                          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <h3 className="font-bold text-foreground mb-1 text-sm leading-tight">{category.name}</h3>
                        <p className="text-xs text-muted-foreground font-semibold">{category.count.toLocaleString()} ads</p>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Category Navigation */}
              <div className="mt-4 flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevCategory}
                  className="flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Prev
                </Button>
                <div className="text-sm text-muted-foreground">
                  {Math.floor(currentCategoryIndex / categoriesPerPage) + 1} / {Math.ceil(categories.length / categoriesPerPage)}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextCategory}
                  className="flex items-center gap-1"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Sliding Products (2 rows) */}
          <div className="space-y-4">
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-border shadow-lg overflow-hidden h-[240px]">
              {/* Product Slide */}
              <div 
                className="absolute inset-0 transition-transform duration-500"
                style={{ transform: `translateX(-${currentProductIndex * 100}%)` }}
              >
                <div className="flex h-full">
                  {featuredProducts.map((product) => (
                    <div key={product.id} className="min-w-full h-full p-6 flex">
                      <div className="w-32 h-32 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            {product.verified && (
                              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                                Verified
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-lg text-foreground mb-1 line-clamp-2">
                            {product.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">{product.location}</p>
                        </div>
                        <div className="text-2xl font-bold text-primary">{product.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevProduct}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 border border-border rounded-full p-2 shadow-lg hover:bg-muted transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextProduct}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 border border-border rounded-full p-2 shadow-lg hover:bg-muted transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {featuredProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProductIndex(index)}
                    className={`w-2 h-2 rounded-full transition ${
                      index === currentProductIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Second Product Row */}
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-border shadow-lg overflow-hidden h-[240px]">
              <div 
                className="absolute inset-0 transition-transform duration-500 delay-100"
                style={{ transform: `translateX(-${((currentProductIndex + 1) % featuredProducts.length) * 100}%)` }}
              >
                <div className="flex h-full">
                  {featuredProducts.map((product) => (
                    <div key={product.id} className="min-w-full h-full p-6 flex">
                      <div className="w-32 h-32 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            {product.verified && (
                              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                                Verified
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-lg text-foreground mb-1 line-clamp-2">
                            {product.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">{product.location}</p>
                        </div>
                        <div className="text-2xl font-bold text-primary">{product.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
