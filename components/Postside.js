import React from 'react'
import Link from 'next/link'

const Postside = ({ title, photo, content, link }) => (
  <div className="post_thumbnail">
    <div className="image-wrap">
      <img src={photo} />
    </div>
    <div className="content-text">
      <Link href={link}>{title}</Link>
    </div>
  </div>
)

export default Postside
