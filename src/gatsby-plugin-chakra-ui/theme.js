import { theme } from "@chakra-ui/core"

export default {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: "Heebo, sans-serif",
  },
  colors: {
    ...theme.colors,
    footer: "#1a203d",
    themeBlue: {
      50: "#575b75",
      200: "#454754",
      400: "#1a203d",
    },
    footerText: "#dadada",
  },
}
