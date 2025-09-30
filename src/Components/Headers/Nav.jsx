import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      {/* Start Header/Navigation  */}
      <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">

        <div className="container">
          <NavLink className="navbar-brand" to="/">Furni<span>.</span></NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/shop" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blog" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                >
                  Contact us
                </NavLink>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <NavLink to="/login" className="nav-link">
                  <img src="assets/images/user.svg" alt="user"/>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="nav-link">
                  <img src="assets/images/cart.svg" alt="cart"/>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Header/Navigation     */}
    </>
  )
}

export default Nav
