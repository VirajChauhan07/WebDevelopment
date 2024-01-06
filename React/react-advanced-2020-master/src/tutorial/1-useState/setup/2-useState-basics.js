import React, { useState } from 'react'
// use state - function
// Component must be in upperCase
// must be in function / component body
// Cannot call conditionally
const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const handleClick = () => {
    if (name === 'John Doe') {
      setName('Hello World')
    } else {
      setName('John Doe')
    }
  }
  const [name, setName] = useState('John Doe')
  return (
    <React.Fragment>
      <h2>{name}</h2>
      <button type='button' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
