import React from 'react'
import Navigation from '../Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import AppBar from '../AppBar/AppBar'

const Layout = () => {
  return (
    <div>
        {/* <Navigation /> */}
        <AppBar />
        <Outlet />
    </div>
  )
}

export default Layout