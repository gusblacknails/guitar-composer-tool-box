// URL canónica (con www). En producción definir URL=https://www.guitarcomposerstoolbox.com
// para sitemap, robots.txt y canonicals y evitar "Page with redirect" en Search Console.
const siteUrl = process.env.URL || `https://www.guitarcomposerstoolbox.com`

const cfg = {
  siteMetadata: {
    title: `Guitar Composers ToolBox`,
    description: `Tools for guitar and ukulele composers: chord finders and scale harmonizer. Free guitar chords chart, ukulele chord finder, and scale harmonizer for composers.`,
    author: `https://github.com/gusblacknails`,
    siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-sitemap',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chord_scale_combinations`,
        path: `${__dirname}/src/data/`,
      },
    },

    "gatsby-plugin-material-ui",
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/guitar.png`, // This path is relative to the root of the site.
      },

    }
    
  ],

}
if (process.env.CONTEXT === "production") {
  const googleAnalyticsCfg = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "UA-150079290-1", // <- your tracking ID
    },
  }
  cfg.plugins.push(googleAnalyticsCfg)
}
module.exports = cfg


