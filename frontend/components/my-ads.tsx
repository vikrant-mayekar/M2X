"use client"

import { Edit2, Trash2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const myAds = [
  {
    id: 1,
    title: "Used CNC Lathe Machine",
    price: "₹2,50,000",
    status: "Active",
    views: 234,
    postedAt: "2 hours ago",
    image: "/cnc-lathe.jpg",
  },
  {
    id: 2,
    title: "Industrial Hydraulic Press",
    price: "₹1,80,000",
    status: "Active",
    views: 156,
    postedAt: "1 day ago",
    image: "/hydraulic-press.png",
  },
  {
    id: 3,
    title: "Heavy Duty Welding Machine",
    price: "₹95,000",
    status: "Sold",
    views: 89,
    postedAt: "5 days ago",
    image: "/welding-machine.png",
  },
]

export function MyAds() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Product</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Price</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Views</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myAds.map((ad) => (
              <tr key={ad.id} className="border-b border-border hover:bg-muted/30 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={ad.image || "/placeholder.svg"}
                      alt={ad.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-foreground">{ad.title}</p>
                      <p className="text-sm text-muted-foreground">{ad.postedAt}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-foreground">{ad.price}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      ad.status === "Active" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {ad.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-foreground">{ad.views}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <Link href={`/product/${ad.id}`}>
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                    </Link>
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 text-destructive hover:text-destructive bg-transparent"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
