import React, { useState, useEffect } from "react"
import { Navigation } from "./components/navigation"
import { Header } from "./components/header"
import { About } from "./components/about"
import { Gallery } from "./components/gallery"
import { Announce } from "./components/announce"
import { Features } from "./components/features"
import { Launch } from "./components/launch"
import { Services } from "./components/services"
import { Guid } from "./components/guid"
import { Explanation } from "./components/explanation"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { Dashboard } from "./pages/Dashboard"
import JsonData from "./data/data.json"
import SmoothScroll from "smooth-scroll"
import "./App.css"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})

  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default App
