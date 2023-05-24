import React from 'react'
import "../Navbar/Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/">

            <img src="https://homefilter.kz/assets/images/common/logo_black.svg" alt="" />
          </Link>
        </div>
        <div className="center">
          <ul>
            <li><a href="/">Home</a></li>
            <Link to="/about"><a href="">About</a></Link>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <Link to="/admin">
              <li><a href="">Admin</a></li>
            </Link>

          </ul>
        </div>

        <div className="right">
          <Link to="/korzinka">
            <h4>
              <img className='icon' src="https://www.ibu.paris/modules/blockreassurance/views/img/img_perso/caddiee.png" alt="" /></h4>
          </Link>

        </div>
      </div>
    </>
  )
}

export default Navbar