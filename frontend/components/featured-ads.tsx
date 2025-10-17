import Link from "next/link"
import { Heart, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const ads = [
  {
    id: 1,
    title: "Used CNC Lathe Machine",
    price: "₹2,50,000",
    location: "Pune",
    image: "/cnc-lathe-machine-industrial-equipment.jpg",
    seller: "Rajesh Patil",
    verified: true,
    postedAt: "2 hours ago",
    category: "Machines",
  },
  {
    id: 2,
    title: "Industrial Hydraulic Press",
    price: "₹1,80,000",
    location: "Mumbai",
    image: "/hydraulic-press-industrial.jpg",
    seller: "Amit Kumar",
    verified: true,
    postedAt: "5 hours ago",
    category: "Machines",
  },
  {
    id: 3,
    title: "Heavy Duty Welding Machine",
    price: "₹95,000",
    location: "Bangalore",
    image: "/welding-machine-industrial.jpg",
    seller: "Priya Singh",
    verified: false,
    postedAt: "1 day ago",
    category: "Equipment",
  },
  {
    id: 4,
    title: "Pneumatic Drill Set",
    price: "₹45,000",
    location: "Delhi",
    image: "/pneumatic-drill-tools.jpg",
    seller: "Vikram Sharma",
    verified: true,
    postedAt: "3 days ago",
    category: "Tools",
  },
  {
    id: 5,
    title: "Industrial Compressor",
    price: "₹1,20,000",
    location: "Hyderabad",
    image: "/industrial-air-compressor.jpg",
    seller: "Suresh Reddy",
    verified: true,
    postedAt: "1 week ago",
    category: "Equipment",
  },
  {
    id: 6,
    title: "Conveyor Belt System",
    price: "₹3,50,000",
    location: "Chennai",
    image: "/industrial-conveyor-system.png",
    seller: "Anita Desai",
    verified: true,
    postedAt: "2 weeks ago",
    category: "Machinery",
  },
]

export function FeaturedAds() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Latest Ads</h2>
          <Link href="/listings">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ads.map((ad) => (
            <Link key={ad.id} href={`/product/${ad.id}`}>
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 group h-full flex flex-col">
                {/* Image Container */}
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

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition">
                    {ad.title}
                  </h3>

                  <p className="text-2xl font-bold text-primary mb-3">{ad.price}</p>

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
      </div>
    </section>
  )
}
