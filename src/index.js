import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const title = 'The Catcher in the Rye'
const author = 'J.D. Salinger'
const img =
  'https://images-fe.ssl-images-amazon.com/images/I/81h9Ilh0nIL._AC_UL232_SR232,232_.jpg'

function BookList() {
  return (
    <section className='booklist'>
      <Book job='developer' />
      <Book title='random title' number={22} />
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h1> {title} </h1>
      <h4> {author} </h4>
      {console.log(props)}
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
