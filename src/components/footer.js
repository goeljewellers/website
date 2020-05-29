import React from "react"
import { Box, Container, Flex, Text, NavLink } from "theme-ui"
import FacebookLogo from "../images/f.svg"

export const Footer = () => {
  return (
    <footer>
      <Box backgroundColor="footer">
        <Container>
          <Flex
            sx={{ alignItems: "center", alignContent: "center" }}
            padding={2}
          >
            <Text
              variant="footer"
              as="p"
              paddingRight={[2, 3, 3]}
              sx={{ flex: "1 1 auto" }}
            >
              Privacy Policy
            </Text>
            <Text variant="footer" as="p">
              Goel Jewellers
            </Text>
            <NavLink
              href="https://www.facebook.com/goeljewel/"
              marginLeft={[2, 3, 3]}
              sx={{ textAlign: "center", alignContent: "center" }}
            >
              <Flex>
                <FacebookLogo style={{ height: "15px" }} />
              </Flex>
            </NavLink>
          </Flex>
        </Container>
      </Box>
    </footer>
  )
}
