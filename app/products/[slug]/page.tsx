import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MessageCircle, CheckCircle, Package, Truck, Award } from "lucide-react"

const productData = {
  "ldpe-hdpe-polybags": {
    title: "Custom Plain LDPE/HDPE Polybags – Bulk Quantity Order",
    description:
      "Manufactured from LDPE/HDPE for durability and flexibility. Custom sizes, thicknesses, and colors available.",
    image: "/slide2.webp",
    features: [
      "LDPE/HDPE material",
      "Customizable sizes and thickness",
      "Transparent/opaque/tinted finishes",
      "Moisture & chemical resistant",
      "Recyclable option available",
    ],
    applications: [
      "Retail packaging",
      "Food storage",
      "Industrial applications",
      "Pharmaceutical packaging",
      "Textile protection",
      "Automotive parts",
    ],
    benefits: ["Competitive pricing for bulk orders", "Fast lead time", "Consistent quality assurance"],
  },
  "printed-hdpe-polybags": {
    title: "Custom Printed HDPE Polybags – Bulk Quantity Order",
    description: "Strong and lightweight HDPE bags with custom printing for branding.",
    image: "/product2.webp",
    features: [
      "HDPE material construction",
      "Multi-color printing capability",
      "Glossy/matte finish options",
      "Tear-resistant design",
      "Recyclable option available",
    ],
    applications: [
      "Grocery stores",
      "Retail businesses",
      "Food packaging",
      "Household products",
      "Industrial goods",
      "Textile packaging",
    ],
    benefits: ["Crisp, vibrant printing quality", "Quick turnaround time", "Large-scale production capacity"],
  },
  "printed-lldpe-polybags": {
    title: "Custom Printed LLDPE Polybags – Bulk Quantity Orders",
    description: "Flexible yet tough LLDPE bags, customizable with high-quality printing.",
    image: "/product3.webp",
    features: [
      "LLDPE material for flexibility",
      "Custom sizes and colors",
      "Glossy/matte finish options",
      "Moisture-proof construction",
      "Recyclable option available",
    ],
    applications: [
      "Heavy-duty retail packaging",
      "Food industry applications",
      "Agricultural products",
      "Industrial goods",
      "Pharmaceutical packaging",
      "Textile protection",
    ],
    benefits: ["Premium printing quality", "Reliable delivery schedule", "Large production capabilities"],
  },
  "rice-sugar-salt-packaging": {
    title: "Rice/Sugar/Salt Packaging – Laminated with Gravure Printing",
    description: "Laminated food-grade bags with vibrant gravure printing, moisture protection, and long shelf life.",
    image: "/product4.webp",
    features: [
      "Multi-layer laminate construction",
      "Custom designs and branding",
      "Glossy/matte/metallic finish options",
      "Superior barrier protection",
      "Tear-resistant design",
    ],
    applications: ["Rice packaging", "Sugar packaging", "Salt packaging", "Other granular food products"],
    benefits: [
      "Eye-catching designs that sell",
      "Compatible with automated packaging machines",
      "Secure transport and storage",
    ],
  },
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = productData[params.slug as keyof typeof productData]

  if (!product) {
    notFound()
  }

  const whatsappMessage = `Hi! I'm interested in ${product.title}. Could you please provide pricing and availability details?`

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Product Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="  font-bold text-3xl md:text-4xl text-gray-900 mb-6">{product.title}</h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{product.description}</p>
              <Button size="lg" asChild>
                <a
                  href={`https://wa.me/923002232290?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Inquire Now on WhatsApp
                </a>
              </Button>
            </div>
            <div className="relative">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Key Features */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Package className="h-6 w-6 text-primary mr-2" />
                  <h3 className="  font-bold text-xl">Key Features</h3>
                </div>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  <h3 className="  font-bold text-xl">Applications</h3>
                </div>
                <ul className="space-y-3">
                  {product.applications.map((application, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{application}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Bulk Order Benefits */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Truck className="h-6 w-6 text-primary mr-2" />
                  <h3 className="  font-bold text-xl">Bulk Order Benefits</h3>
                </div>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="  font-bold text-3xl mb-4">Ready to Place Your Order?</h2>
          <p className="text-xl text-blue-100 mb-8">Get in touch with us for competitive pricing and fast delivery</p>
          <Button size="lg" variant="secondary" asChild>
            <a
              href={`https://wa.me/923002232290?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Inquire Now on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
