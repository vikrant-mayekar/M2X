"use client"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface FiltersProps {
  filters: {
    category: string
    priceMin: number
    priceMax: number
    condition: string
    location: string
  }
  setFilters: (filters: any) => void
}

const CATEGORY_OPTIONS = [
  "Construction & Building Machinery",
  "Agriculture & Farming Equipment",
  "Industrial Manufacturing Machinery",
  "Textile & Garment Machines",
  "Food & Beverage Processing",
  "Wood & Furniture Machines",
  "Electrical & Electronics Production",
  "Chemical, Pharma & Laboratory",
  "Recycling & Waste Management",
  "Hand Tools & Power Tools",
  "Automobile Workshop Machines",
  "HVAC & Cooling Systems",
  "Energy & Power Equipment",
  "Construction Material Plants",
  "Packaging & Printing Machines",
  "Plastic & Rubber Processing",
  "Marine & Heavy Transport",
  "Office / Commercial Machines",
  "Spare Parts & Components",
]

const CONDITION_OPTIONS = ["New", "Like New", "Good", "Fair", "For Parts"]

const LOCATION_OPTIONS = ["Pune", "Mumbai", "Bangalore", "Delhi", "Hyderabad", "Chennai"]

export function ListingFilters({ filters, setFilters }: FiltersProps) {

  return (
    <div className="bg-card border border-border rounded-xl p-6 sticky top-24 space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-4">Category</h3>
        <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
          {CATEGORY_OPTIONS.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.category === cat}
                onChange={(e) => setFilters({ ...filters, category: e.target.checked ? cat : "" })}
                className="w-4 h-4 rounded border-border"
              />
              <span className="text-sm text-foreground">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider
            defaultValue={[filters.priceMin, filters.priceMax]}
            min={0}
            max={1000000}
            step={10000}
            onValueChange={(value) => setFilters({ ...filters, priceMin: value[0], priceMax: value[1] })}
            className="w-full"
          />
          <div className="flex gap-2 text-sm text-muted-foreground">
            <span>₹{filters.priceMin.toLocaleString()}</span>
            <span>-</span>
            <span>₹{filters.priceMax.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-4">Condition</h3>
        <div className="space-y-2">
          {CONDITION_OPTIONS.map((cond) => (
            <label key={cond} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.condition === cond}
                onChange={(e) => setFilters({ ...filters, condition: e.target.checked ? cond : "" })}
                className="w-4 h-4 rounded border-border"
              />
              <span className="text-sm text-foreground">{cond}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-4">Location</h3>
        <div className="space-y-2">
          {LOCATION_OPTIONS.map((loc) => (
            <label key={loc} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.location === loc}
                onChange={(e) => setFilters({ ...filters, location: e.target.checked ? loc : "" })}
                className="w-4 h-4 rounded border-border"
              />
              <span className="text-sm text-foreground">{loc}</span>
            </label>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full bg-transparent"
        onClick={() => setFilters({ category: "", priceMin: 0, priceMax: 1000000, condition: "", location: "" })}
      >
        Clear Filters
      </Button>
    </div>
  )
}
