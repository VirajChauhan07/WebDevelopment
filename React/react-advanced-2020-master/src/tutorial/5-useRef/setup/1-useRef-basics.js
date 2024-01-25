import React, { useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainter = useRef(n)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' />
          <button type='submit'>submit</button>
        </div>
      </form>
    </>
  )
}

export default UseRefBasics
