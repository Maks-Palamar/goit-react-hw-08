import React from 'react'
import Navigation from '../Navigation/Navigation'
import AuthNav from '../Navigation/AuthNav'
import UserMenu from '../Navigation/UserMenu'

const AppBar = () => {
  return (
    <div>
        <Navigation />
        <AuthNav/>
        <UserMenu/>        
    </div>
  )
}

export default AppBar