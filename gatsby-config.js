const siteUrl = process.env.URL || `https://giutarcomposerstoolbox.com`

const cfg = {
  siteMetadata: {
    
    title: `Guitar Composers ToolBox`,
    description: `Tools for guitar and ukulele composers such as chords finders or scale harmonizer`,
    author: `https://github.com/gusblacknails`,
    siteUrl: `https://www.guitarcomposerstoolbox.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",

    }, 
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-5260980741933208`
      },
    },
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

    },
    
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    
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


