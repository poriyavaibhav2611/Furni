import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (

    <>
        {/* Start Header/Navigation  */}
		<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

			<div className="container">
				<a className="navbar-brand" href="index.html">Furni<span>.</span></a>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsFurni">
					<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li className="nav-item active">
							<Link to="/" className="nav-link">Home</Link>
						</li>
						<li><Link to="/shop" className="nav-link">Shop</Link></li>
						<li><Link to="/about" className="nav-link">About us</Link></li>
						<li><Link to="/services" className="nav-link">Services</Link></li>
						<li><Link to="/blog" className="nav-link">Blog</Link></li>
						<li><Link to="/contact" className="nav-link">Contact us</Link></li>
					</ul>

					<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><Link className="nav-link" to="/login"><img src="assets/images/user.svg" /></Link></li>
						<li><Link className="nav-link" to="/cart"><img src="assets/images/cart.svg" /></Link></li>
					</ul>
				</div>
			</div>
				
		</nav>
		{/* End Header/Navigation     */}
    </>

  )
}

export default Nav
