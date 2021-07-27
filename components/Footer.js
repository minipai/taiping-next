import React from 'react'
import { RichText } from 'prismic-reactjs'

const Footer = (props) => {
  const { data } = props
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="widget ">
              <h4>交通地圖</h4>
              <div className="desc">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3657.1803787339827!2d120.6005363!3d23.5619643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ec14207b0083b%3A0xdaa3c3b51549194e!2z5aSq5bmz6ICB6KGX!5e0!3m2!1szh-TW!2stw!4v1539276712039"
                  width="600"
                  height="350"
                  frameBorder="0"
                  style={{ border: 0, maxWidth: '100%' }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="widget">
              <h4>聯絡資訊</h4>
              <RichText render={data.contact} />
            </div>
          </div>
        </div>
        <div className="copyright text-center" />
      </div>
    </footer>
  )
}

export default Footer
