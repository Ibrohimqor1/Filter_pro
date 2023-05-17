import React, {useContext} from "react";
import "../Navbar/Navbar.css"
import { Link } from 'react-router-dom'
import { Context } from "../../Contex";
import { useCart } from "react-use-cart";
import icon from "../Navbar/icon_kor.png";
const Navbar = () => {

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const { items } = useCart();
  
  const {logoutClasses, LogoutFunc} = useContext(Context);
  LogoutFunc()
  const Logout = ()=>{
    localStorage.removeItem("auth")
    LogoutFunc()
    window.location.replace("/register")
    
  }
  return (
    <>
        <div className="navbar">
            <div className="left">
<img src="https://homefilter.kz/assets/images/common/logo_black.svg" alt="" />
            </div>
            <div className="center">
<ul>
    <li><a href="">Home</a></li>
    <li><a href="">Home</a></li>
    <li><a href="">Home</a></li>
    <li><a href="">Home</a></li>
    <li><a href="">Home</a></li>
</ul>
            </div>

            <div className="right">
<h4>
+7 951 159 1979</h4>
{/* <Link to="/regis">
<button >Registration </button>
</Link> */}
<div class="nav ">
              
              <Link to="/korzinka">
                <span className="ff1">{items.length}</span>
                <img className="s" width="24px" src={icon} alt="" />
              </Link>
              <button className="btn btn-light" onClick={Logout} >Sign Up</button>
              <Link to="/regis"  className="btn btn-light" >Sign In</Link>
            </div>

            </div>
        </div>
    </>
  )
}

export default Navbar