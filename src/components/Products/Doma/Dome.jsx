import React, { useContext } from "react";
import { Link} from "react-router-dom";

import { Context } from "../../../Contex";
import Top_Nav from "../../topNav/topNav";
import Navbar from "../../Navbar/Navbar";

import "../Doma/Doma.scss";

const Charger_Pages = () => {
 
  
  const { data } = useContext(Context);

  const newarray25 = data.filter((el) => el.category === "doma");
  return (
    <>
    <Top_Nav/>
<Navbar/>
  
    <div className="container1">
         <h1>Фильтры для Фильтры для дома</h1>
      <div className="maped">
     
        {newarray25.map((el) => {
          // console.log(el._id);
          return (
            
            <Link to={`/card/${el._id}`}>
               
              <div data-aos="zoom-in-up" className="cardPlants" key={el._id}>
                <img className="cardPlants__img" src={el.image} alt="" />
                <div className="ggg">
                  <h1 className="cardPlants__h1">{el.title}</h1>
                  
                  <div className="prices">
                    <p className="prices__1">{el.price} com </p>
                    
                  </div>
                  <button className="price__btn">О продукте</button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Charger_Pages;