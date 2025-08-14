"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Share2, Eye } from "lucide-react"

const products = [
  {
    id: "ldpe-hdpe-polybags",
    title: "Custom Plain LDPE/HDPE Polybags – Bulk Quantity Order",
    description:
      "Durable and flexible, perfect for retail, food, household, and industrial use. Available in different sizes, thicknesses, and colors.",
    image: "/slide2.webp",
  },
  {
    id: "printed-hdpe-polybags",
    title: "Custom Printed HDPE Polybags – Bulk Quantity Order",
    description:
      "Strong, lightweight, and fully customizable with your branding. Ideal for groceries, retail, and industrial packaging.",
    image: "/product2.webp",
  },
  {
    id: "printed-lldpe-polybags",
    title: "Custom Printed LLDPE Polybags – Bulk Quantity Order",
    description:
      "Flexible yet tough, designed for heavy-duty packaging. Great for agricultural, industrial, and bulk goods.",
    image: "/product3.webp",
  },
  {
    id: "rice-sugar-salt-packaging",
    title: "Rice/Sugar/Salt Packaging with Gravure Printing",
    description:
      "High-quality laminated bags with vibrant printing, excellent moisture protection, and strong barrier properties. Perfect for food industry packaging.",
    image: "/product4.webp",
  },
]

export default function ProductsPage() {
  const whatsappMessage = (productName: string) => {
    return `Hi! I'm interested in learning more about ${productName}. Could you please provide more details?`
  }
  const handleShare = async (product: { id: string; title: string }) => {
    const productUrl = `${window.location.origin}/products/${product.id}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          text: `Check out this product: ${product.title}`,
          url: productUrl,
        })
      } catch (error) {
        console.error("Share failed", error)
      }
    } else {
      // Fallback: Copy link to clipboard
      navigator.clipboard.writeText(productUrl)
      alert("Product link copied to clipboard!")
    }
  }
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="  font-bold text-4xl md:text-5xl mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Premium custom packaging solutions for every business. From retail to industrial, Hamza Packages delivers
            quality, durability, and customization that meets your exact needs.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="  font-bold text-xl mb-3 text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Link href={`/products/${product.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleShare(product)}
                      className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Product
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
