import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../components/banner"
import { Box } from "@chakra-ui/core"
import About from "../components/about"

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <Banner />
      <About storeImage={data.store.childImageSharp.fluid} />
    </Layout>
  )
}

export const query = graphql`
  query {
    store: file(relativePath: { eq: "store.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 744, maxHeight: 775) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
