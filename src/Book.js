import React from 'react'

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

export default Book
