import { useState, useContext, useEffect } from "react";
import "../Sign_Up/Sign_In.css"
import { GetAPIFunc, PostFunc, DeleteDataFunc } from "./../module/api";
import { Context } from "../../Contex";
import Navbar from "../Navbar/Navbar";
export default function Sign__Up() {
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
  
    const SaveUserData = () => {
      PostFunc("/userData", userData)
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
  
      localStorage.setItem("auth", JSON.stringify(userData))
      
    };
  
    const CheckUserFunc = () => {
      GetAPIFunc("/userData").then((data) => {
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
  
        }
      });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("auth", JSON.stringify(userData));
        window.location.replace("/korzinka")
      };
  
  return (
    <div>
        <Navbar/>
      <div className="app__register">
        <form className="app__register__form" onSubmit={handleSubmit}>
          <h1 data-aos="fade-up" className="app__register__h1">
          Зарегистрироваться
          </h1>
          <input
            data-aos="fade-up-right"
            required
            className="app__register__input"
            type="text"
            placeholder="Имя пользователя"
            onChange={(e) => setName(e.target.value)}
          />
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
            onClick={SaveUserData}
          >
            Нажмите
          </button>
        </form>
      </div>
    </div>
  );
};

