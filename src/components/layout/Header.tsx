'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">Movvia</span>
            <span className="text-sm text-gray-600 hidden sm:inline">Travel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/flights" className="text-gray-700 hover:text-blue-600 transition-colors">
              Flights
            </Link>
            <Link href="/hotels" className="text-gray-700 hover:text-blue-600 transition-colors">
              Hotels
            </Link>
            <Link href="/tours" className="text-gray-700 hover:text-blue-600 transition-colors">
              Tours
            </Link>
            <Link href="/bookings" className="text-gray-700 hover:text-blue-600 transition-colors">
              My Bookings
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/auth/signin"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/flights" className="text-gray-700 hover:text-blue-600 transition-colors">
                Flights
              </Link>
              <Link href="/hotels" className="text-gray-700 hover:text-blue-600 transition-colors">
                Hotels
              </Link>
              <Link href="/tours" className="text-gray-700 hover:text-blue-600 transition-colors">
                Tours
              </Link>
              <Link href="/bookings" className="text-gray-700 hover:text-blue-600 transition-colors">
                My Bookings
              </Link>
              <div className="pt-4 border-t flex flex-col space-y-2">
                <Link
                  href="/auth/signin"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
