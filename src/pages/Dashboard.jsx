import React, { useState, useEffect } from "react"

import { Header } from "../components/header"
import { About } from "../components/about"
import { Gallery } from "../components/gallery"
import { Announce } from "../components/announce"
import { Features } from "../components/features"
import { Launch } from "../components/launch"
import { Services } from "../components/services"
import { Guid } from "../components/guid"
import { Explanation } from "../components/explanation"
import { Contact } from "../components/contact"

import JsonData from "../data/data.json"
import SmoothScroll from "smooth-scroll"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
})

export const Dashboard = () => {
  const [landingPageData, setLandingPageData] = useState({})

  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Gallery />
      <Announce data={landingPageData.Announce} />
      <Features />
      <Launch data={landingPageData.Launch} />
      <Services />
      <Guid />
      <Explanation />
      <Contact />
    </div>
  )
}
