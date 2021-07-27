import React from 'react'
import Pagetitle from 'components/Pagetitle'
import Layout from 'components/Layout'

export default function BlogGrid(props) {
  const { title, children, data } = props

  return (
    <Layout
      data={data}
      className="layout2"
      topComponent={<Pagetitle title={title} />}
    >
      <section className="blog-content blog-grid no-sidebar">
        <div className="row content">{children}</div>
      </section>
    </Layout>
  )
}
