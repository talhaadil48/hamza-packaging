"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Utensils,
  Home,
  Pill,
  Shirt,
  Car,
  DollarSign,
  Headphones,
  Clock,
  Target,
  Leaf,
  Award,
  Globe,
  Recycle,
  Shield,
  Zap,
  Heart,
  CheckCircle,
} from "lucide-react"

const slides = [
  {
    title: "Hamza Packages – Your Go-To Packaging Experts",
    subtitle: "Custom Poly Bag & Film Manufacturer",
    buttonText: "Explore Our Products",
    buttonLink: "/products",
    backgroundImage: "/slide1.webp",
  },
  {
    title: "Custom Packaging Made for You",
    subtitle: "Tailored solutions for every industry",
    buttonText: "Get in Touch",
    buttonLink: "/contact",
    backgroundImage: "/slide2.webp",
  },
  {
    title: "Competitive Prices. Exceptional Service. Timely Delivery.",
    subtitle: "Quality you can trust, service you can rely on",
    buttonText: "Why Choose Us",
    buttonLink: "#why-choose-us",
    backgroundImage: "/slide3.webp",
  },
]

const industries = [
  {
    icon: ShoppingBag,
    title: "Retail Packaging",
    description: "Custom solutions for retail businesses",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    icon: Utensils,
    title: "Food & Bakery",
    description: "Food-grade packaging solutions",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    icon: Home,
    title: "Household & Industrial Products",
    description: "Durable packaging for various products",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    icon: Pill,
    title: "Pharmaceuticals & Medical Supplies",
    description: "Safe and sterile packaging options",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    icon: Shirt,
    title: "Textiles & Garments",
    description: "Protective packaging for clothing",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    icon: Car,
    title: "Automotive Parts & Accessories",
    description: "Industrial-grade packaging solutions",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
]

const whyChooseUs = [
  {
    icon: DollarSign,
    title: "Competitive Prices",
    description: "High-quality polybags at the best rates",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    icon: Headphones,
    title: "Exceptional Service",
    description: "Personalized attention and professional support",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Efficient logistics to meet your deadlines",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${slides[currentSlide].backgroundImage}')`,
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl animate-fade-in-up">
            <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100">{slides[currentSlide].subtitle}</p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
            >
              <Link href={slides[currentSlide].buttonLink}>{slides[currentSlide].buttonText}</Link>
            </Button>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-[80%] transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-[80%] transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-blue-600 mb-6 sm:mb-8">
              About Hamza Packages
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Hamza Packages produces LDPE, HDPE, LLDPE, and PP films and bags from the highest quality polyethylene
                materials. All products are custom-made per client specifications.
              </p>
              <p>
                Our state-of-the-art production facility ensures top-notch quality at competitive prices. We continually
                improve and innovate our packaging solutions—from development to customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-blue-600 mb-4">
              Industries We Serve
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Providing specialized packaging solutions across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 bg-white"
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div
                    className={`inline-flex p-4 rounded-xl ${industry.color} mb-4 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-3 text-gray-900">{industry.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-blue-600 mb-4">Why Choose Us</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="group text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200"
              >
                <CardContent className="p-8 sm:p-10">
                  <div
                    className={`inline-flex p-5 rounded-xl ${item.color} mb-6 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-xl sm:text-2xl mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Commitment Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Our Mission & Commitment
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Driving innovation in packaging while building a sustainable future for generations to come
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16">
            {/* Mission Card */}
            <Card className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 sm:p-10">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 mr-4 group-hover:scale-105 transition-transform duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">Our Mission</h3>
                </div>
                <div className="space-y-4 text-blue-100">
                  <p className="text-lg leading-relaxed">
                    To revolutionize the packaging industry by delivering innovative, sustainable, and high-quality
                    solutions that enhance your brand's identity and protect your products throughout their journey.
                  </p>
                  <p className="text-base leading-relaxed">
                    We strive to be the trusted partner that empowers businesses of all sizes to achieve their packaging
                    goals while contributing to a more sustainable future through cutting-edge materials and processes.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center text-blue-200">
                    <CheckCircle className="h-5 w-5 mr-2 text-blue-300" />
                    <span className="text-sm">Innovation First</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <CheckCircle className="h-5 w-5 mr-2 text-blue-300" />
                    <span className="text-sm">Quality Assured</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <CheckCircle className="h-5 w-5 mr-2 text-blue-300" />
                    <span className="text-sm">Brand Enhancement</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <CheckCircle className="h-5 w-5 mr-2 text-blue-300" />
                    <span className="text-sm">Global Reach</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Commitment Card */}
            <Card className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 sm:p-10">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 mr-4 group-hover:scale-105 transition-transform duration-300">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">Our Commitment</h3>
                </div>
                <div className="space-y-4 text-blue-100">
                  <p className="text-lg leading-relaxed">
                    We are committed to environmental stewardship and continuous innovation that drives positive change
                    in the packaging industry.
                  </p>
                  <p className="text-base leading-relaxed">
                    Our dedication extends beyond profit to creating meaningful relationships with our clients,
                    investing in our team's growth, and developing eco-friendly solutions that protect our planet for
                    future generations.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center text-blue-200">
                    <Recycle className="h-5 w-5 mr-3 text-blue-300" />
                    <span className="text-sm">Sustainable manufacturing processes and recyclable materials</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <Shield className="h-5 w-5 mr-3 text-blue-400" />
                    <span className="text-sm">Rigorous quality control and safety standards</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <Zap className="h-5 w-5 mr-3 text-blue-500" />
                    <span className="text-sm">Continuous R&D investment and technology advancement</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 inline-flex mb-4 group-hover:scale-105 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-lg text-white mb-2">Excellence</h4>
              <p className="text-sm text-blue-200">Pursuing perfection in every product and service we deliver</p>
            </div>

            <div className="text-center group">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 inline-flex mb-4 group-hover:scale-105 transition-transform duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-lg text-white mb-2">Sustainability</h4>
              <p className="text-sm text-blue-200">Protecting our environment through responsible practices</p>
            </div>

            <div className="text-center group">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-700 to-blue-800 inline-flex mb-4 group-hover:scale-105 transition-transform duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-lg text-white mb-2">Integrity</h4>
              <p className="text-sm text-blue-200">Building trust through honest and transparent relationships</p>
            </div>

            <div className="text-center group">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 inline-flex mb-4 group-hover:scale-105 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-lg text-white mb-2">Innovation</h4>
              <p className="text-sm text-blue-200">Leading the industry with cutting-edge solutions</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
