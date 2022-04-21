import React from 'react'
import logo from '../../LogoPag.png'
import CartWidge from '../CartWidget/CartWidget'

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="" width="100" height="100"/>
    </a>
    <a className="navbar-brand" href="#">Home</a>
    <a className="navbar-brand" href="#">Tecnologia</a>
    <a className="navbar-brand" href="#">Fitness</a>
    <a className="navbar-brand" href="#">Bazar</a>
    <a className="navbar-brand" href="#">Login</a>
    <CartWidge/>
  </div>
</nav>
  )
}

