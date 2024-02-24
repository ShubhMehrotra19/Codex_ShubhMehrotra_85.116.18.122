import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Foobar from "./Components/Foobar/Foobar"
import Footbar from "./Components/Footbar/Footbar"

function App() {

  return (
    <>
      <Navbar />
      {/* components to be rendered here */}
      <Footbar />
      <Foobar />
    </>
  )
}

export default App
