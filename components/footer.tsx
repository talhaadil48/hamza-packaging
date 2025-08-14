import Link from "next/link"
import { Package, Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"
export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <Image src="/logo3.png" alt="logo" height={60} width={60} />
              <span className="  font-bold text-lg sm:text-xl">Hamza Packages</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Delivering Quality Packaging Solutions Across Industries
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/products" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Products
              </Link>
              <Link href="/contact" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white mt-0.5 flex-shrink-0" />
                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-xs">
                  Plot no. 282, Sector 27, Korangi Industrial Area, Karachi, Pakistan
                </p>
              </div>
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white mt-0.5 flex-shrink-0" />
                <div className="text-blue-100 text-xs sm:text-sm">
                  <p>+92 300 2232290</p>
                  <p>+92 300 9239490</p>
                </div>
              </div>
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white mt-0.5 flex-shrink-0" />
                <p className="text-blue-100 text-xs sm:text-sm break-all">office.hamzapackages@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg text-white">Business Hours</h3>
            <div className="flex items-start justify-center sm:justify-start space-x-3">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white mt-0.5 flex-shrink-0" />
              <div className="text-blue-100 text-xs sm:text-sm">
                <p>Mon – Sat: 10:00 AM – 7:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-blue-100 text-xs sm:text-sm">
            © {new Date().getFullYear()} Hamza Packages. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
