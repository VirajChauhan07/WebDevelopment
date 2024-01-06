import React from 'react'
import ReactDOM from 'react-dom'
// Adding CSS
import './index.css'
// books.js ADD
import { data } from './books'
import Book from './Book'

// Statelessfunctional Component
// always return JSX
// JSX rules
// return single element
// div/section/article or fragment(<> / </>)
// use camecase instead of fragment
// class name instead of class
// formatting
// ------------------------------------------------------------------//
// function Greeting() {
//   return (
//     <>
//       <div>
//         <Person />
//         <Message />
//       </div>
//     </>
//   )
// }

// const Person = () => <h2>Viraj Chauhan</h2>
// const Message = () => <p>This is my message</p>

// const Greeting = () => {
//   return React.createElement('h1', {}, React.createElement('h1',{},'Hello World'))
// }

// ReactDOM.render(<Greeting />, document.getElementById('root'))
//----------------------------------------------------------------------------------------//
// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   )
// }

// const Book = () => {
//   return (
//     <article className='book'>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   )
// }

// const Image = () => {
//   return (
//     <img
//       src='https://m.media-amazon.com/images/I/914DQ26V6RL._AC_UL480_QL65_.jpg'
//       alt='Book Image1'
//       height={300}
//       width={200}
//     />
//   )
// }

// const Title = () => {
//   return <h1>The Forty Rules of Love</h1>
// }

// const Author = () => {
//   return (
//     <h4 style={{ color: '#617d98', fontSize: '0.75rem', margin: '0.25rem' }}>
//       viraj Chauhan
//     </h4>
//   )
// }
// ReactDOM.render(<BookList />, document.getElementById('root'))

//----------------------------------------------------------------------------------//
// Setup variable
// const FirstBook = {
//   img: 'https://m.media-amazon.com/images/I/914DQ26V6RL._AC_UL480_QL65_.jpg',
//   Author: 'Bhupendar jogi',
//   Title: 'The Forty Rules of Love',
// }

// const secondBook = {
//   img: 'https://m.media-amazon.com/images/I/81DFcrQgjrL._SY466_.jpg',
//   Author: 'Khaleed Hossaeini',
//   Title: 'A Thousand splendid suns',
// }
// const ThirdBook = {
//   img: 'https://m.media-amazon.com/images/I/41jFJcgRRtL._SY445_SX342_.jpg',
//   Author: 'Roy Arundhati',
//   Title: 'God of Small Things',
// }
// // const Author = 'Bhupendar jogi'
// // const Title = 'The Forty Rules of Love'
// // const img =
// // ('https://m.media-amazon.com/images/I/914DQ26V6RL._AC_UL480_QL65_.jpg')

// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book
//         img={FirstBook.img}
//         Title={FirstBook.Title}
//         Author={FirstBook.Author}
//       >
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
//           obcaecati facere ad quibusdam earum recusandae sapiente qui impedit
//           ab. Repellendus.
//         </p>
//       </Book>
//       <Book
//         img={secondBook.img}
//         Title={secondBook.Title}
//         Author={secondBook.Author}
//       />
//       <Book
//         img={ThirdBook.img}
//         Title={ThirdBook.Title}
//         Author={ThirdBook.Author}
//       />
//     </section>
//   )
// }

// // Diffrent ways to access children
// // 1.)const { img, Title, Author } = props console.log(props) --- {props.children}
// // 2.) const { img, Title, Author, children } = props --  {children}

// const Book = (props) => {
//   const { img, Title, Author, children } = props
//   return (
//     <article className='book'>
//       <img src={img} alt='Book Image1' height={300} width={200} />
//       <h1>{Title}</h1>
//       <h4>{Author}</h4>
//       {children}
//     </article>
//   )
// }

// // const Book = (props) => {
// //   return (
// //     <article className='book'>
// //       <img src={props.img} alt='Book Image1' height={300} width={200} />
// //       <h1>{props.Title}</h1>
// //       <h4>{props.Author}</h4>
// //     </article>
// //   )
// // }

// ReactDOM.render(<BookList />, document.getElementById('root'))
// --------------------------------------------------------------//

// const books = [
//   {
//     id: 1,
//     img: 'https://m.media-amazon.com/images/I/914DQ26V6RL._AC_UL480_QL65_.jpg',
//     Author: 'Bhupendar jogi',
//     Title: 'The Forty Rules of Love',
//   },
//   {
//     id: 2,
//     img: 'https://m.media-amazon.com/images/I/81DFcrQgjrL._SY466_.jpg',
//     Author: 'Khaleed Hossaeini',
//     Title: 'A Thousand splendid suns',
//   },
//   {
//     id: 3,
//     img: 'https://m.media-amazon.com/images/I/41jFJcgRRtL._SY445_SX342_.jpg',
//     Author: 'Roy Arundhati',
//     Title: 'God of Small Things',
//   },
//   {
//     id: 4,
//     img: 'https://m.media-amazon.com/images/I/91O4bSeYzML._SY466_.jpg',
//     Author: 'Malcolm X',
//     Title: 'The Snow Child',
//   },
// ]

// // const names = ['viraj', 'vraj', 'neel']
// // const newName = names.map((names) => {
// //   return <h1>{names}</h1>
// // })
// // console.log(newName)

// // function BookList() {
// //   return <section className='booklist'>{newName}</section>
// // }

// function BookList() {
//   return (
//     <section className='booklist'>
//       {books.map((book) => {
//         return <Book key={book.id} {...book}></Book>
//       })}
//     </section>
//   )
// }

// const Book = ({ img, Title, Author }) => {
//   // const { img, Title, Author } = props
//   return (
//     <article className='book'>
//       <img src={img} alt='Book Image1' height={300} width={200} />
//       <h1>{Title}</h1>
//       <h4>{Author}</h4>
//     </article>
//   )
// }
// ReactDOM.render(<BookList />, document.getElementById('root'))

// ---------------------------------------------------------------------//
// Attribute , Event handler , onClick , onMouseOver
// const books = [
//   {
//     id: 1,
//     img: 'https://m.media-amazon.com/images/I/914DQ26V6RL._AC_UL480_QL65_.jpg',
//     Author: 'Bhupendar jogi',
//     Title: 'The Forty Rules of Love',
//   },
//   {
//     id: 2,
//     img: 'https://m.media-amazon.com/images/I/81DFcrQgjrL._SY466_.jpg',
//     Author: 'Khaleed Hossaeini',
//     Title: 'A Thousand splendid suns',
//   },
//   {
//     id: 3,
//     img: 'https://m.media-amazon.com/images/I/41jFJcgRRtL._SY445_SX342_.jpg',
//     Author: 'Roy Arundhati',
//     Title: 'God of Small Things',
//   },
//   {
//     id: 4,
//     img: 'https://m.media-amazon.com/images/I/91O4bSeYzML._SY466_.jpg',
//     Author: 'Malcolm X',
//     Title: 'The Snow Child',
//   },
// ]

// // const names = ['viraj', 'vraj', 'neel']
// // const newName = names.map((names) => {
// //   return <h1>{names}</h1>
// // })
// // console.log(newName)

// // function BookList() {
// //   return <section className='booklist'>{newName}</section>
// // }

// function BookList() {
//   return (
//     <section className='booklist'>
//       {books.map((book) => {
//         return <Book key={book.id} {...book}></Book>
//       })}
//     </section>
//   )
// }

// const Book = ({ img, Title, Author }) => {
//   const clickHandler = (e) => {
//     console.log(e)
//     console.log(e.target)
//     alert('Hello World')
//   }

//   const complex = (Author) => {
//     console.log(Author)
//   }
//   return (
//     <article
//       className='book'
//       onMouseOver={() => {
//         console.log(Title)
//       }}
//     >
//       <img src={img} alt='Book Image1' height={300} width={200} />
//       <h1 onClick={() => console.log(Title)}>{Title}</h1>
//       <h4>{Author}</h4>
//       <button type='button' onClick={clickHandler}>
//         Just Click
//       </button>
//       <button type='button' onClick={() => complex(Author)}>
//         complex
//       </button>
//     </article>
//   )
// }
// ReactDOM.render(<BookList />, document.getElementById('root'))

// ---------------------------------------------------------------//

function BookList() {
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
