export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Lato, sans-serif",
    heading: "'Playfair Display', serif",
    caps_text: "Lato, sans-serif",
    monospace: "Menlo, monospace",
  },
  sizes: {
    container: "1024px",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    light: 300,
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#000",
    secondary: "#fff",
    muted: "#fff",
    header: "rgba(248, 213, 99, 0.9)",
    footer: "#D4D4D4",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [2, 3, 4],
    },
    heading_italic: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "light",
      fontStyle: "italic",
      fontSize: [1, 2, 3],
    },
    caps: {
      fontFamily: "caps_text",
      lineHeight: "heading",
      fontWeight: "light",
      fontSize: [1, 2, 3],
    },
    navs: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "light",
      fontSize: [1, 2, 3],
    },
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: [1, 1, 2],
    },
    body_light: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "light",
      fontSize: [1, 1, 2],
    },
    footer: {
      fontFamily: "heading",
      lineHeight: "body",
      fontWeight: "light",
      fontSize: [0, 0, 1],
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: [3, 4, 5],
    },
    h2: {
      variant: "text.heading",
      fontSize: [2, 3, 4],
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
      marginLeft: 5,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
}
