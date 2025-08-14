import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Hamza Packages",
  description:
    "Premium custom packaging solutions. LDPE, HDPE, LLDPE & PP bags manufactured to your exact specifications. Competitive prices, exceptional service, timely delivery.",
  keywords: "poly bags, packaging, LDPE, HDPE, LLDPE, PP bags, custom packaging, Karachi, Pakistan",
    generator: 'v0.app',
    icons : {
      icon : '/logo.webp'
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
