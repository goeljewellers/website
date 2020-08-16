import React from "react"
import { Flex, Text, Box, Link } from "@chakra-ui/core"
import SocialIcon from "../socialicon"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Contact = () => (
  <Box mx="10">
    <Box>
      <Text fontWeight="bold">Contact Us</Text>
      <Text>26/104, Birhana Road</Text>
      <Text>Kanpur, Uttar Pradesh</Text>
      <Text>INDIA - 208001</Text>
      <Link href="mailto:hi@goeljewellers.com">
        <Text>hi@goeljewellers.com</Text>
      </Link>
    </Box>
    <Flex>
      <SocialIcon
        icon={faFacebookF}
        link="https://www.facebook.com/goeljewel"
      />
      <SocialIcon
        icon={faInstagram}
        link="https://instagram.com/goel.jewellers"
      />
    </Flex>
  </Box>
)

export default Contact
