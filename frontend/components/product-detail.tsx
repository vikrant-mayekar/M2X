"use client"

import { useState } from "react"
import { Heart, Share2, MapPin, Phone, Mail, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Mock product data
  const product = {
    id: productId,
    title: "Used CNC Lathe Machine - High Precision",
    price: 250000,
    location: "Pune, Maharashtra",
    seller: {
      name: "Rajesh Patil",
      verified: true,
      memberSince: "2023",
      rating: 4.8,
      reviews: 24,
      phone: "+91 98765 43210",
      email: "rajesh@example.com",
    },
    condition: "Good",
    postedAt: "2 hours ago",
    images: ["/cnc-lathe-industrial.png", "/cnc-lathe-machine-side-view.jpg", "/cnc-lathe-machine-detail.jpg"],
    description:
      "High-precision CNC lathe machine in excellent working condition. Recently serviced and maintained. Perfect for small to medium manufacturing operations. Includes all original documentation and spare parts.",
    specifications: [
      { label: "Brand", value: "Precision Tech" },
      { label: "Model", value: "PT-2500" },
      { label: "Year", value: "2018" },
      { label: "Spindle Speed", value: "3000 RPM" },
      { label: "Chuck Size", value: "200mm" },
      { label: "Power", value: "15 kW" },
    ],
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {/* Left Column - Images */}
      <div className="lg:col-span-2">
        <div className="bg-card border border-border rounded-xl overflow-hidden mb-4">
          <div className="relative bg-muted h-96 flex items-center justify-center">
            <img
              src={product.images[currentImageIndex] || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-lg transition"
            >
              <Heart
                className={`w-6 h-6 ${isFavorite ? "fill-destructive text-destructive" : "text-muted-foreground"}`}
              />
            </button>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-2 p-4">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                  currentImageIndex === idx ? "border-primary" : "border-border"
                }`}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h1 className="text-3xl font-bold text-foreground mb-4">{product.title}</h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold">{product.condition}</span>
          </div>

          <div className="space-y-3 mb-6 pb-6 border-b border-border">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              {product.location}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              Posted {product.postedAt}
            </div>
          </div>

          <h3 className="font-semibold text-foreground mb-4">Description</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

          <h3 className="font-semibold text-foreground mb-4">Specifications</h3>
          <div className="grid grid-cols-2 gap-4">
            {product.specifications.map((spec, idx) => (
              <div key={idx} className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm text-muted-foreground">{spec.label}</p>
                <p className="font-semibold text-foreground">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Seller Info & CTA */}
      <div className="lg:col-span-1">
        {/* Seller Card */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6 sticky top-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{product.seller.name.charAt(0)}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                {product.seller.name}
                {product.seller.verified && <Shield className="w-4 h-4 text-primary" />}
              </h3>
              <p className="text-sm text-muted-foreground">Member since {product.seller.memberSince}</p>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-bold text-foreground">{product.seller.rating}</span>
              <span className="text-sm text-muted-foreground">({product.seller.reviews} reviews)</span>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary">
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3 mb-6 pb-6 border-b border-border">
            <a
              href={`tel:${product.seller.phone}`}
              className="flex items-center gap-3 text-foreground hover:text-primary transition"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">{product.seller.phone}</span>
            </a>
            <a
              href={`mailto:${product.seller.email}`}
              className="flex items-center gap-3 text-foreground hover:text-primary transition"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">{product.seller.email}</span>
            </a>
          </div>

          <div className="space-y-3">
            <Link href="/chat" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Send Message</Button>
            </Link>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 bg-transparent">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Safety Tips */}
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-accent" />
            Safety Tips
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Meet in a safe public location</li>
            <li>• Inspect the item before payment</li>
            <li>• Use secure payment methods</li>
            <li>• Never share personal information</li>
            <li>• Report suspicious activity</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
