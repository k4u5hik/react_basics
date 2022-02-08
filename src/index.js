import React from 'react'
import ReactDOM from 'react-dom'

function Greeting() {
  return (
    <div>
      <h1>Hello World! This is my first component. It is working!</h1>
    </div>
  )
}

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello World!')
//   )
// }
// this code is how it works but is more unreadable than the above code

ReactDOM.render(<Greeting />, document.getElementById('root'))
