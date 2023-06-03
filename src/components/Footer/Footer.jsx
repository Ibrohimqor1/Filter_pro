import React from 'react'
import "../Footer/Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='container'>
            <div className="footer">
                <div  className="footer_items">
                    <h2>Контакты</h2>

                    <div data-aos="flip-up" className="footer_item">
                        <i class="fa-sharp fa-solid fa-phone-volume"></i>
<Link to="tel:+996555993090">
<h4>+996555993090</h4>
</Link>
                        
                    </div>
                    <div data-aos="flip-up" className="footer_item">
                        <i class="fa-sharp fa-solid fa-phone-volume"></i>

                        <h4>+996776971540</h4>
                    </div>
                    <div data-aos="flip-up" className="footer_item">
                        <i class="fa-sharp fa-solid fa-phone-volume"></i>

                        <h4>+996555993090</h4>
                    </div>

                    <div data-aos="flip-up" className="footer_item">
                        <i class="fa-regular fa-envelope"></i>

                        <h4> Араван</h4>
                    </div>

                    <div data-aos="flip-up" className="footer_item">
                        <i class="fa-solid fa-circle-xmark"></i>

                        <h4> Б.Айдаров 94</h4>
                    </div>
                </div>

                <div data-aos="flip-up" className="footer_items">
                    <h2 data-aos="flip-up">О магазине
                    </h2>
                    <div className="footer_item">
                        <i class="fa-regular fa-circle"></i>
<Link to="/">
<h4>Home</h4>
</Link>
                        
                    </div>
                    <div data-aos="flip-up" className="footer_item">
                        <i class="fa-regular fa-circle"></i>
<Link to="/about">
<h4>About</h4>
</Link>
                       
                    </div>
                    <div data-aos="flip-up" className="footer_item">
                        <i class="fa-regular fa-circle"></i>
<Link to="all">
<h4>All Products</h4>
</Link>
                        
                    </div>

                    <div data-aos="flip-up" className="footer_item">
                        <i class="fa-regular fa-circle"></i>

                        <h4 data-aos="flip-up">Contact</h4>
                    </div>


                </div>


                <div data-aos="flip-up" className="footer_items">
                    <h2>Websites</h2>
                    <div className="footer_item">
                        <i class="fa-regular fa-circle-check"></i>

                        <h4>Instagram</h4>
                    </div>
                    <div data-aos="flip-up" className="footer_item">
                        <i class="fa-regular fa-circle-check"></i>

                        <h4>Telegram</h4>
                    </div>
                    <div data-aos="flip-up" className="footer_item">
                        <i class="fa-regular fa-circle-check"></i>

                        <h4>Twitter</h4>
                    </div>

                    <div data-aos="flip-up" className="footer_item">
                        <i class="fa-regular fa-circle-check"></i>

                        <h4>TikTok</h4>
                    </div>

                   
                </div>


                

            </div>
            <hr />

            <div  className="footer_bottom">
                <div className="left">
<h3>© 2023
Интернет-магазин </h3>
                </div>

                <div data-aos="flip-up" className="right">
<h3>Created by Ibroxim Developer</h3>
                </div>
            </div>








        </div>
    )
}

export default Footer