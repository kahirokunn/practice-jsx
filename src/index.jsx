function Akirasan(){
  return document.createDocumentFragment()
}

function Tamesan(tagName, props, ...children) {
  if (typeof tagName !== "string") {
    return tagName
  }
  const el = document.createElement(tagName)

  if (props && props.style) {
    Object.keys(props.style).forEach(propertyName => {
      el.style[propertyName] = props.style[propertyName]
    })
  }

  children.forEach(maybeElm => {
    if (typeof maybeElm === 'string') {
      el.appendChild(document.createTextNode(maybeElm))
    } else {
      el.appendChild(maybeElm)
    }
  })
  return el
}

const elm = (
  <div style={ {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    width: "200px",
    height: "100px",
    background: "skyblue"
  } }>
    <h1>Hello, world!</h1>
    <h2>Good bye!</h2>
  </div>
)
document.body.appendChild(elm)

setTimeout(() => {
  document.body.removeChild(elm)
  document.body.appendChild((
    <div style={ {
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      width: "200px",
      height: "100px",
      background: "skyblue"
    } }>
      <h1>Hello, world2!</h1>
      <h2>Good bye!</h2>
    </div>
  ))
}, 2000)
