"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, ChevronDown, Heart, MapPin } from "lucide-react";
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

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("India");
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [locationLoading, setLocationLoading] = useState(false);

  const languages = ["English", "Hindi", "Tamil", "Telugu", "Bengali"];

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
            <div className="hidden md:flex items-center flex-1 max-w-2xl">
              {/* Location Display */}
              <div className="relative">
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
              </div>
            </div>
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
      </div>
    </nav>
  );
}
