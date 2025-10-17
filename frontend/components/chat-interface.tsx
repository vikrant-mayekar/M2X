"use client"

import { useState } from "react"
import { Send, Phone, Video, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

const conversations = [
  {
    id: 1,
    name: "Amit Kumar",
    lastMessage: "Is this still available?",
    timestamp: "2 min ago",
    unread: true,
    avatar: "A",
  },
  {
    id: 2,
    name: "Priya Singh",
    lastMessage: "Can you deliver to Bangalore?",
    timestamp: "1 hour ago",
    unread: false,
    avatar: "P",
  },
  {
    id: 3,
    name: "Vikram Sharma",
    lastMessage: "Thanks for the quick response",
    timestamp: "3 hours ago",
    unread: false,
    avatar: "V",
  },
]

const messages = [
  { id: 1, sender: "Amit Kumar", text: "Hi, is the CNC machine still available?", timestamp: "10:30 AM", isOwn: false },
  { id: 2, sender: "You", text: "Yes, it is! Are you interested?", timestamp: "10:32 AM", isOwn: true },
  { id: 3, sender: "Amit Kumar", text: "What is the lowest price you can offer?", timestamp: "10:35 AM", isOwn: false },
  {
    id: 4,
    sender: "You",
    text: "The price is fixed at ₹2,50,000. But I can offer free delivery.",
    timestamp: "10:37 AM",
    isOwn: true,
  },
  { id: 5, sender: "Amit Kumar", text: "Is this still available?", timestamp: "10:40 AM", isOwn: false },
]

export function ChatInterface() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [messageText, setMessageText] = useState("")

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log("Message sent:", messageText)
      setMessageText("")
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-foreground mb-8">Messages</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
        {/* Conversations List */}
        <div className="lg:col-span-1 bg-card border border-border rounded-xl overflow-hidden flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-foreground">Conversations</h2>
          </div>

          <div className="overflow-y-auto flex-1">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`w-full px-4 py-3 border-b border-border text-left hover:bg-muted/50 transition ${
                  selectedConversation.id === conv.id ? "bg-primary/10 border-l-4 border-l-primary" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">{conv.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-medium text-foreground ${conv.unread ? "font-bold" : ""}`}>{conv.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread && <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-3 bg-card border border-border rounded-xl overflow-hidden flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">{selectedConversation.avatar}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">{selectedConversation.name}</p>
                <p className="text-xs text-muted-foreground">Active now</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                <Phone className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                <Video className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.isOwn ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
