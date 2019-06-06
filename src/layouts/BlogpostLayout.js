import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

const BlogpostLayout = ({ data }) => {
  const post = data.wordpressPost
  return (
    <div>
      <SEO 
        title={stip(post.title)}
        description={stip(post.excerpt)}
        image={post.featured_media.source_url}
        keywords={post.categories.map(res => res.name).join(', ')}
      />
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

function stip(html) {
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

export default BlogpostLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      content
      title
      featured_media {
        source_url
      }
      categories {
        name
      }
      excerpt
    }
  }
`
