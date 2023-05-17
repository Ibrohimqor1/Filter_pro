import { useCart } from "react-use-cart";
import React, { useContext } from "react";
import { Context } from "../Contex";
import { Link, useParams } from "react-router-dom";
import '../Items/items.scss'


const Daily = () => {
  const { mura, searchText, dataSearch } = useContext(Context);
  const { addItem, getItem, removeItem } = useCart();
   const { data } = useContext(Context);
   
  return (
    <div>
      <div className="container">
          <div className="inppp">
          <input
            className="inputt"
            type="text"
            placeholder="Search ???"
            value={mura}
            onChange={searchText.bind(this)}
          />
          </div>
        <div className="maped">
          {dataSearch.map((el) => {
            console.log(el._id);
            return (
              <Link to={`/card/${el._id}`} >
                <div className="cardPlants" key={el._id}>
                  <img className="cardPlants__img" src={el.image} alt="" />
                  <div className="ggg">
                    <h1 className="cardPlants__h1">{el.title}</h1>
                    <p className="cardPlants__p">{el.desc}</p>
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
    </div>
  );
};

export default Daily;