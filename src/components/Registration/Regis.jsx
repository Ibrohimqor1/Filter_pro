import { useState, useContext } from "react";

import "../Registration/Regis.css";
import { Context } from "../../Contex";

export default function Register() {
  const {user, setUser, pass, setPass, userData, LogoutFunc, number, setNumber, name, setName} = useContext(Context)
  
  const [values, setValues] = useState({
    user: "",
    number:"",
    email: "",
    password: "",
  });

  const SaveUserData = () =>{
    localStorage.setItem("auth", JSON.stringify(userData))
    window.location.replace("/")
  }


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      
      <div className="app__register">
        <form className="app__register__form" onSubmit={handleSubmit}>
          <h1 className="app__register__h1">Register</h1>
          <input className="app__register__input" type="text" placeholder="Username" onChange={(e)=> setName(e.target.value)} />
          <input className="app__register__input"  type="number"  placeholder="+ 998 9_ ___ __ __"  onChange={(e)=> setNumber(e.target.value)}/>
          <input className="app__register__input"  type="email" placeholder="_@gmail.com" onChange={(e)=> setUser(e.target.value)} />
          <input className="app__register__input"  type="password" placeholder="Password"  onChange={(e)=> setPass(e.target.value)} />
          <button className="app__register__btn" onClick={SaveUserData} >Submit</button>
        </form>
      </div>
    </div>
  );
}
