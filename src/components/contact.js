import React from "react"
import {
  Box,
  Heading,
  Container,
  Label,
  Input,
  Textarea,
  Button,
} from "theme-ui"

export const Contact = () => (
  <Box backgroundColor="black" color="#f6f6f6" id="contact">
    <Container
      paddingLeft={3}
      paddingRight={3}
      sx={{ justifyContent: "center", textAlign: "center" }}
    >
      <Heading
        variant="heading"
        as="h1"
        paddingTop={4}
        paddingBottom={4}
        sx={{
          flex: "1 1 auto",
          textAlign: "center",
          fontSize: [4, 4, 6],
          fontWeight: "light",
        }}
      >
        Contact Us
      </Heading>
      <Box paddingBottom={4}></Box>
    </Container>
    <Container paddingLeft={3} paddingRight={3} paddingBottom={4}>
      <Box as="form" onSubmit={e => e.preventDefault()}>
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" mb={3} sx={{ fontFamily: "caps_text" }} />
        <Label htmlFor="phone">Phone</Label>
        <Input
          type="tel"
          name="phone"
          id="phone"
          mb={3}
          sx={{ fontFamily: "caps_text" }}
        />
        <Label htmlFor="comment">Comment</Label>
        <Textarea
          name="comment"
          id="comment"
          rows="6"
          mb={3}
          sx={{ fontFamily: "caps_text" }}
        />
        <Button sx={{ fontFamily: "body" }}>Submit</Button>
      </Box>
    </Container>
  </Box>
)
