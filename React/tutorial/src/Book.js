import React from 'react'

const Book = ({ img, Title, Author }) => {
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('Hello World')
  }

  const complex = (Author) => {
    console.log(Author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(Title)
      }}
    >
      <img src={img} alt='Book Image1' height={300} width={200} />
      <h1 onClick={() => console.log(Title)}>{Title}</h1>
      <h4>{Author}</h4>
      <button type='button' onClick={clickHandler}>
        Just Click
      </button>
      <button type='button' onClick={() => complex(Author)}>
        complex
      </button>
    </article>
  )
}

export default Book
