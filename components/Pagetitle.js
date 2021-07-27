import React from 'react'

const Pagetitle = ({ title, photo, description, link }) => (
  <section className="search-section">
    <div className="pt-4 pb-2">
      <div className="container">
        <div className="text-content">
          <h3 className="h2">{title}</h3>
          <div
            className="post-entry"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  </section>
)

export default Pagetitle
