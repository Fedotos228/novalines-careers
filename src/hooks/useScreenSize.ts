import { useEffect, useState } from 'react'

const isClient = typeof window !== 'undefined'

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: isClient ? window.innerWidth : 0,
        height: isClient ? window.innerHeight : 0,
      })
    }

    if (isClient) {
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return screenSize
}

export default useScreenSize
