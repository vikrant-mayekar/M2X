import Link from "next/link"
import { Zap, Wrench, Truck, Cpu, Sofa, Package } from "lucide-react"

const categories = [
  { name: "Machines", icon: Zap, count: 1240 },
  { name: "Tools", icon: Wrench, count: 856 },
  { name: "Vehicles", icon: Truck, count: 2103 },
  { name: "Electronics", icon: Cpu, count: 1567 },
  { name: "Furniture", icon: Sofa, count: 934 },
  { name: "Parts & Accessories", icon: Package, count: 3421 },
]

export function Categories() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-balance">Featured Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.name} href={`/listings?category=${category.name.toLowerCase()}`} className="group">
                <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} ads</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
