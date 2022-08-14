import React from 'react'
import Footer from './footer'
import NavBar from './navbar'


const Layout = ({ children,session }) => {
  return (
        <>
            <NavBar session={session}  >
            </NavBar>
            {children}
            <Footer>
            </Footer>
        </>
  )
}

export default Layout
