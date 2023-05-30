import React from "react";
import "../Sign_In/Sign__in.css";
import { Context } from "../../Contex";
import { useContext } from "react";
import { GetAPIFunc } from "../module/api";
import Navbar from "../Navbar/Navbar";

export default function Sign_in() {
    const {
        user,
        setUser,
        pass,
        setPass,
        userData,
        LogoutFunc,
        // number,
        // setNumber,
        name,
        setName,
      } = useContext(Context);
    
      const CheckUserFunc = () => {
        GetAPIFunc("/userData").then((data, index) => {
          for (let i = 0; i < data.length; i++) {
            const element = data[i];
            
            if (element.id && element.login == user) {
              
              window.location.replace("/")
              localStorage.setItem("auth", JSON.stringify(element))
            } else {
              window.location.replace("/")
            }
          }
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };


  return (
    <div>
        <Navbar/>
      <div className="app__register">
        <form className="app__register__form" onSubmit={handleSubmit}>
          <h1 data-aos="fade-up" className="app__register__h1">
          Войти
          </h1>
          <input
            data-aos="fade-up-right"
            required
            className="app__register__input"
            type="email"
            placeholder="Ваш @gmail.com"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            data-aos="fade-up-left"
            required
            className="app__register__input"
            type="number"
            placeholder="Номер телефона"
            onChange={(e) => setPass(e.target.value)}
          />
          <button
            data-aos="fade-up"
            className="app__register__btn"
            onClick={CheckUserFunc}
          >
            Нажмите
          </button>
        </form>
      </div>
    </div>
  );
};
