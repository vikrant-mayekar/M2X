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
    title: "Tower Crane 5T – Refurbished",
    price: 850000,
    location: "Mumbai",
    image: "/hydraulic-press.png",
    seller: "Metro Build Equipments",
    verified: true,
    postedAt: "4 hours ago",
    categoryGroup: "Construction & Building Machinery",
    condition: "Good",
  },
  {
    id: 2,
    title: "Mobile Concrete Mixer 3m³",
    price: 420000,
    location: "Delhi",
    image: "/conveyor-belt.jpg",
    seller: "Prime Infra Rentals",
    verified: true,
    postedAt: "1 day ago",
    categoryGroup: "Construction & Building Machinery",
    condition: "Like New",
  },
  {
    id: 3,
    title: "90HP Tractor with Loader",
    price: 510000,
    location: "Nagpur",
    image: "/electric-forklift.jpg",
    seller: "AgriNation Hub",
    verified: true,
    postedAt: "6 hours ago",
    categoryGroup: "Agriculture & Farming Equipment",
    condition: "Good",
  },
  {
    id: 4,
    title: "Automatic Seed Planter 4 Row",
    price: 180000,
    location: "Indore",
    image: "/pneumatic-drill.jpg",
    seller: "Harvest Smart Solutions",
    verified: false,
    postedAt: "2 days ago",
    categoryGroup: "Agriculture & Farming Equipment",
    condition: "Like New",
  },
  {
    id: 5,
    title: "CNC Vertical Milling Machine (3-axis)",
    price: 1250000,
    location: "Pune",
    image: "/cnc-lathe.png",
    seller: "Precision Works",
    verified: true,
    postedAt: "12 hours ago",
    categoryGroup: "Industrial Manufacturing Machinery",
    condition: "Like New",
  },
  {
    id: 6,
    title: "Hydraulic Press Brake 200T",
    price: 920000,
    location: "Ahmedabad",
    image: "/welding-machine.png",
    seller: "FabriTech India",
    verified: true,
    postedAt: "3 days ago",
    categoryGroup: "Industrial Manufacturing Machinery",
    condition: "Good",
  },
  {
    id: 7,
    title: "6-Head Embroidery Machine",
    price: 350000,
    location: "Surat",
    image: "/metal-cutting-saw.jpg",
    seller: "Textile Planet",
    verified: false,
    postedAt: "5 hours ago",
    categoryGroup: "Textile & Garment Machines",
    condition: "Good",
  },
  {
    id: 8,
    title: "Automatic Fabric Cutting Table",
    price: 240000,
    location: "Tiruppur",
    image: "/air-compressor.jpg",
    seller: "WeavePro Systems",
    verified: true,
    postedAt: "1 week ago",
    categoryGroup: "Textile & Garment Machines",
    condition: "Good",
  },
  {
    id: 9,
    title: "Milk Pasteurization Unit 500 LPH",
    price: 780000,
    location: "Lucknow",
    image: "/hydraulic-press.png",
    seller: "DairyMax Tech",
    verified: true,
    postedAt: "2 days ago",
    categoryGroup: "Food & Beverage Processing",
    condition: "Like New",
  },
  {
    id: 10,
    title: "Automatic Packaging Line – Snacks",
    price: 660000,
    location: "Noida",
    image: "/conveyor-belt.jpg",
    seller: "FreshPack Machines",
    verified: true,
    postedAt: "16 hours ago",
    categoryGroup: "Food & Beverage Processing",
    condition: "Good",
  },
  {
    id: 11,
    title: "CNC Wood Router 4x8",
    price: 320000,
    location: "Bengaluru",
    image: "/cnc-lathe.png",
    seller: "WoodCraft Labs",
    verified: true,
    postedAt: "3 days ago",
    categoryGroup: "Wood & Furniture Machines",
    condition: "Good",
  },
  {
    id: 12,
    title: "Edge Banding Machine (Double Glue)",
    price: 215000,
    location: "Kochi",
    image: "/metal-cutting-saw.jpg",
    seller: "TimberLine Equip",
    verified: false,
    postedAt: "1 week ago",
    categoryGroup: "Wood & Furniture Machines",
    condition: "Fair",
  },
  {
    id: 13,
    title: "SMT Pick & Place Machine",
    price: 1450000,
    location: "Chennai",
    image: "/welding-machine.png",
    seller: "ElectroFab",
    verified: true,
    postedAt: "8 hours ago",
    categoryGroup: "Electrical & Electronics Production",
    condition: "Like New",
  },
  {
    id: 14,
    title: "Battery Assembly Line (Lithium Ion)",
    price: 1890000,
    location: "Hyderabad",
    image: "/electric-forklift.jpg",
    seller: "VoltEdge Systems",
    verified: true,
    postedAt: "4 days ago",
    categoryGroup: "Energy & Power Equipment",
    condition: "Good",
  },
  {
    id: 15,
    title: "Industrial Chiller 50TR",
    price: 540000,
    location: "Mumbai",
    image: "/air-compressor.jpg",
    seller: "FrostAir Solutions",
    verified: false,
    postedAt: "2 weeks ago",
    categoryGroup: "HVAC & Cooling Systems",
    condition: "Good",
  },
  {
    id: 16,
    title: "Solar Hybrid Inverter 100kW",
    price: 870000,
    location: "Jaipur",
    image: "/conveyor-belt.jpg",
    seller: "SunGrid Energy",
    verified: true,
    postedAt: "5 days ago",
    categoryGroup: "Energy & Power Equipment",
    condition: "New",
  },
  {
    id: 17,
    title: "PET Bottle Blow Moulding Machine",
    price: 760000,
    location: "Gandhinagar",
    image: "/hydraulic-press.png",
    seller: "PlastoTech",
    verified: true,
    postedAt: "10 hours ago",
    categoryGroup: "Plastic & Rubber Processing",
    condition: "Good",
  },
  {
    id: 18,
    title: "Tyre Shredding Plant 5TPH",
    price: 2150000,
    location: "Faridabad",
    image: "/hydraulic-press.png",
    seller: "Green Recycle Works",
    verified: true,
    postedAt: "18 hours ago",
    categoryGroup: "Recycling & Waste Management",
    condition: "Like New",
  },
  {
    id: 19,
    title: "Hydraulic Car Lift (4 Post)",
    price: 290000,
    location: "Pune",
    image: "/pneumatic-drill.jpg",
    seller: "GaragePro Equipments",
    verified: false,
    postedAt: "3 days ago",
    categoryGroup: "Automobile Workshop Machines",
    condition: "Good",
  },
  {
    id: 20,
    title: "Industrial Air Handling Unit",
    price: 480000,
    location: "Kolkata",
    image: "/air-compressor.jpg",
    seller: "Climatex Engineers",
    verified: true,
    postedAt: "2 weeks ago",
    categoryGroup: "HVAC & Cooling Systems",
    condition: "Fair",
  },
]

export function ListingGrid({ filters }: ListingGridProps) {
  const filteredAds = allAds.filter((ad) => {
    if (filters.category && ad.categoryGroup !== filters.category) return false
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
