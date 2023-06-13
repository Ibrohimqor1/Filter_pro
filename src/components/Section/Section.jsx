import React from "react";
import "../Section/Section.css";
const Section = () => {
  return (
    <>
      <div className="section">
        <div data-aos="zoom-in-up" className="section_left">
          <div className="section__left__filters">
            <img
              data-aos="zoom-out-up"
              className="filter__1"
              src="https://hips.hearstapps.com/hmg-prod/images/gh-032822-best-water-filter-pitchers-1648479293.png"
              alt=""
            />
            <img
              data-aos="zoom-out-up"
              className="filter__1"
              src="https://cdn.healthykitchen101.com/reviews/images/water-filters/best-water-filter-pitchers-cldxy4lp50027de88al2vcr42.jpg?w=960&h=640&q=90"
              alt=""
            />
          </div>
          <div className="section__left__filters">
            <img
              data-aos="zoom-out-up"
              className="filter__2"
              src="https://m.media-amazon.com/images/I/61l4yBNtN9L.jpg"
              alt=""
            />
            <img
              data-aos="zoom-out-up"
              className="filter__2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDl93XKyPqgmU-sFsVCSHazKJIhDFseYuSEfzJrJ-rjNMtMjUBOYj0sryq8UCSS4s0HXI&usqp=CAU"
              alt=""
            />
          </div>
        </div>
        <div data-aos="zoom-in-up" className="section_right">
          <h4>Ставим</h4>
          <h2>КАЧЕСТВЕННЫЙ ФИЛЬТР</h2>
          <p>
            Мы устанавливаем умный фильтр по системе обратного осмоса от <br />{" "}
            американской компании HomeFilter. Это высококачественный фильтр с{" "}
            <br /> 3-х летней гарантией, с интеллектуальной системой управления
            фильтром и индикатором качества <br /> воды.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section;
