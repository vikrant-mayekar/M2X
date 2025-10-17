import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { FeaturedAds } from "@/components/featured-ads";
import { PromoSection } from "@/components/promo-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Categories />
      <FeaturedAds />
      <PromoSection />
      <Footer />
    </main>
  );
}
