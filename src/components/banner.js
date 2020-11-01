import React from "react"
import { Box, Flex } from "@chakra-ui/core"
import Logo from "../images/logo.svg"

export const Banner = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    h="100vh"
    px={10}
  >
    <Box px={[0, 0, 8, 10, 64]}>
      <Logo style={{ width: "100%", height: "auto" }} />
    </Box>
  </Flex>
)
