import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../LogoPag.png'
import CartWidge from '../CartWidget/CartWidget'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={logo} alt="" width="100" height="100" />
        <NavLink className="navbar-brand" to={"/"}>Home</NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to={"/item/categori/:categoriId"}>Masculinos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/item/categori/:categoriId"}>Femeninos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/item/categori/:categoriId"}> Niños </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/login"}>Login</NavLink>
            </li>
          </ul>
        </div>
        <CartWidge onClick />
      </div>
    </nav>
  )
}