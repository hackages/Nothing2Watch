import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { navigate } from "gatsby"

const moviesList = [
  "https://www.netflix.com/title/60025061",
  "https://www.netflix.com/title/80170278",
  "https://www.netflix.com/title/80000643",
  "https://www.netflix.com/title/80121348",
  "https://www.netflix.com/title/60000407",
  "https://www.netflix.com/title/959008",
  "https://www.netflix.com/title/80142090",
  "https://www.netflix.com/title/80025919",
  "https://www.netflix.com/title/60003378",
  "https://www.netflix.com/title/70244437",
  "https://www.netflix.com/title/70230640",
  "https://www.netflix.com/title/70002022",
  "https://www.netflix.com/title/70044686",
  "https://www.netflix.com/title/80064516",
  "https://www.netflix.com/title/70189475",
]

const SecondPage = () => {
  window.location.replace(
    moviesList[Math.floor(Math.random() * moviesList.length)]
  )
}
export default SecondPage
