import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setsize] = useState(window.innerWidth)

  const checksize = () => {
    setsize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checksize)
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checksize)
    }
  }, [])
  console.log('renders')
  return (
    <>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </>
  )
}

export default UseEffectCleanup
