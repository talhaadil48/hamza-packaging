import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import Script from "next/script"
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
  generator: "v0.app",
  icons: {
    icon: "/logo.webp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} antialiased`}
    >
      <body className="font-sans">
        {/* Google Tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SXKTW78ERZ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SXKTW78ERZ');
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
