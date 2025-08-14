"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Send, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      setIsSubmitting(true)

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      })
      console.log("EMAIL DONE DONE")

      if (!res.ok) throw new Error("Failed to send email")

      setSubmitStatus("success")
      setFormData({ name: "", phone: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="  font-bold text-4xl md:text-5xl mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us for all your packaging needs. We're here to help you find the perfect solution.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="  font-bold text-2xl mb-6 text-gray-900">Send us a Message</h2>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="Tell us about your packaging requirements..."
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="space-y-8">
              <div>
                <h2 className="  font-bold text-2xl mb-6 text-gray-900">Quick Contact Options</h2>
                <p className="text-gray-600 mb-6">
                  Need immediate assistance? Reach out to us directly through these channels.
                </p>
              </div>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">WhatsApp Inquiry</h3>
                  <p className="text-gray-600 mb-4">Get instant responses to your packaging questions</p>
                  <Button asChild className="w-full">
                    <a href="https://wa.me/923002232290" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">Call Now</h3>
                  <p className="text-gray-600 mb-4">Speak directly with our packaging experts</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-bold text-blue-500">Founder & CEO: M Saeed</p>
                      <Button variant="outline" asChild className="w-full bg-transparent mt-1">
                        <a href="tel:+923002232290">+92 300 9239490</a>
                      </Button>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-blue-500">Sales Executive: Hamza Bin Saeed</p>
                      <Button variant="outline" asChild className="w-full bg-transparent mt-1">
                        <a href="tel:+923009239490">+92 300 2232290</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>


              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">Email Us</h3>
                  <p className="text-gray-600 mb-4">Send detailed inquiries and specifications</p>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <a href="mailto:office.hamzapackages@gmail.com">office.hamzapackages@gmail.com</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
