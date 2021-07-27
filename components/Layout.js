import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
  const {
    children = null,
    className,
    data,
    full,
    topComponent,
    bottomComponent,
  } = props
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div id="page-wrap" className={className}>
        <Header data={data} />
        {topComponent}
        <div className={full ? '' : 'container'}>{children}</div>
        {bottomComponent}
        <Footer data={data} />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
