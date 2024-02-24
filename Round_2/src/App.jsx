import React from "react"
import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import Foobar from "./Components/Foobar/Foobar"
import Footbar from "./Components/Footbar/Footbar"
import Component9 from "./Components/Component9/Component9"

function App() {

  return (
    <div className="app">
      <Navbar />
      <Component9 />
      {/* components to be rendered here */}
      <Footbar />
      <Foobar />
    </div>
  )
}

export default App
