'use client'

import useScreenSize from '@/hooks/useScreenSize'

export const Hero = () => {
  const screenSize = useScreenSize().width

  return (
    <div className='hero relative h-[450px] md:h-[420px]'>
      <img src="/hero.jpeg" alt="hero" className='absolute inset-0 w-full h-full object-cover object-bottom' />
      <div className='w-full max-w-[90%] md:max-w-[850px] absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-white text-center italic mb-3 md:text-6xl max-w-full '>Choose <span className='text-blaze-500'>Your Own</span> Way!</h1>
        <p className='text-white md:text-sm text-center'>Nova Lines is a US-based transportation and logistics company founded in 2014 by a Moldovan. We have our feet firmly planted on both sides of the ocean - and are proud of it! We like to think that our combination of both the American and Moldovan spirits helps us create a team that is greater than the sum of its parts. With 300 trucks across 48 US states and close to 120 people in our Chisinau office, we can’t wait to see how much we can achieve when you join us!</p>
      </div>
    </div>
  )
}