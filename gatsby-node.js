const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.nodes.forEach((node)=>{
        createPage({
            path: node.fields.slug,
            component: path.resolve('./src/layouts/BlogpostLayout.js'),
            context: {
              slug: node.fields.slug
            }
        })
    })
  })
}
