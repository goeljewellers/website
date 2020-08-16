import React from "react"
import { Heading, Text, Flex, Link } from "@chakra-ui/core"

const Header = () => (
  <Flex py="10" px="10" alignItems="baseline">
    <Heading variant="heading" flex="1 1 auto">
      Goel Jewellers
    </Heading>
    <Text variant="navs" as="h3">
      About
    </Text>
    <Link href="#contact">
      <Text variant="navs" as="h3" marginLeft={[2, 3, 4]}>
        Contact Us
      </Text>
    </Link>
  </Flex>
)

export default Header
