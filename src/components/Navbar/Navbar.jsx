import React from "react";
import "../Navbar/Navbar.css";
// module
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const Navbar = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const { items } = useCart();
  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/">
            <img
              src="https://homefilter.kz/assets/images/common/logo_black.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="center">
          <ul>
            <Link className="Ul__li" to="/">
              <a href="/">Home</a>
            </Link>
            <Link className="Ul__li" to="/about">
              <a href="">About</a>
            </Link>
            <Link className="Ul__li">
              <a href="">Contact</a>
            </Link>
            <Link className="Ul__li">
              <a href="">Settings</a>
            </Link>
          </ul>
        </div>

        <div className="right">
          <Link to="/korzinka" class="text-reset me-3" href="#">
            <i style={{ width: "20px" }} class="fas fa-shopping-cart"></i>
            <span class="bb badge rounded-pill badge-notification bg-danger">
              {items.length}
            </span>
          </Link>
          <div className="sign__btns">
            <Link to="/sign-up" className="sign__up__btn">
              Sign Up
            </Link>
            <Link to="/sign-in" className="sign__up__btn">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
