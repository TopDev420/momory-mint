import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navigation } from "./components/navigation"
import { Footer } from "./components/footer"
import { Dashboard } from "./pages/Dashboard"
import { Sales } from "./pages/Sales"
import SmoothScroll from "smooth-scroll"
import "./App.css"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
})

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/sommer" element={<Sales />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
