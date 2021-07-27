import React from 'react'
import { RichText } from 'prismic-reactjs'

const Post = (props) => {
  const { title, photo, content } = props
  return (
    <div className="post">
      <div className="post-media">
        <div className="sticky-icon">
          <i className="fa fa-thumb-tack" />
        </div>
        <div className="image-wrap">
          <img src={photo} />
        </div>
      </div>
      <div className="post-body" style={{ padding: '30px' }}>
        <div className="post-title">
          <RichText render={title} />
        </div>

        <div className="post-entry">
          <RichText render={content} />
        </div>
      </div>
    </div>
  )
}

export default Post
