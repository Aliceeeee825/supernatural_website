import React from "react"
import { Link } from "gatsby"
// import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CenteredText from "../components/centeredText"
import CenterBanner from '../components/CenterBanner'
import SellingCard from '../components/SellingCard'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CenteredText />
    <CenterBanner />
    <SellingCard />
  </Layout>
)

export default IndexPage
