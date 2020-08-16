import React from "react"
import { Text, Box } from "@chakra-ui/core"

const About = () => (
  <Box mx="10" display={["none", "none", "block", "block", "block"]}>
    <Text fontWeight="bold">About Us</Text>
    <Text>Our Story</Text>
    <Text>Blog</Text>
  </Box>
)

export default About
