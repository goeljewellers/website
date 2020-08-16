import React from "react"
import { Box, Flex, Heading, Button, Text } from "@chakra-ui/core"

export const Banner = () => (
  <Flex
    backgroundColor="header"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    py="24"
  >
    <Heading
      variant="heading"
      as="h1"
      paddingTop={[5, 5, 6]}
      sx={{
        flex: "1 1 auto",
        textAlign: "center",
        fontSize: [4, 4, 6],
        fontWeight: "light",
      }}
    >
      Your most trusted jeweller
    </Heading>
    <Heading variant="heading_italic" as="h4" paddingTop={3}>
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
      <Text variant="heading_italic">
        So that we can keep in touch with you for exciting offers.
      </Text>
    </Box>
  </Flex>
)
