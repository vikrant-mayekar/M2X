"use client"

import Link from "next/link"
import { Heart, MapPin, Clock } from "lucide-react"

interface ListingGridProps {
  filters: {
    category: string
    priceMin: number
    priceMax: number
    condition: string
    location: string
  }
}

const allAds = [
  {
    id: 1,
    title: "Used CNC Lathe Machine",
    price: 250000,
    location: "Pune",
    image: "/cnc-lathe.png",
    seller: "Rajesh Patil",
    verified: true,
    postedAt: "2 hours ago",
    category: "Machines",
    condition: "Good",
  },
  {
    id: 2,
    title: "Industrial Hydraulic Press",
    price: 180000,
    location: "Mumbai",
    image: "/hydraulic-press.png",
    seller: "Amit Kumar",
    verified: true,
    postedAt: "5 hours ago",
    category: "Machines",
    condition: "Like New",
  },
  {
    id: 3,
    title: "Heavy Duty Welding Machine",
    price: 95000,
    location: "Bangalore",
    image: "/welding-machine.png",
    seller: "Priya Singh",
    verified: false,
    postedAt: "1 day ago",
    category: "Equipment",
    condition: "Fair",
  },
  {
    id: 4,
    title: "Pneumatic Drill Set",
    price: 45000,
    location: "Delhi",
    image: "/pneumatic-drill.jpg",
    seller: "Vikram Sharma",
    verified: true,
    postedAt: "3 days ago",
    category: "Tools",
    condition: "Good",
  },
  {
    id: 5,
    title: "Industrial Compressor",
    price: 120000,
    location: "Hyderabad",
    image: "/air-compressor.jpg",
    seller: "Suresh Reddy",
    verified: true,
    postedAt: "1 week ago",
    category: "Equipment",
    condition: "Good",
  },
  {
    id: 6,
    title: "Conveyor Belt System",
    price: 350000,
    location: "Chennai",
    image: "/conveyor-belt.jpg",
    seller: "Anita Desai",
    verified: true,
    postedAt: "2 weeks ago",
    category: "Machinery",
    condition: "New",
  },
  {
    id: 7,
    title: "Metal Cutting Saw",
    price: 65000,
    location: "Pune",
    image: "/metal-cutting-saw.jpg",
    seller: "Rohan Gupta",
    verified: true,
    postedAt: "3 days ago",
    category: "Tools",
    condition: "Good",
  },
  {
    id: 8,
    title: "Electric Forklift",
    price: 280000,
    location: "Mumbai",
    image: "/electric-forklift.jpg",
    seller: "Neha Patel",
    verified: true,
    postedAt: "1 week ago",
    category: "Vehicles",
    condition: "Like New",
  },
]

export function ListingGrid({ filters }: ListingGridProps) {
  const filteredAds = allAds.filter((ad) => {
    if (filters.category && ad.category !== filters.category) return false
    if (ad.price < filters.priceMin || ad.price > filters.priceMax) return false
    if (filters.condition && ad.condition !== filters.condition) return false
    if (filters.location && ad.location !== filters.location) return false
    return true
  })

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-6">Showing {filteredAds.length} results</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAds.map((ad) => (
          <Link key={ad.id} href={`/product/${ad.id}`}>
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 group h-full flex flex-col">
              <div className="relative overflow-hidden bg-muted h-48">
                <img
                  src={ad.image || "/placeholder.svg"}
                  alt={ad.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-lg transition">
                  <Heart className="w-5 h-5 text-muted-foreground hover:text-destructive" />
                </button>
                {ad.verified && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Verified
                  </div>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition">
                  {ad.title}
                </h3>

                <p className="text-2xl font-bold text-primary mb-3">₹{ad.price.toLocaleString()}</p>

                <div className="space-y-2 mb-4 flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {ad.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {ad.postedAt}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    By <span className="font-semibold text-foreground">{ad.seller}</span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredAds.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No listings found matching your filters.</p>
        </div>
      )}
    </div>
  )
}
