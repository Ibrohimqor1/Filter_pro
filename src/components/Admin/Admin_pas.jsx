import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Admin/Login.css";
const Login_admin = () => {
  // password
  const [password, setPassword] = useState("");
  // password
  return (
    <div>
      <section className="admin__sect">
        <div className="container">
          <div className="register">
            <div className="section6__otadiv__text">
              <h1 className="section6__otadiv__text__h1">ENTER YOUR PASSWORD</h1>{" "}
              <br />
              <p className="section6__otadiv__text__p">
                Get our daily updates by subscribing to our newspaper, please
                drop your password below
              </p>
            </div>
            <br />
            <div className="section6__otadiv__input">
              <input
                className="section6__otadiv__input1"
                type="text"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password === "5555" ? (
                <button className="section6__otadiv__input__btn">
                  <Link className="ddd" to="/admin1">
                    <i
                      className="ddd fa-solid fa-check"
                     
                    ></i>
                  </Link>
                </button>
              ) : (
                <button className="section6__otadiv__input__btn1">
                  <i
                    className="fa-solid fa-xmark"
                   
                  ></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login_admin;
