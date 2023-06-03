import React from "react";
import "../Mobile/Mobile.css";
import { useCart } from "react-use-cart";

import { Link } from "react-router-dom";
const Mobile = () => {
  const { items } = useCart();
  return (
    <div>
      <div className="Mobile">
        <Link to="/">
          <div className="mobile_item">
            <img
              className="mobile_home"
              src="https://webstockreview.net/images/house-clipart-logo-17.png"
              alt=""
            />
            <h6>Home</h6>
          </div>
        </Link>
        <Link to="/about">
          <div className="mobile_item">
            <img
              className="mobile_home"
              src="http://cdn.onlinewebfonts.com/svg/img_229820.png"
              alt=""
            />
            <h6>About</h6>
          </div>
        </Link>
        <Link to="/contact">
          <div className="mobile_item">
            <img
              className="mobile_home"
              src="https://pic.onlinewebfonts.com/svg/img_189067.png"
              alt=""
            />
            <h6>Contact</h6>
          </div>
        </Link>
        <Link to="/korzinka">
          <div className="mobile_item">
            <img
              className="mobile_home"
              src="https://www.ibu.paris/modules/blockreassurance/views/img/img_perso/caddiee.png"
              alt=""
            />
            <span class="bbs badge rounded-pill badge-notification bg-danger">
              {items.length}
            </span>
            <h6>Korzinka</h6>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Mobile;
