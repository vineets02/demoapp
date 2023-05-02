import React, { useEffect, useState } from "react"
import Main from "./components/Main"
import Products from "./components/Products"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Electronics from "./components/electronics/Electronics"
// import ImageSlider from "./components/ImageSlider"
// import Men from "./components/Men/Men"
import ImageSlider from "./components/Men/ImageSlider"
import Jewelery from "./components/jewelery/Jewelery"
import Women from "./components/women/Women"
import "./App.css"
import Slider from "./components/slider/Slider"

const App = ({ products }) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(true)
  }, [products])

  const handleShow = () => {
    setShow(!show)
  }
  return (
    <React.Fragment>
      {" "}
      <Header />
      <Slider />
      <Hero />
      <div className="container py-5">
        <ImageSlider />
        <div className="py-4">
          <Women />
        </div>
        <div className="py-4">
          <Electronics />
        </div>
        <div className="py-4">
          <Jewelery />
        </div>
      </div>
      {/* <Men /> */}
      {/* <button className="btn btn-primary" onClick={handleShow}>
        {show ? "Hide" : "Show"} products
      </button>
      {show && <Products products={products} show={show} />} */}
      {/* <Main className="py-5" style={{ PaddingTop: 100 }} /> */}
      <Footer className="fixed-bottom" />
    </React.Fragment>
  )
}

export default App
