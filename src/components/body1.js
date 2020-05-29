import React from "react"
import { Box, Flex, Image, Heading } from "theme-ui"
import * as img1 from "../images/jewels2.jpg"

export const Body1 = () => (
  <Flex sx={{ position: "relative" }}>
    <Image src={img1} />
    <Box
      sx={{
        position: "absolute",
        top: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        textAlign: "center",
      }}
    >
      <Heading
        color="white"
        paddingTop={[5, 6, 7]}
        sx={{
          width: "100%",
          textAlign: "center",
          fontSize: [4, 4, 6],
          fontWeight: "light",
        }}
        variant="heading"
      >
        Beautiful and Timeless
      </Heading>
      <Heading
        color="white"
        paddingTop={[2, 3, 4]}
        paddingLeft={[3, 2, 1]}
        paddingRight={[3, 2, 1]}
        sx={{
          width: "100%",
          textAlign: "center",
          fontSize: [2, 3, 5],
          fontWeight: "light",
        }}
        variant="heading"
      >
        Making the jewellery for you, that defines you.
      </Heading>
    </Box>
  </Flex>
)
