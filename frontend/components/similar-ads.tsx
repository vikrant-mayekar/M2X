import Link from "next/link"
import { Heart, MapPin, Clock } from "lucide-react"

interface SimilarAdsProps {
  productId: string
}

const similarAds = [
  {
    id: 2,
    title: "Industrial Hydraulic Press",
    price: "₹1,80,000",
    location: "Mumbai",
    image: "/hydraulic-press.png",
    seller: "Amit Kumar",
    verified: true,
    postedAt: "5 hours ago",
  },
  {
    id: 3,
    title: "Heavy Duty Welding Machine",
    price: "₹95,000",
    location: "Bangalore",
    image: "/welding-machine.png",
    seller: "Priya Singh",
    verified: false,
    postedAt: "1 day ago",
  },
  {
    id: 5,
    title: "Industrial Compressor",
    price: "₹1,20,000",
    location: "Hyderabad",
    image: "/air-compressor.jpg",
    seller: "Suresh Reddy",
    verified: true,
    postedAt: "1 week ago",
  },
]

export function SimilarAds({ productId }: SimilarAdsProps) {
  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="text-2xl font-bold text-foreground mb-8">Similar Ads</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarAds.map((ad) => (
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
    </section>
  )
}
