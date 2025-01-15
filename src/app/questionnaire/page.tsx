'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const questions = [
  {
    question: "What is your favorite environment?",
    options: ["Forest", "Mountain", "Ocean", "Desert"]
  },
  {
    question: "What's your primary strength?",
    options: ["Bravery", "Kindness", "Strategy", "Creativity"]
  },
  {
    question: "Pick a color that resonates with you.",
    options: ["Red", "Blue", "Green", "Yellow"]
  },
  {
    question: "How would your friends describe you?",
    options: ["Loyal", "Funny", "Calm", "Adventurous"]
  },
  {
    question: "What's your favorite activity?",
    options: ["Exploring", "Painting", "Reading", "Sports"]
  },
  {
    question: "Which elemental power do you prefer?",
    options: ["Fire", "Water", "Earth", "Wind"]
  }
]

export default function Questionnaire() {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''))
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const router = useRouter()

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleComplete = () => {
    localStorage.setItem('pokemonAnswers', JSON.stringify({
      environment: answers[0],
      strength: answers[1],
      color: answers[2],
      personality: answers[3],
      activity: answers[4],
      element: answers[5]
    }))
    router.push('/generate')
  }

  const question = questions[currentQuestion]

  return (
    <main className="gba-container min-h-screen flex flex-col items-center justify-center p-8">
      <div className="gba-screen max-w-2xl w-full">
        <div className="space-y-6">
          <div className="flex justify-between text-sm text-[#2D1B2E] mb-4">
            <span>Question {currentQuestion + 1}/6</span>
            <span>{Math.round((answers.filter(Boolean).length / questions.length) * 100)}%</span>
          </div>

          <h2 className="text-xl font-bold text-[#2D1B2E] text-center mb-8">
            {question.question}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`gba-button ${
                  answers[currentQuestion] === option ? 'border-[#E0757C]' : 'border-transparent'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {answers.filter(Boolean).length === questions.length && (
            <button
              onClick={handleComplete}
              className="gba-button w-full mt-8 animate-pulse hover:animate-none"
            >
              Complete
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
