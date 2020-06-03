module.exports = {
  siteMetadata: {
    title: `dot.codes`,
    author: `dot`,
    description: `dot website`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/_dot`,
      },
      {
        name: `github`,
        url: `https://github.com/dot`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        contentPath: `content/posts`,
        basePath: `/`,
        assetPath: `content/assets`,
        mdx: true
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
