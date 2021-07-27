import React from 'react'
import Link from 'next/link'

const Postbox = ({ title, photo, content, link }) => {
  return (
    <div className="post">
      <div className="post-media">
        <div className="image-wrap">
          <img src={photo} />
        </div>
      </div>
      <div className="post-body">
        <div className="post-title">
          <h2>
            <Link href={link}>{title}</Link>
          </h2>
        </div>

        <div
          className="post-entry"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="post-link">
          <Link href={link}>詳細資訊</Link>
        </div>
      </div>
    </div>
  )
}

export default Postbox
