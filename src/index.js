import React from 'react'
import ReactDOM from 'react-dom'

function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h1>Hello World! This is my first component. It is working!</h1>
        <ul>
          <li>
            <a href='#'>Hello People</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(<Greeting />, document.getElementById('root'))
