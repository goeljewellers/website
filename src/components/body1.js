import React from "react"
import { Box, Flex, Image, Heading } from "theme-ui"
import * as img1 from "../images/under_construction.png"

export const Body1 = () => (
  <Flex sx={{ position: "relative" }}>
    <Image src={img1} />
    <Box
      sx={{
        position: "absolute",
        top: "0",
        width: "100%",
        height: "100%",

        textAlign: "center",
      }}
    >
      <Heading
        paddingTop={[5, 6, 7]}
        sx={{
          width: "100%",
          textAlign: "center",
          fontSize: [4, 4, 6],
          fontWeight: "light",
        }}
        variant="heading"
      >
        Coming Soon
      </Heading>
      <Heading
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
        An online catalogue of our range of jewelry designs.
      </Heading>
    </Box>
  </Flex>
)
