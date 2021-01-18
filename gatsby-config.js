module.exports = {
  siteMetadata: {
    title: `JMSD Films`,
    description: `Los Angeles Wedding Photography and Videography studio. Your story, our camera. Let us capture your adventure.`,
    author: `Uplift Digital Solutions`,
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `galleries_json`,
        path: `./src/data/galleries.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `packages_json`,
        path: `./src/data/packages.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `vidoes_json`,
        path: `./src/data/videos.json`,
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Poppins\:300,400,400i,700,800`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
