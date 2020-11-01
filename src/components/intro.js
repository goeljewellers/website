import React from "react"
import { Flex, Box, Heading, Button, Text } from "@chakra-ui/core"
const Intro = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      px={10}
      py={16}
      backgroundColor="footer"
    >
      <Heading
        paddingTop={[5, 5, 6]}
        fontSize={["xl", "2xl", "4xl", "5xl"]}
        textAlign="center"
        color="white"
      >
        Your most trusted jeweller
    </Heading>
      <Heading
        paddingTop={[5, 5, 6]}
        fontSize={["xl", "2xl", "4xl", "5xl"]}
        textAlign="center"
        color="white"
      >
        In Kanpur, Since 1950
    </Heading>
      <Button
        my="10"
        onClick={() => {
          window.location.href = "https://signup.goeljewellers.com"
        }}
      >
        <Text variant="body">Subscribe</Text>
      </Button>
      <Box paddingBottom={4}>
        <Text textAlign="center" color="white">
          So that we can keep in touch with you for exciting offers.
      </Text>
      </Box>
    </Flex>
  )
}

export default Intro