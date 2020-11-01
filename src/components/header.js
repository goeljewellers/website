import React from "react"
import { Text, Flex, Link } from "@chakra-ui/core"

const Header = () => (
  <Flex py="10" px={[8, 10]} alignItems="baseline" position="absolute" width="100%">
    <Text variant="navs" as="h3" display={["none", "inline"]} ml="auto">
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
