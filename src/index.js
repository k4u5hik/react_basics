import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const firstBook = {
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsqsuiuuvY0XY1Sh4kwLjZmUsRtj_qYKA6DcpIETPubqUF335Rs_LES6wNt0yxzMqE0g&usqp=CAU',
}

const secondBook = {
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  img: 'https://static.tvtropes.org/pmwiki/pub/images/selindjer_nad_propastyu_vo_rji.jpg',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1> {props.title} </h1>
      <h4> {props.author} </h4>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
