import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Context } from "../../../Contex";


import "../Doma/Doma.scss";

const Charger_Pages = () => {
  const { addItem, getItem, removeItem } = useCart();
  const [setData] = useState([]);
  const { data } = useContext(Context);

  const newarray25 = data.filter((el) => el.category === "promish");
  return (
    <div className="container1">
         <h1>Полупромышленный фильтр</h1>
      <div className="maped">
     
        {newarray25.map((el) => {
          console.log(el._id);
          return (
            
            <Link to={`/card/${el._id}`}>
               
              <div className="cardPlants" key={el._id}>
                <img className="cardPlants__img" src={el.image} alt="" />
                <div className="ggg">
                  <h1 className="cardPlants__h1">{el.title}</h1>
                  
                  <div className="prices">
                    <p className="prices__1">{el.price} $</p>
                    <p className="prices__2">{el.oldPrice} $</p>
                  </div>
                  <button className="price__btn">ADD TO CARD</button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Charger_Pages;