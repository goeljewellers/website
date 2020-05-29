import React from "react"
import { Box, Heading, Container, Flex, NavLink } from "theme-ui"

const Header = ({ siteTitle }) => (
  <Box backgroundColor="header">
    <Container
      paddingTop={[3, 4, 4]}
      paddingLeft={[3, 5, 5]}
      paddingRight={[3, 5, 5]}
    >
      <Flex sx={{ alignItems: "center" }}>
        <Heading variant="heading" sx={{ flex: "1 1 auto" }}>
          Goel Jewellers
        </Heading>
        <Heading variant="navs" as="h3">
          About
        </Heading>
        <NavLink href="#contact">
          <Heading variant="navs" as="h3" marginLeft={[2, 3, 4]}>
            Contact Us
          </Heading>
        </NavLink>
      </Flex>
    </Container>
  </Box>
)

export default Header
