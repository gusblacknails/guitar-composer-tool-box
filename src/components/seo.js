/**
 * SEO component: meta tags, canonical, Open Graph, Twitter, JSON-LD.
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

function SEO({ description, lang, meta, title, noindex, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const { pathname } = useLocation()
  const metaDescription = description || site.siteMetadata.description
  const canonical = `${site.siteMetadata.siteUrl}${pathname}`
  const ogImage = image ? `${site.siteMetadata.siteUrl}${image}` : null

  const baseMeta = [
    { name: `description`, content: metaDescription },
    { property: `og:title`, content: title },
    { property: `og:description`, content: metaDescription },
    { property: `og:type`, content: `website` },
    { property: `og:url`, content: canonical },
    { name: `twitter:card`, content: ogImage ? `summary_large_image` : `summary` },
    { name: `twitter:creator`, content: site.siteMetadata.author },
    { name: `twitter:title`, content: title },
    { name: `twitter:description`, content: metaDescription },
  ]

  if (noindex) {
    baseMeta.push({ name: `robots`, content: `noindex, nofollow` })
  }

  if (ogImage) {
    baseMeta.push({ property: `og:image`, content: ogImage })
  }

  const jsonLd = {
    "@context": `https://schema.org`,
    "@type": `WebApplication`,
    name: site.siteMetadata.title,
    description: site.siteMetadata.description,
    url: site.siteMetadata.siteUrl,
    applicationCategory: `MusicApplication`,
    author: { "@type": `Person`, url: site.siteMetadata.author },
  }

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[{ rel: `canonical`, href: canonical }]}
      meta={baseMeta.concat(meta)}
    >
      {!noindex && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  noindex: false,
  image: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  noindex: PropTypes.bool,
  image: PropTypes.string,
}

export default SEO
