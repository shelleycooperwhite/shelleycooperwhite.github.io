/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-chakra-ui",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "limelight",
          "karma\:700"
        ],
        display: "swap"
      }
    }
  ],
}
