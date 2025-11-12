import { SignupForm } from "@/components/signup-form";
import { Users, Globe, Award, Star } from "lucide-react";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop: Horizontal Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mb-4 shadow-lg">
              <span className="text-white font-bold text-2xl">M2X</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Start Selling on{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                M2X
              </span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Create your free account and start selling
            </p>
          </div>

          {/* Main Horizontal Layout */}
          <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-[1.2fr,auto,1fr] gap-0">
              {/* Left: Signup Form (Wider) */}
              <div className="p-6 lg:p-8">
                <SignupForm />
              </div>

              {/* Center: Divider (Desktop Only) */}
              <div className="hidden lg:flex items-center">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
              </div>

              {/* Right: Benefits */}
              <div className="hidden lg:flex flex-col justify-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900/50 dark:to-slate-800/50">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Member Benefits
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        10,000+ Active Users
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Join a thriving community of traders
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Global Marketplace
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Reach buyers in 50+ countries
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Premium Features
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Boost visibility with featured ads
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Free to Start
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        No upfront costs, list unlimited items
                      </p>
                    </div>
                  </div>
                </div>

                {/* Success Rate */}
                <div className="mt-6 p-3 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-border/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      98%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Success Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
