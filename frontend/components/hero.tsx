"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Search, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const desktopSlides = [
  {
    src: "/sliders/d-slider1.png",
    alt: "Industrial machines showcased on M2X marketplace",
  },
  {
    src: "/sliders/d-slider2.png",
    alt: "Heavy equipment listed for sale",
  },
  {
    src: "/sliders/d-slider3.png",
    alt: "Industrial tools and spares available",
  },
  {
    src: "/sliders/d-slider4.png",
    alt: "Industrial tools and spares available",
  },
];

const mobileSlides = [
  {
    src: "/sliders/m-slider1.png",
    alt: "Industrial machines showcased on M2X marketplace",
  },
  {
    src: "/sliders/m-slider2.png",
    alt: "Heavy equipment listed for sale",
  },
  {
    src: "/sliders/m-slider3.png",
    alt: "Industrial tools and spares available",
  },
  {
    src: "/sliders/m-slider4.png",
    alt: "Industrial tools and spares available",
  },
];

export function Hero() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDesktopIndex((prev) => (prev + 1) % desktopSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % mobileSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevDesktop = () => {
    setDesktopIndex(
      (prev) => (prev - 1 + desktopSlides.length) % desktopSlides.length
    );
  };

  const goToNextDesktop = () => {
    setDesktopIndex((prev) => (prev + 1) % desktopSlides.length);
  };

  const goToPrevMobile = () => {
    setMobileIndex(
      (prev) => (prev - 1 + mobileSlides.length) % mobileSlides.length
    );
  };

  const goToNextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % mobileSlides.length);
  };

  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="hidden md:block relative w-full h-full">
          {desktopSlides.map((slide, index) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-700 ease-in-out ${
                index === desktopIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" /> */}

          <div className="absolute inset-y-0 left-0 flex items-center px-4">
            <button
              aria-label="Previous slide"
              onClick={goToPrevDesktop}
              className="rounded-full bg-white/70 hover:bg-white text-gray-700 p-2 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center px-4">
            <button
              aria-label="Next slide"
              onClick={goToNextDesktop}
              className="rounded-full bg-white/70 hover:bg-white text-gray-700 p-2 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {desktopSlides.map((_, index) => (
              <span
                key={`desktop-dot-${index}`}
                className={`h-2 rounded-full transition-all ${
                  index === desktopIndex ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="md:hidden relative w-full h-full">
          {mobileSlides.map((slide, index) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-700 ease-in-out ${
                index === mobileIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" /> */}

          <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4">
            <button
              aria-label="Previous slide"
              onClick={goToPrevMobile}
              className="rounded-full bg-white/70 hover:bg-white text-gray-700 p-2 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {mobileSlides.map((_, index) => (
                <span
                  key={`mobile-dot-${index}`}
                  className={`h-2 rounded-full transition-all ${
                    index === mobileIndex ? "w-6 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next slide"
              onClick={goToNextMobile}
              className="rounded-full bg-white/70 hover:bg-white text-gray-700 p-2 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              Buy & Sell Industrial Equipment
            </h1>
            <p className="text-lg text-white/90 text-balance">
              Find the best deals on machines, parts, and equipment in your area
            </p>
          </div>

          <div className="bg-card/95 backdrop-blur-sm rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
