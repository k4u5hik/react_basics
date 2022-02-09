import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  )
}
const Image = () => (
  <img
    src='https://images-fe.ssl-images-amazon.com/images/I/81h9Ilh0nIL._AC_UL232_SR232,232_.jpg'
    alt=''
  />
)

const Title = () => <h1> This is the book title </h1>
const Author = () => <h4> This is the book author </h4>

ReactDOM.render(<BookList />, document.getElementById('root'))
