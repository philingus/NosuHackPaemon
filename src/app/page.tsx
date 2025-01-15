'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full mx-auto text-center space-y-12">
        {/* Logo and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-[#E0757C] tracking-tight">
            Project Paemon
          </h1>
          <div className="h-1 w-32 bg-[#E0757C] mx-auto rounded-full"></div>
        </div>

        {/* Welcome Message */}
        <h2 className="text-2xl md:text-3xl text-[#2D1B2E] font-medium max-w-2xl mx-auto px-4">
          Welcome to Project Paemon, are you ready to start your journey as a trainer?
        </h2>

        {/* Animation and Button */}
        <div className="gba-screen max-w-md mx-auto p-8 space-y-8">
          <div className="relative w-48 h-48 mx-auto">
            <Image
              src="/uia-unscreen.gif"
              alt="Paemon Logo"
              fill
              className="object-contain pixelated"
              priority
              unoptimized
            />
          </div>
          
          <Link 
            href="/questionnaire" 
            className="gba-button inline-block text-xl animate-pulse hover:animate-none"
          >
            Start
          </Link>
        </div>
      </div>
    </main>
  )
}
