
'use client'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Loader({ loading }: { loading: boolean }) {
  useEffect(() => {
    if (loading) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [loading])

  return (
    <div className="fixed inset-0 flex justify-center items-center h-screen z-50 w-full bg-foreground">
      <Image
        src="/logo.svg"
        alt="logo"
        priority
        className="aspect-auto animate-pulse"
        width={156}
        height={60}
      />
    </div>
  )
}
