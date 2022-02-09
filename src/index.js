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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In nostrum
          fuga culpa nobis libero! Et corrupti accusantium necessitatibus non
          iure!
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  const { title, author, img } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1> {title} </h1>
      <h4> {author} </h4>
      {props.children}
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
