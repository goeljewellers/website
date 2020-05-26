import React from "react"
import { Box, Heading, Container, Flex } from "theme-ui"

const Header = ({ siteTitle }) => (
  <Box backgroundColor="header">
    <Container paddingTop={5} paddingLeft={2} paddingRight={2}>
      <Flex sx={{ alignItems: "center" }}>
        <Heading variant="heading" sx={{ flex: "1 1 auto" }}>
          Goel Jewellers
        </Heading>
        <Heading variant="navs" as="h3">
          About
        </Heading>
        <Heading variant="navs" as="h3" marginLeft={4}>
          Contact Us
        </Heading>
      </Flex>
    </Container>
  </Box>
)

export default Header
