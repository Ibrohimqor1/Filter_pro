import React from "react";
import "../CategCard/CategCad.scss";
import { Link } from "react-router-dom";
const CategCard = () => {
  return (
    <>
      <div className="container">
        <div className="Categ_Cards" data-aos="fade-up">
          <Link to="/doma">
            <div className="card1" data-aos="fade-up">
              <img
                className="cat_img"
                src="https://www.filtershop.co.za/images/thumbs/0006767_domestic-water-filters_370.jpeg"
                alt=""
              />
              <h3>Фильтры для Фильтры <br /> для дома</h3>
            </div>
          </Link>

          <Link to="promish">
            <div className="card1" data-aos="fade-up">
              <img
                className="cat_img"
                src="https://filtershop.co.za/images/thumbs/0006764_complete-home-filters-range_370.png"
                alt=""
              />
              <h3>Полупромышленный фильтр</h3>
            </div>
          </Link>

          <Link to="kortrij">
            <div className="card1" data-aos="fade-up">
              <img
                className="cat_img"
                src="https://filtershop.co.za/images/thumbs/0006763_under-the-counter-water-filters-range_370.png"
                alt=""
              />

              <h3>Картриджи для фильтров</h3>
            </div>
          </Link>
          <Link to="magis">
            <div className="card1" data-aos="fade-up">
              <img
                className="cat_img"
                src="https://www.filtershop.co.za/images/thumbs/0007071_replacement-filters-and-membranes_370.jpeg"
                alt=""
              />
              <h3>Магистральные фильтры</h3>
            </div>
          </Link>
          <Link to="zapchas">
            <div className="card1" data-aos="fade-up">
              <img
                className="cat_img"
                src="https://filtershop.co.za/images/thumbs/0006768_borehole-river-water-solutions_370.png"
                alt=""
              />
              <h3>Запасные части</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategCard;
