import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../LogoPag.png'
import CartWidge from '../CartWidget/CartWidget'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid ">
        <div className='d-flex justify-content-center justify-align-center'>
          <img src={logo} alt="" width="100" height="100" />
          <CartWidge />
        </div>

        <NavLink className="navbar-brand" to={"/"}>Home</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="navbar-nav">
              <NavLink className="nav-link" to={"/category/M"}>Masculinos</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={"/category/F"}>Femeninos</NavLink>            </li>
            <li>
              <NavLink className="nav-link" to={"/category/N"}> Niños </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={"/login"}>Login</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav >
  )
}


