'use client'

import { useState } from 'react'
import Link from 'next/link'

type SearchType = 'flights' | 'hotels' | 'tours'

export default function SearchHero() {
  const [searchType, setSearchType] = useState<SearchType>('flights')

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl text-center mb-12 text-blue-100">
          Book flights, hotels, and tours all in one place
        </p>

        {/* Search Type Tabs */}
        <div className="bg-white rounded-t-lg shadow-lg max-w-4xl mx-auto">
          <div className="flex border-b">
            <button
              onClick={() => setSearchType('flights')}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                searchType === 'flights'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Flights
              </span>
            </button>
            <button
              onClick={() => setSearchType('hotels')}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                searchType === 'hotels'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Hotels
              </span>
            </button>
            <button
              onClick={() => setSearchType('tours')}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                searchType === 'tours'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tours
              </span>
            </button>
          </div>

          {/* Search Form */}
          <div className="p-6 bg-white rounded-b-lg text-gray-900">
            {searchType === 'flights' && (
              <div className="grid md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="From"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="To"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Link
                  href="/flights"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
                >
                  Search Flights
                </Link>
              </div>
            )}

            {searchType === 'hotels' && (
              <div className="grid md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="Destination"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  placeholder="Check-in"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  placeholder="Check-out"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Link
                  href="/hotels"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
                >
                  Search Hotels
                </Link>
              </div>
            )}

            {searchType === 'tours' && (
              <div className="grid md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="Destination"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Tour Type</option>
                  <option>Adventure</option>
                  <option>Cultural</option>
                  <option>Beach</option>
                  <option>City</option>
                </select>
                <input
                  type="date"
                  className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Link
                  href="/tours"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
                >
                  Search Tours
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
