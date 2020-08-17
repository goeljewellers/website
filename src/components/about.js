import React, { useEffect } from "react"
import { Box, Heading, Text, Flex, Grid } from "@chakra-ui/core"
import Img from "gatsby-image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const About = ({ storeImage }) => {
  const [ref, inView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <motion.div
      animate={controls}
      transition={{ duration: 0.8 }}
      initial="hidden"
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
      }}
    >
      <Flex
        py={[10, 12, 16, 16, 24]}
        as={motion.div}
        alignItems="center"
        flexDirection="column"
      >
        <Heading textAlign="center" color="themeBlue.200">
          About Us
        </Heading>
        <Grid
          py={10}
          gridTemplateColumns={[
            "auto",
            "auto",
            "1fr 1fr",
            "1fr 2fr",
            "1fr 2fr",
          ]}
          gridGap={16}
        >
          <Box w="100%">
            <Img fluid={storeImage} />
          </Box>
          <Flex alignItems="center">
            <Text
              ref={ref}
              fontSize={"xl"}
              lineHeight={1.9}
              textAlign="justify"
              px={10}
            >
              Gold, diamond and silver jeweller at the heart of Kanpur city's
              jewellery market, we are one of the oldest and most trusted
              jewellers in Kanpur. Since 1950, we have built a trust in our
              customers and have worked hard to maintain a relationship, in
              which the customer always comes first.
              <br />
              <br />
              It is essential that our customers feel good about wearing their
              jewellery and investing in it as well. Gold jewellery at our store
              is BIS hallmark certified so that our customers can have a peace
              of mind when making their purchase, and after.
            </Text>
          </Flex>
        </Grid>
      </Flex>
    </motion.div>
  )
}

export default About
