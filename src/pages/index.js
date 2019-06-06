import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"


export default ({ data }) => {
  console.log(data)
  return (
    <PrimaryLayout column="col-xs-6">
      {data.allWordpressPost.nodes.map(node => (
        <Post
          image={node.featured_media.source_url}
          title={node.title}
          excerpt={node.excerpt}
          readMore={node.slug}
        />
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
  allWordpressPost{
    nodes {
      slug
      title
      excerpt
      featured_media {
        source_url
      }
    }
  }
}
`
