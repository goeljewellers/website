import React from "react"
import { Box, Heading, Container, Button, Text } from "theme-ui"

export const Banner = () => (
  <Box backgroundColor="header">
    <Container
      paddingLeft={3}
      paddingRight={3}
      sx={{ justifyContent: "center", textAlign: "center" }}
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
      <Heading
        variant="heading_italic"
        as="h4"
        paddingTop={3}
        sx={{ flex: "1 1 auto", textAlign: "center" }}
      >
        In Kanpur, Since 1950
      </Heading>
      <Button
        marginTop={5}
        marginBottom={3}
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
    </Container>
  </Box>
)
