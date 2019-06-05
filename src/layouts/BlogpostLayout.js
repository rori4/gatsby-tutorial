import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"


const BlogpostLayout = ({data}) => {
  const post = data.wordpressPost;
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          <h1 dangerouslySetInnerHTML={{__html: post.title}} />
          <div dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogpostLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPost( slug: { eq: $slug }) {
      content
      title
    }
  }
`
