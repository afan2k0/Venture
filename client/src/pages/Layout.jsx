import React from 'react'
import { Link, Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="login">Login</Link>
        <Link to="menu">Menu</Link>
        <Outlet />
    </>
  )
}

export default Layout