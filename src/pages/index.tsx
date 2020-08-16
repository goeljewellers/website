import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../components/banner"
import { Box } from "@chakra-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
  </Layout>
)

export default IndexPage
