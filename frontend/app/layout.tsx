import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ChatWidget } from "@/components/chat-widget";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/navigation";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M2X – Machine to Exchange",
  description:
    "Buy, sell, and exchange industrial equipment, machines, and parts. Your trusted marketplace for industrial machinery.",
  generator: "v0.app",
  openGraph: {
    title: "M2X – Machine to Exchange",
    description:
      "Buy, sell, and exchange industrial equipment, machines, and parts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <ChatWidget />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
