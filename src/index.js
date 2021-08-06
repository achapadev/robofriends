import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./containers/App"
import "tachyons"
// Have to destructure robots array from robots.js because it did just a normal export and not a default export of specific variable

ReactDOM.render(<App />, document.getElementById("root"))
