import React from 'react'
import "../Navbar/Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="left">
<img src="https://homefilter.kz/assets/images/common/logo_black.svg" alt="" />
            </div>
            <div className="center">
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="">Home</a></li>
    <li><a href="">Home</a></li>
    <li><a href="">Home</a></li>
    <li><a href="">Home</a></li>
</ul>
            </div>

            <div className="right">
              <Link to="/korzinka">
              <h4>
+7 951 159 1979</h4>
              </Link>

            </div>
        </div>
    </>
  )
}

export default Navbar