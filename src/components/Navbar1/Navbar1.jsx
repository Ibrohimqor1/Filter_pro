import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import "../Navbar1/Navbar.scss";
import { NavLink, Link } from "react-router-dom";



import { Context } from "../../Contex";

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
    window.location.replace("/register");
  };
  return (
    <div>
        
      {/* <!-- Navbar --> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <!-- Container wrapper --> */}
        <div class="container">
          <img
          data-aos='fade-right'
            className="nav1__left__img1"
            style={{ width: "150px" }}
            // src={Logo}
            alt=""
          />
          {/* <!-- Toggle button --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i style={{color:'red'}} class="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="asdf navbar-nav m-auto mb-2 mb-lg-0"data-aos='fade-up'>
              <li class=" li_navbar nav-item">
                <a class="li__a nav-link active" href="#">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "activeLink" : "dropbtn2"
                    }
                  >
                    HOME
                  </NavLink>
                </a>
              </li>
              <div class="dropdown">
                <button class="dropbtn ">CATEGORIES</button>
                <div class="dropdown-content">
                  <div className="drop_btn"data-aos='fade-up'>
                    <NavLink to="/airdopes" className="category_a">
                      <img
                        width="35px"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_100x.png?v=1663752600"
                        alt=""
                      />
                      <h6> Airdopes</h6>
                    </NavLink>
                    <NavLink to="/nescbands" className="category_a">
                      <img
                        width="35px"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1678359377"
                        alt=""
                      />
                      <h6>Neckbands</h6>
                    </NavLink>
                    <NavLink to="/smartwatch" className="category_a">
                      <img
                        width="35px"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/smartwatches_100x.png?v=1676372848"
                        alt=""
                      />
                      <h6>Smart Watch</h6>
                    </NavLink>
                    <NavLink to="/headphones" className="category_a">
                      <img
                        width="35px"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rockerz_100x.png?v=1678365843"
                        alt=""
                      />
                      <h6> Headphones</h6>
                    </NavLink>
                    <NavLink to="/speaker" className="category_a">
                      <img
                        width="35px"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_100x.png?v=1663753243"
                        alt=""
                      />
                      <h6> Speakers</h6>
                    </NavLink>
                    <NavLink to="/headphones" className="category_a">
                      <img
                        width="35px"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bassheads-Wired-Headphones_0877b292-85ab-42ed-a055-26e1c246be73_100x.png?v=1678364207"
                        alt=""
                      />
                      <h6>HeadPhones</h6>
                    </NavLink>
                    <NavLink to="/earphones" className="category_a">
                      <img
                        width="35px"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_100x.png?v=1663753167"
                        alt=""
                      />
                      <h6> Earphones</h6>
                    </NavLink>
                  </div>
                </div>
              </div>
              <li class="li__a nav-link active">
                <NavLink
                  to="/dailyDeals"
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "dropbtn2"
                  }
                >
                  DAILY DEALS
                </NavLink>
              </li>

              <li class="li__a nav-link active">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "dropbtn2"
                  }
                >
                  GIFT WITH TRAILFX
                </NavLink>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div class="d-flex align-items-center"data-aos='fade-left'>
            {/* <!-- Icon --> */}
            <Link to="/korzinka" class="text-reset me-3" href="#">
              <i style={{width:"20px"}} class="fas fa-shopping-cart"></i>
              <span class="badge rounded-pill badge-notification bg-danger">
                {items.length}
              </span>
            </Link>
            {/* <!-- Avatar --> */}
            {localStorage.getItem("auth") ? (
              <div class="dropdown">
                <a
                  class="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="http://cdn.onlinewebfonts.com/svg/img_81837.png"
                    class="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <Link to="/my-profile" class="dropdown-item" href="#">
                      My profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      class="dropdown-item"
                      href="#"
                      onClick={Logout}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
    </div>
  );
};

export default Navbar;
