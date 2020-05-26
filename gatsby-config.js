module.exports = {
  siteMetadata: {
    title: `Goel Jewellers`,
    description: `Gold, diamond and silver jewelry in Kanpur.`,
    author: `@utkarsh867`,
    siteUrl: "https://www.goeljewellers.com/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Goel Jewellers`,
        short_name: `Goel Jewellers`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display`,
          `PT Serif`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-cname",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
