'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function TrainerName() {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      localStorage.setItem('trainerName', name.trim())
      router.push('/questionnaire')
    }
  }

  return (
    <main className="gba-container min-h-screen flex flex-col items-center justify-center p-8">
      <div className="gba-screen max-w-xl w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-2xl font-bold text-[#2D1B2E] text-center mb-8">
            What&apos;s your name, trainer?
          </h1>
          
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={12}
            className="gba-input w-full text-center text-xl"
            placeholder="Enter name..."
            required
          />
          
          <button 
            type="submit" 
            className="gba-button w-full"
            disabled={!name.trim()}
          >
            Start
          </button>
        </form>
      </div>
    </main>
  )
}
