import React, { useReducer } from 'react'
import Link from 'next/link'
import Img from 'next/image'

const MENU = [
  ['地方特色', '/uniques'],
  ['景點', '/attractions'],
  ['遊程', '/tours'],
  ['商家', '/stores'],
  ['住宿', '/stays'],
  ['文環夜學', '/artist'],
]

const Header = (props) => {
  const { data } = props
  const isMobile = false

  const [on, toggleOn] = useReducer((on) => !on, false)
  return (
    <header id="header" className="header">
      <div className="header-inner header-fixed">
        <div className="container">
          <div className="logo">
            <Link href="/" passHref>
              <a>
                <Img src={data.logo.url} alt="Logo" width={150} height={50} />
              </a>
            </Link>
          </div>
          <nav className="pi-navigation">
            {isMobile && (
              <div className="open-menu" onClick={toggleOn}>
                <span className="item item-1" />
                <span className="item item-2" />
                <span className="item item-3" />
              </div>
            )}

            <ul
              className={`
                  navlist 
                  ${isMobile ? 'off-canvas ' : ''} 
                  ${on ? 'off-canvas-active' : ''}
                `}
            >
              {MENU.map(([menu, path], index) => (
                <li key={index}>
                  <Link href={path}>{menu}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
