import React from "react"
import { Link } from "gatsby"
// import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CenteredText from "../components/centeredText"
import CenterBanner from '../components/CenterBanner'
import SellingCard from '../components/SellingCard'
import TableOfIngredient from '../components/TableOfIngrediant'
import FourColumns from '../components/FourColumns'
import CompareTable from '../components/CompareTable'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CenteredText />
    <CenterBanner />
    <SellingCard />
    <TableOfIngredient />
    <FourColumns />
    <CompareTable />
  </Layout>
)

export default IndexPage
