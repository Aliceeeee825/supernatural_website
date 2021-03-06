module.exports = {
  pathPrefix: "/supernatural_website",
  siteMetadata: {
    title: `supernatural`,
    description: `Meet the first certified non-toxic cleaner, made from 100% all-natural ingredients.`,
    author: `Alice Song`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "supernaturalelixirs",
        accessToken: "8304c9989a6d592821e8a47d57269e06",
        apiVersion: "2020-01",
        verbose: true,
        includeCollections: ["shop", "content"],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
