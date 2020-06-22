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
import ThreeColumn from '../components/ThreeColumn'
import Media from '../components/Media'
import TwoColumnAlter from '../components/TwoColumnAlter'
import ThirdParty from '../components/thirdParty'
import TextWShape from '../components/TextWShape'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CenteredText />
    <CenterBanner />
    <SellingCard />
    <TableOfIngredient />
    <FourColumns />
    <CompareTable />
    <ThreeColumn />
    <Media />
    <TwoColumnAlter />
    <SellingCard />
    <ThirdParty />
    <TextWShape />
  </Layout>
)

export default IndexPage
