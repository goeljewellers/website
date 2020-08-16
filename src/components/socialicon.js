import React from "react"
import { Link } from "@chakra-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ icon, link }) => (
  <Link href={link} px="2" my="3" target="_blank">
    <FontAwesomeIcon icon={icon} size="2x" />
  </Link>
)
