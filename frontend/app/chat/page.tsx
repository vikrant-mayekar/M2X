import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ChatInterface } from "@/components/chat-interface"

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ChatInterface />
      <Footer />
    </main>
  )
}
