'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AppRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/app/onboarding')
  }, [router])
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="text-center">
        <div className="text-6xl mb-4">📸</div>
        <h1 className="text-2xl font-bold text-instagram-gradient mb-2">
          InstaFashion AI
        </h1>
        <p className="text-gray-600">Redirecionando...</p>
      </div>
    </div>
  )
}
