import React from 'react'

function Tamesan(...args) {
  if (typeof args[0] === 'function') {
    args[0]()
  }
  console.log("Tamesan", args)
}
function Akirasan(...args) {
  console.log("Akirasan", args)
}

// React.createElement(React.Fragment, null, [
//   React.createElement("h1", null, "Hello, world!"),
//   React.createElement("h1", null, "Good bye!"),
// ])
const element = (
  <>
    <h1>Hello, world!</h1>
    <h1>Good bye!</h1>
  </>
)
