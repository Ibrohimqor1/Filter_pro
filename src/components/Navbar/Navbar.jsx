import { Context } from "../../Contex";
import React, { useContext } from "react";
import "../Navbar/Navbar.css";
import Logo from '../../components/Images/logo.png'
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

  const { logoutClasses, LogoutFunc } = useContext(Context);
  LogoutFunc();
  const Logout = () => {
    localStorage.removeItem("auth");
    LogoutFunc();
    window.location.replace("/");
  };

  const navRightFunc = () => {
    return (
      <React.Fragment>
        <div className="sign">
          <Link to="/sign-up" className="sign__up__btn1">
          Sign In
          </Link>
          <Link to="/sign-in" className="sign__up__btn">
          Sign Up
          </Link>
        </div>
      </React.Fragment>
    );
  };

  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/">
            <img
            className="logo_"
              src="https://www.barbersociety.ro/wp-content/uploads/2018/01/Logo-BBS-Alb.png"
              alt=""
            />
          </Link>
        </div>
        <div className="center">
          <ul>
            <Link className="Ul__li" to="/">
              <a href="/">About Us</a>
            </Link>
            <Link className="Ul__li" to="/about">
              <a href="">Services</a>
            </Link>
            <Link to="/contact" className="Ul__li">
              <a href="">Contact</a>
            </Link>
          </ul>
        </div>

         <div className="sign__btns">

          {JSON.parse(localStorage.getItem("auth")) ? "" : navRightFunc()}
          {localStorage.getItem("auth") ? (
            <div class="dropdown">
              <Link to="/sign-up" class="aaa" href="#" onClick={Logout}>
              Выйти
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
