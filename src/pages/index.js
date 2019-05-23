import React from "react"

import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"
export default () => (
  <PrimaryLayout column="col-xs-6">
    <Post
      title="This is our first post"
      excerpt="We are writing something to be displayed in our excerpt"
    />
    <Post
      title="This is our first post"
      excerpt="We are writing something to be displayed in our excerpt"
    />
    <Post
      title="This is our first post"
      excerpt="We are writing something to be displayed in our excerpt"
    />
    <Post
      title="This is our first post"
      excerpt="We are writing something to be displayed in our excerpt"
    />
  </PrimaryLayout>
)
