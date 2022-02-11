import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const books = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsqsuiuuvY0XY1Sh4kwLjZmUsRtj_qYKA6DcpIETPubqUF335Rs_LES6wNt0yxzMqE0g&usqp=CAU',
  },
  {
    id: 2,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    img: 'https://static.tvtropes.org/pmwiki/pub/images/selindjer_nad_propastyu_vo_rji.jpg',
  },
  {
    id: 3,
    title: 'A song of Ice and Fire',
    author: 'George R.R. Martin',
    img: 'https://i.harperapps.com/hcanz/covers/9780006479888/x293.jpg',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

const Book = ({ title, author, img }) => {
  // attribute, eventHandler
  // onClick and onMouseOver
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('hello world!')
  }
  const anotherExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}> {title} </h1>
      <h4> {author} </h4>
      <button type='button' onClick={clickHandler}>
        Reference Example
      </button>
      <button type='button' onClick={() => anotherExample(author)}>
        Another Example
      </button>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
