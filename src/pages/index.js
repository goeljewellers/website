import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../components/banner"
import { Box } from "theme-ui"
import * as bg from "../images/bg.jpg"
const IndexPage = () => (
  <Box
    sx={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
    }}
  >
    <Layout>
      <SEO title="Home" />
      <Banner />
    </Layout>
  </Box>
)

export default IndexPage
