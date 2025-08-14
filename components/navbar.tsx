"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo3.png" alt="logo" height={50} width={50} />
            <span className="font-serif font-bold text-xl text-white">Hamza Packages</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-100 hover:text-white transition-colors duration-200 font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />
              </Link>
            ))}
            <Button asChild className="ml-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">
              <a href="https://wa.me/923002232290" target="_blank" rel="noopener noreferrer">
                WhatsApp Inquiry
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-blue-600 relative z-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Navigation Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full w-80 bg-blue-500 z-40 md:hidden
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        shadow-xl border-r border-blue-400
      `}
      >
        <div className="pt-20 px-6">
          <div className="mb-8 pb-4 border-b border-blue-400">
            <div className="flex items-center space-x-2">
              <Image src="/logo3.png" alt="logo" height={40} width={40} />
              <span className="font-serif font-bold text-lg text-white">Hamza Packages</span>
            </div>
          </div>

          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-blue-100 hover:text-white hover:bg-blue-600 rounded-lg transition-all duration-200 text-lg font-medium"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                asChild
                className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 text-lg transition-colors duration-200"
                onClick={handleLinkClick}
              >
                <a href="https://wa.me/923002232290" target="_blank" rel="noopener noreferrer">
                  WhatsApp Inquiry
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
