import React from 'react'
import Layout from 'components/Layout'
import Post from 'components/Post'
import Pagetitle from 'components/Pagetitle'

export default function BlogPost(props) {
  const { children, title, sidebar, sidebarTitle, data } = props

  return (
    <Layout
      data={data}
      className="layout2"
      topComponent={<Pagetitle title={title} />}
    >
      <div className="row mt-5 content">
        <div className="col-md-9">
          <div className="blog-content">{children}</div>
        </div>
        <div className="col-md-3 sidebar mt-0">
          <div className="widget">
            <h4 className="mb-0">{sidebarTitle}</h4>
            {sidebar}
          </div>
        </div>
      </div>
    </Layout>
  )
}
