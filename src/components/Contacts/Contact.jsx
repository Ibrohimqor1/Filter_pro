import React from 'react'
import "../Contacts/Contact.css"
const Contact = () => {
  return (
    <>
    <div className="contacts">

    <div className="contact_main">
    <h1 data-aos="zoom-in-up">НАШИ КОНТАКТЫ</h1>
        <h3 data-aos="zoom-in-up" className='h3'>Адрес Ош область Араван район ул. Б.Айдаров 94    Пн-Вс 09:00 - 19:00</h3>

    </div>
        

        <div className="cards">
            <div data-aos="zoom-in-up" className="card">
                <div  className="card_1part">
                    <img src="https://homefilter.kz/assets/images/contacts/pin.svg" alt="" />
                </div>
                <div data-aos="zoom-in-up" className="card_2part">
                    <div className="parts">
                    <h4>Адрес офиса:</h4>
                    <h3>Ош область Араван район ул. Б.Айдаров 94</h3>
                    </div>

                    <div className="parts">
                    <h4>Телефон:</h4>
                    <h3>+996555993090</h3>
                    <h3>+996776971540</h3>
                    </div>

                    <div className="parts">
                    <h4>E-mail:</h4>
                    <h3>Ibrohim.developerku1@gmail.com</h3>
                    
                    </div>
                  


                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Contact