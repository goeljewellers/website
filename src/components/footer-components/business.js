import React from "react"
import { Text, Box, Link } from "@chakra-ui/core"

const About = () => (
  <Box mx="10">
    <Box>
      <Text fontWeight="bold">Goel Jewellers</Text>
      <Text>Sitemap</Text>
      <Link href="/privacypolicy">Privacy Policy</Link>
      <Text>Help</Text>
      <Text>FAQ</Text>
    </Box>
  </Box>
)

export default About
