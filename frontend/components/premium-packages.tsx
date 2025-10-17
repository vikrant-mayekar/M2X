"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Zap, Crown, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const packages = [
  {
    id: "basic",
    name: "Basic",
    price: 0,
    period: "Forever Free",
    icon: Zap,
    description: "Perfect for getting started",
    features: [
      "Post up to 5 ads",
      "Basic ad visibility",
      "Standard support",
      "7-day listing duration",
      "Basic analytics",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 49,
    period: "per month",
    icon: Crown,
    description: "For active sellers",
    features: [
      "Unlimited ads",
      "Featured listings (5/month)",
      "Priority support",
      "30-day listing duration",
      "Advanced analytics",
      "Verified badge",
      "Ad scheduling",
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
  {
    id: "business",
    name: "Business",
    price: 99,
    period: "per month",
    icon: Rocket,
    description: "For businesses & dealers",
    features: [
      "Unlimited ads",
      "Featured listings (20/month)",
      "24/7 priority support",
      "90-day listing duration",
      "Premium analytics",
      "Verified badge",
      "Ad scheduling & automation",
      "API access",
      "Dedicated account manager",
      "Custom branding",
    ],
    cta: "Upgrade to Business",
    highlighted: false,
  },
]

export function PremiumPackages() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Upgrade Your M2X Experience</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan to grow your business and reach more buyers
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {packages.map((pkg) => {
          const Icon = pkg.icon
          return (
            <Card
              key={pkg.id}
              className={`relative flex flex-col p-8 transition-all duration-300 ${
                pkg.highlighted ? "ring-2 ring-primary scale-105 shadow-lg" : "hover:shadow-md"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
              </div>

              <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">${pkg.price}</span>
                  <span className="text-muted-foreground text-sm">{pkg.period}</span>
                </div>
              </div>

              <Link href={`/payment?package=${pkg.id}`} className="mb-8">
                <Button
                  className={`w-full font-semibold ${
                    pkg.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                >
                  {pkg.cta}
                </Button>
              </Link>

              <div className="space-y-3">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          )
        })}
      </div>

      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Questions about our plans?</h2>
        <p className="text-muted-foreground mb-6">Contact our sales team for custom enterprise solutions</p>
        <Button variant="outline">Contact Sales</Button>
      </div>
    </section>
  )
}
