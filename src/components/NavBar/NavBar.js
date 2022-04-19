import React from 'react'
import logo from '../../LogoPag.png'

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="" width="100" height="100"/>
    </a>
    <a class="navbar-brand" href="#">Home</a>
    <a class="navbar-brand" href="#">Tecnologia</a>
    <a class="navbar-brand" href="#">Fitness</a>
    <a class="navbar-brand" href="#">Bazar</a>
    <a class="navbar-brand" href="#">Login</a>
  </div>
</nav>
  )
}

