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
