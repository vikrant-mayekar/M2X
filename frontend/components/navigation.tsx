"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Heart,
  MapPin,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("India");
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [menuValue, setMenuValue] = useState<string | undefined>(undefined);

  const languages = ["English", "Hindi", "Tamil", "Telugu", "Bengali"];

  const categories = [
    {
      id: "construction",
      title: "Construction & Building Machinery",
      shortLabel: "Construction",
      icon: "🏗",
      subcategories: [
        "Excavators",
        "Loaders",
        "Concrete Mixers",
        "Vibrators & Compactors",
        "Cranes (Tower / Mobile)",
        "Road Rollers",
        "Asphalt Plants",
        "Cutting Machines (Stone / Marble)",
        "Rebar Bending / Cutting Machines",
        "Scaffolding & Lifting Tools",
      ],
    },
    {
      id: "agriculture",
      title: "Agriculture & Farming Equipment",
      shortLabel: "Agriculture",
      icon: "🚜",
      subcategories: [
        "Tractors",
        "Rotavators & Tillers",
        "Harvesters & Combine Machines",
        "Irrigation Pumps & Sprayers",
        "Seeders & Planters",
        "Chaff Cutters & Feed Machines",
        "Dairy Machines (Milking, Chilling, etc.)",
        "Solar Agri Pumps",
      ],
    },
    {
      id: "industrial",
      title: "Industrial Manufacturing Machinery",
      shortLabel: "Manufacturing",
      icon: "🏭",
      subcategories: [
        "Lathe Machines",
        "Milling Machines",
        "CNC Machines",
        "Drilling Machines",
        "Welding Machines",
        "Compressors & Hydraulic Press",
        "Tool Room Equipment",
        "Sheet Metal & Fabrication Machines",
        "Bending / Rolling Machines",
      ],
    },
    {
      id: "textile",
      title: "Textile & Garment Machines",
      shortLabel: "Textile",
      icon: "🧵",
      subcategories: [
        "Stitching & Sewing Machines (Industrial)",
        "Embroidery Machines",
        "Cutting & Finishing Machines",
        "Dyeing / Washing Machines",
        "Spinning & Weaving Equipment",
      ],
    },
    {
      id: "food",
      title: "Food & Beverage Processing",
      shortLabel: "Food & Beverage",
      icon: "🥫",
      subcategories: [
        "Flour / Atta Mills",
        "Oil Extraction Machines",
        "Milk Processing Units",
        "Juice / Pulp Machines",
        "Bakery Ovens & Mixers",
        "Packaging & Filling Machines",
        "Refrigeration / Cold Storage Units",
      ],
    },
    {
      id: "wood",
      title: "Wood & Furniture Machines",
      shortLabel: "Wood & Furniture",
      icon: "🏠",
      subcategories: [
        "Panel Saw / Edge Banding",
        "Planer / Jointer Machines",
        "CNC Router",
        "Drilling & Sanding Machines",
        "Furniture Polishing Machines",
      ],
    },
    {
      id: "electronics",
      title: "Electrical & Electronics Production",
      shortLabel: "Electrical",
      icon: "🔌",
      subcategories: [
        "PCB Making Machines",
        "Soldering & Welding Stations",
        "Transformer Manufacturing",
        "Wire Winding Machines",
        "Battery Making & Recycling Equipment",
      ],
    },
    {
      id: "chemical",
      title: "Chemical, Pharma & Laboratory",
      shortLabel: "Chemical & Pharma",
      icon: "⚗",
      subcategories: [
        "Mixers, Reactors, Blenders",
        "Tablet Press & Coating Machines",
        "Lab Testing Equipment",
        "Packaging & Filling Machines",
        "Chemical Processing Tanks",
        "Distillation & Filtration Units",
      ],
    },
    {
      id: "recycling",
      title: "Recycling & Waste Management",
      shortLabel: "Recycling",
      icon: "♻",
      subcategories: [
        "Plastic Crushers",
        "Shredders",
        "E-Waste Processing Machines",
        "Paper Recycling Units",
        "Tyre Recycling Plants",
        "Scrap Compressors & Balers",
      ],
    },
    {
      id: "tools",
      title: "Hand Tools & Power Tools",
      shortLabel: "Tools",
      icon: "🧰",
      subcategories: [
        "Drills, Grinders, Cutters",
        "Impact Wrenches",
        "Welding Tools",
        "Measurement & Testing Tools",
        "Safety Gear",
      ],
    },
    {
      id: "automobile",
      title: "Automobile Workshop Machines",
      shortLabel: "Automobile",
      icon: "🛠",
      subcategories: [
        "Car / Bike Washing Systems",
        "Hydraulic Lifts & Jacks",
        "Wheel Alignment & Balancing",
        "Air Compressors",
        "Denting / Painting Booths",
        "Battery Chargers & Diagnostic Tools",
      ],
    },
    {
      id: "hvac",
      title: "HVAC & Cooling Systems",
      shortLabel: "HVAC",
      icon: "🧊",
      subcategories: [
        "Industrial Air Conditioners",
        "Chillers & Cooling Towers",
        "Air Handling Units (AHU)",
        "Duct Fabrication Tools",
      ],
    },
    {
      id: "energy",
      title: "Energy & Power Equipment",
      shortLabel: "Energy & Power",
      icon: "🔋",
      subcategories: [
        "Solar Panels & Inverters",
        "Diesel Generators",
        "Electric Motors & Pumps",
        "Transformers",
        "Batteries & Power Backup Units",
      ],
    },
    {
      id: "material-plants",
      title: "Construction Material Plants",
      shortLabel: "Material Plants",
      icon: "🧱",
      subcategories: [
        "Brick Making Machines",
        "Cement Mix Plants",
        "Stone Crushers",
        "Asphalt & Bitumen Plants",
      ],
    },
    {
      id: "packaging",
      title: "Packaging & Printing Machines",
      shortLabel: "Packaging",
      icon: "📦",
      subcategories: [
        "Box / Carton Making Machines",
        "Label Printing & Cutting",
        "Shrink Wrapping",
        "Vacuum Packing",
        "Inkjet / Laser Printers",
      ],
    },
    {
      id: "plastic",
      title: "Plastic & Rubber Processing",
      shortLabel: "Plastic & Rubber",
      icon: "🧩",
      subcategories: [
        "Injection Moulding",
        "Blow Moulding",
        "Extrusion Machines",
        "Rubber Mixing & Cutting",
      ],
    },
    {
      id: "marine",
      title: "Marine & Heavy Transport",
      shortLabel: "Marine",
      icon: "⚓",
      subcategories: [
        "Boat Engines",
        "Industrial Pumps",
        "Container Handling Cranes",
        "Forklifts & Loaders",
      ],
    },
    {
      id: "office",
      title: "Office / Commercial Machines",
      shortLabel: "Office & Commercial",
      icon: "🏢",
      subcategories: [
        "Industrial Printers",
        "Binding & Cutting",
        "Shredders",
        "Cleaning Equipment (Vacuum, Floor Machines)",
      ],
    },
    {
      id: "spares",
      title: "Spare Parts & Components",
      shortLabel: "Spare Parts",
      icon: "🧾",
      subcategories: [
        "Motors",
        "Bearings",
        "Valves & Fittings",
        "Conveyor Belts",
        "Hydraulic & Pneumatic Parts",
      ],
    },
  ];

  const quickCategories = categories.slice(0, 6);

  // Function to get user's current location
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by this browser.");
      return;
    }

    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          // Use reverse geocoding to get city name
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();

          if (data.city) {
            setUserLocation(data.city);
            setSelectedLocation(data.city);
          } else if (data.principalSubdivision) {
            setUserLocation(data.principalSubdivision);
            setSelectedLocation(data.principalSubdivision);
          } else {
            setUserLocation("India");
            setSelectedLocation("India");
          }
        } catch (error) {
          console.error("Error getting location:", error);
          setSelectedLocation("India");
        } finally {
          setLocationLoading(false);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        setLocationLoading(false);
        // Fallback to India if location access is denied
        setSelectedLocation("India");
      }
    );
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search:", {
      query: searchQuery,
      location: selectedLocation,
    });
  };

  // Get location on component mount
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Green Bar */}
      <div className="bg-green-600 h-1 w-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation Bar */}
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo and Search */}
          <div className="flex items-center gap-4 flex-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="text-2xl font-bold">
                <span className="text-blue-600">m2</span>
                <span className="text-blue-600">x</span>
                <span className="text-blue-600 text-xs align-top">•</span>
              </div>
            </Link>

            {/* Search Bar Group */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex items-center flex-1 max-w-3xl"
            >
              {/* Location Display */}
              <div className="relative">
                <button
                  type="button"
                  onClick={getCurrentLocation}
                  className="flex items-center gap-2 px-3 py-2 h-10 border border-gray-300 rounded-l-md bg-white hover:bg-gray-50 transition-colors"
                  title="Get current location"
                >
                  <MapPin className="w-4 h-4 text-gray-400 hover:text-blue-500 transition-colors" />
                  <span className="text-sm text-gray-700 font-medium">
                    {locationLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-blue-500"></div>
                        <span>Getting location...</span>
                      </div>
                    ) : (
                      selectedLocation
                    )}
                  </span>
                </button>
              </div>

              {/* Search Input */}
              <div className="flex flex-1 items-center">
                <Input
                  type="text"
                  placeholder='Search "Machines"'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-10 border-x-0 border-gray-300 rounded-none bg-white focus-visible:ring-0 focus-visible:border-blue-600"
                />
                <Button
                  type="submit"
                  className="h-10 px-4 rounded-l-none rounded-r-md bg-black hover:bg-gray-800 text-white font-semibold flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Search
                </Button>
              </div>
            </form>
          </div>

          {/* Right Side - Language, Favorites, Login, Sell */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Selector */}
            <Select defaultValue="English">
              <SelectTrigger className="w-25 h-8 border-none bg-transparent text-black font-medium hover:bg-gray-100 rounded px-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Favorites */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="w-5 h-5 text-black" />
            </button>

            {/* Login */}
            <Link
              href="/auth/login">
              <Button className="bg-blue-800 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-full border border-white shadow-md">
                Login
              </Button>
            </Link>

            {/* Sell Button */}
            <Link href="/post-ad">
              <Button className="bg-red-800 hover:bg-red-600 text-white font-bold px-6 py-2 rounded-full border border-white shadow-md">
                <span className="text-xl mr-2">+</span>
                SELL
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            {/* Mobile Search */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex gap-0">
                <button
                  onClick={getCurrentLocation}
                  className="flex items-center gap-2 px-3 py-2 h-10 border border-gray-300 rounded-l-md bg-white hover:bg-gray-50 transition-colors"
                  title="Get current location"
                >
                  <MapPin className="w-4 h-4 text-gray-400 hover:text-blue-500 transition-colors" />
                  <span className="text-sm text-gray-700 font-medium">
                    {locationLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-blue-500"></div>
                        <span>Getting location...</span>
                      </div>
                    ) : (
                      selectedLocation
                    )}
                  </span>
                </button>
                <div className="flex-1 relative">
                  <Input
                    type="text"
                    placeholder='Search "CNC Machines"'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-10 border-l-0 border-r-0 border-gray-300 rounded-none bg-white pr-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {/* Search Button Inside Mobile */}
                  <Button
                    type="button"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 bg-black hover:bg-gray-800 rounded-md"
                    onClick={() => {
                      console.log("Mobile search:", searchQuery);
                    }}
                  >
                    <Search className="w-4 h-4 text-white" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-4 border-t border-gray-200 space-y-2">
              <Link
                href="/auth/login"
                className="block p-2 text-black hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/post-ad"
                className="block p-2 text-black hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sell
              </Link>
              <Link
                href="/dashboard"
                className="block p-2 text-black hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                My Account
              </Link>
            </div>
          </div>
        )}

        {/* Desktop Category Navigation */}
        <div className="hidden md:block border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <NavigationMenu
              viewport={false}
              value={menuValue}
              onValueChange={(value) => setMenuValue(value)}
              className="relative w-full max-w-none justify-start"
            >
              {menuValue && (
                <div
                  className="fixed inset-0 z-30 hidden md:block bg-black/30"
                  onClick={() => setMenuValue(undefined)}
                />
              )}
              <NavigationMenuList className="relative z-40 flex w-full items-center gap-4 py-2 overflow-x-auto flex-nowrap">
                <NavigationMenuItem value="all-categories" className="flex-shrink-0">
                  <NavigationMenuTrigger className="flex items-center gap-2 rounded-full border border-transparent bg-red-700 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-red-600">
                    ALL CATEGORIES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="md:absolute md:left-0 md:right-0 md:top-full z-40 bg-white rounded-b-xl shadow-2xl border border-gray-100">
                    <div className="w-full p-6 md:px-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[420px] overflow-y-auto pr-1">
                        {categories.map((category) => (
                          <div key={`all-${category.id}`}>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-xl">{category.icon}</span>
                              <h3 className="text-sm font-semibold text-gray-900">
                                {category.title}
                              </h3>
                            </div>
                            <ul className="space-y-1.5">
                              {category.subcategories.map((sub) => (
                                <li key={sub}>
                                  <NavigationMenuLink
                                    href={`/listings?category=${encodeURIComponent(
                                      sub
                                    )}`}
                                    className="flex items-center gap-2 rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                                  >
                                    <ChevronRight className="w-3 h-3 text-blue-500" />
                                    {sub}
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {quickCategories.map((category) => (
                  <NavigationMenuItem
                    key={category.id}
                    className="flex-1"
                  >
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/listings?category=${encodeURIComponent(
                          category.title
                        )}`}
                        className="flex w-full items-center justify-center rounded-full border border-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition whitespace-nowrap"
                      >
                        {category.shortLabel}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
