"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="bg-[url('/bg-home.jpg')] bg-cover bg-center bg-no-repeat relative min-h-[500px] flex items-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Buy & Sell Industrial Equipment
          </h1>
          <p className="text-lg text-white/90 text-balance">
            Find the best deals on machines, parts, and equipment in your area
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-card rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Keyword Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by keyword..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Location Search */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Enter location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Search Button */}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
