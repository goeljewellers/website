import React from "react"
import { Box, Grid } from "@chakra-ui/core"
import Contact from "./footer-components/contact"
import About from "./footer-components/about"
import Business from "./footer-components/business"

export const Footer = () => {
  return (
    <Grid
      as="footer"
      gridTemplateColumns="auto 1fr auto"
      py="24"
      px={[4, 8, 16, 32, 32]}
      backgroundColor="footer"
      color="footerText"
    >
      <Box display={["none", "none", "block", "block", "block"]}>
        <Business />
      </Box>
      <About />
      <Contact />
    </Grid>
  )
}
