import React from "react"
import { Box } from "@chakra-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ icon }) => (
  <Box pr="5" my="5">
    <FontAwesomeIcon icon={icon} size="2x" />
  </Box>
)
