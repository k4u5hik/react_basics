import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}

const author = 'J.D. Salinger'
const Book = () => {
  const title = 'The Catcher in the Rye'
  return (
    <article className='book'>
      <img
        src='https://images-fe.ssl-images-amazon.com/images/I/81h9Ilh0nIL._AC_UL232_SR232,232_.jpg'
        alt=''
      />
      <h1> {title} </h1>
      <h4> {author.toUpperCase()} </h4>
      <p>$ {6 + 6}</p>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
