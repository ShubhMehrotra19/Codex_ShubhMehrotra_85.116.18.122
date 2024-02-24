import React from "react"
import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import Foobar from "./Components/Foobar/Foobar"
import Footbar from "./Components/Footbar/Footbar"
import Component9 from "./Components/Component9/Component9"
import Component1 from "./Components/Component1/Component1"
import Component3 from "./Components/Component3/Component3"
import Component5 from "./Components/Component5/Component5"

function App() {

  return (
    <div className="app">
      <Navbar /> 
      <Component1 />
      <Component5 />
      <Component3 />
      <Component9 />
       <Footbar />
      <Foobar />
    </div>
  )
}

export default App
