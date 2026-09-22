'use client'

import useScreenSize from '@/hooks/useScreenSize'

export const Hero = () => {
  const screenSize = useScreenSize().width

  return (
    <div className='hero relative h-[450px] md:h-[420px]'>
      <img src="/hero.jpeg" alt="hero" className='absolute inset-0 w-full h-full object-cover object-bottom' />
      <div className='w-full max-w-[90%] md:max-w-[850px] absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-white text-center italic mb-3 md:text-6xl max-w-full '>Choose <span className='text-blaze-500'>Your Own</span> Way!</h1>
      </div>
    </div>
  )
}