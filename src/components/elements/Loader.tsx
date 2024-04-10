export default function Loader() {
  return (
    <div className='relative flex justify-center items-center h-screen z-50'>
      <div className='absolut inset-0 translate-x-2/4 translate-y-2/4 animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blaze-500'></div>
    </div>
  )
}
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
