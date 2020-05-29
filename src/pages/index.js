import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../components/banner"
import { Box } from "theme-ui"
import { Contact } from "../components/contact"
import { Body1 } from "../components/body1"

const IndexPage = () => (
  <Box
    sx={{
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
    }}
  >
    <Layout>
      <SEO title="Home" />
      <Banner />
      <Body1 />
      <Contact />
    </Layout>
  </Box>
)

export default IndexPage
