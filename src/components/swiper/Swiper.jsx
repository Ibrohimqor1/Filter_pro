import React from 'react'
import Header from '../Header/Header'
import "../swiper/Swiper.css"
const Swiper = () => {
  return (
    <div>
        <div className="swiper">
            <div className="components">
             <h1>Categories</h1>
             <h3>All Products</h3>
             <div className="container">
             <div className="categ">
                <img src="https://delux.kg/wp-content/uploads/2020/07/oc22.png" alt="" />
                <h3>Фильтры для Фильтры для дома </h3>
             </div>
             <div className="categ">
                <img src="https://delux.kg/wp-content/uploads/2020/07/zratttttt.png" alt="" />
                <h3>Полупромышленный фильтр</h3>
             </div>
             <div className="categ">
                <img src="https://delux.kg/wp-content/uploads/2020/07/zrat2-1.png" alt="" />
                <h3>Картриджи для фильтров</h3>
             </div>

             <div className="categ">
                <img src="https://delux.kg/wp-content/uploads/2020/07/zrat.png" alt="" />
                <h3>Магистральные фильтры </h3>
             </div>
             <div className="categ">
                <img src="https://delux.kg/wp-content/uploads/2020/07/zrart3.png" alt="" />
                <h3>Запасные части </h3>
             </div>
             </div>
            </div>

            <div className="swiper2">
                <Header/>
            </div>
        </div>
    </div>
  )
}

export default Swiper