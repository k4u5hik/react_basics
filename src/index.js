import React from 'react'
import ReactDOM from 'react-dom'

function BookList() {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Title></Title>
      <Image></Image>
      <Author></Author>
    </article>
  )
}
const Image = () => (
  <img
    src='https://m.media-amazon.com/images/I/91uFdkCJmAL._AC_UY436_FMwebp_QL65_.jpg'
    alt=''
  />
)

const Title = () => <h1> This is the book title </h1>
const Author = () => <h4> This is the book author </h4>

ReactDOM.render(<BookList />, document.getElementById('root'))
