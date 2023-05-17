import { Context } from "../../Contex";
import { Link, useParams } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";

import { useCart } from "react-use-cart";

import "../Inner_Side/inner_side.scss"

const Daily_Cards = () => {
  const { addItem, getItem, removeItem } = useCart();
  const [setData] = useState([]);
    const {data} = useContext(Context)
    const { _id } = useParams();

 const paramsFind = data?.find((el) => {
    return el._id === _id
 })

  return (
    <div>
      
      <div className="container">
        <div className="maped_card">
          <div className="cardPlants_card" key={paramsFind?._id}>
            <img className="cardPlants_card__img" src={paramsFind?.image} alt="" />
            <div className="ggg_card">
              <h1 className="cardPlants_card__h1">{paramsFind?.title}</h1>
              <hr />
             <div className="texts_card">
             <p className="cardPlants_card__p">{paramsFind?.desc}</p>
              <div className="prices_card">
                <p className="prices_card__1">{paramsFind?.oldPrice} $</p>
                <p className="prices_card__2">{paramsFind?.price} $</p>
              </div>
              {!getItem(paramsFind._id) ? (
                    <button
                      onClick={() => addItem({ ...paramsFind, id: paramsFind._id })}
                      className="price_card__btn"
                    >
                      ADD TO CARD
                    </button>
                  ) : (
                    <button
                      className="price_card__btn1"
                      onClick={() => removeItem(paramsFind._id)}
                    >
                      REMOVE TO CARD
                    </button>
                  )}
             </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Daily_Cards;
