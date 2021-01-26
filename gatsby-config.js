module.exports = {
  siteMetadata: {
    title: `JMSD Films`,
    defaultTitle: `Los Angeles California Wedding Video Studio | JMSD Films.`,
    author: `Uplift Digital Solutions`,
    description: `Los Angeles Wedding Video studio. We create films driven by emotion and aim to capture the
        couple's essence on their special day.`,
    defaultDescription: `Los Angeles Wedding Video studio. We create films driven by emotion and aim to capture the
        couple's essence on their special day.`,

    url: "https://jmsdfilms.com/",
    siteUrl: "https://jmsdfilms.com/",
    image: "/images/jmsdlogo.png",
    defaultImage: "/images/jmsdlogo.png",
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
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
        icon: `src/images/jmsdlogo.png`, // This path is relative to the root of the site.
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
