import React, { useState } from 'react'

// const UseStateObject = () => {
//   const [person, setPerson] = useState({
//     name: 'peter',
//     age: 24,
//     message: 'random Message',
//   })

//   const changeMessage = () => {
//     setPerson({ ...person, message: 'hello World' })
//   }
//   return (
//     <>
//       <h3>{person.name}</h3>
//       <h3>{person.age}</h3>
//       <h3>{person.message}</h3>
//       <button type='button' className='btn' onClick={changeMessage}>
//         Change
//       </button>
//     </>
//   )
// }

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random Message',
  })

  const [name, setName] = useState('peter')
  const [age, setAge] = useState(20)
  const [message, setMessage] = useState('Random Message')
  const changeMessage = () => {
    setMessage('hello world')
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type='button' className='btn' onClick={changeMessage}>
        Change
      </button>
    </>
  )
}

export default UseStateObject
