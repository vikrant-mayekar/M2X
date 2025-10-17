import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop: Horizontal Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4 shadow-lg">
              <span className="text-white font-bold text-2xl">M2X</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome Back to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                M2X
              </span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to access your dashboard
            </p>
          </div>

          {/* Main Horizontal Layout */}
          <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-0">
              {/* Left: Login Form */}
              <div className="p-6 lg:p-8">
                <LoginForm />
              </div>

              {/* Center: Divider (Desktop Only) */}
              <div className="hidden lg:flex items-center">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
              </div>
            </div>
          </div>

          {/* Mobile Features (Below Form) */}
        </div>
      </div>
    </main>
  );
}
