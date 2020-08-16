import React from "react"
import { Heading, Text, Flex, Link } from "@chakra-ui/core"

const Header = () => (
  <Flex py="10" px={[8, 10]} alignItems="baseline">
    <Heading
      variant="heading"
      flex="1 1 auto"
      fontSize={["lg", "xl", "2xl", "3xl"]}
    >
      Goel Jewellers
    </Heading>
    <Text variant="navs" as="h3" display={["none", "inline"]}>
      About
    </Text>
    <Link href="#contact" display={["none", "inline"]}>
      <Text variant="navs" as="h3" marginLeft={[2, 3, 4]}>
        Contact Us
      </Text>
    </Link>
  </Flex>
)

export default Header
