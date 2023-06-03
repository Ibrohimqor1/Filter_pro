
import React, { useContext } from "react";
import { Context } from "../../Contex";
import { Link } from "react-router-dom";
import '../Items/items.scss'
import Top_Nav from "../topNav/topNav";
import Navbar from "../Navbar/Navbar";


const Daily = () => {
  const { mura, searchText, dataSearch } = useContext(Context);



  return (
    <div>
      <Top_Nav/>
<Navbar/>
      <div className="container">
        <div className="inppp">
          <input 
          data-aos="zoom-in-up"
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
                <div data-aos="zoom-in-up" className="container1">
                  <div className="cardPlants" key={el._id}>
                    <img className="cardPlants__img" src={el.image} alt="" />
                    <div className="ggg">
                      <h1 className="cardPlants__h1">{el.title}</h1>
                      <div className="prices">
                        <p className="prices__1">{el.price} com </p>

                      </div>
                      <button className="price__btn">О продукте</button>
                    </div>
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