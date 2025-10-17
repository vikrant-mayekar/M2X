import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PostAdForm } from "@/components/post-ad-form"

export default function PostAdPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Post Your Ad</h1>
          <p className="text-lg text-muted-foreground">Fill in the details below to list your equipment</p>
        </div>

        <PostAdForm />
      </div>

      <Footer />
    </main>
  )
}
