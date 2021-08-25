// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
// const { createFilePath } = require("gatsby-source-filesystem")

// exports.onCreateNode = args => {
//   const { actions, Node } = args

//   if (Node.internal.type === "MarkdownRemark") {
//     const { createNodeField } = actions

//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const data = require('./src/data/chord_scale_combinations.json')
exports.createPages = ({ actions }) => {
    const { createPage } = actions

    const template = path.resolve("./src/templates/guitar_harmonizer_template.js")

    data.forEach(page => {

        createPage({
            path: `/guitar-harmonizer/${page.slug}`,
            component: template,
            context: page
        })
    })
}
