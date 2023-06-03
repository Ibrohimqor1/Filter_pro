import React from "react";
import "../Contact/Contact.css";
import Navbartop from "../topNav/topNav";
import Navbar from "../Navbar/Navbar";
const Contact = () => {
  return (
    <div>
      <Navbartop />
      <Navbar />
      <div class="big_div">
        <div class="left_div_1">
          <h1>Контакты</h1>

          {/* <div class="left_div_2">
            <div className="text_contact" class="div__p">
              <p class="p___">+998 71-203-12-12</p>
              <p class="p___">+998 71-203-55-55</p>
            </div>
          </div> */}

          <div class="left_div_3">
            <h4 className="text_contact">Телефоны доставки:</h4>
            <div class="div_p">
              <p class="p___">+998 71-203-12-12 (единый номер доставки)</p>
            </div>
          </div>
          <hr className="hrr" />

          <div class="left_div_4">
            <h4 className="text_contact">Адрес офиса:</h4>
            <div class="div_p">
              <p class="p___">
                г. Ташкент, 100066, Чиланзарский р-н., тупик Фурката, 175
              </p>
            </div>
          </div>

          <div class="left_div_5">
            <h4 className="text_contact">Часы работы офиса:</h4>
            <div class="div_p">
              <p class="p___">9:00 – 18:00</p>
              <p class="p___">Выходные: суббота, воскресенье</p>
            </div>
          </div>

          <div class="left_div_6">
            <h4 className="text_contact">Электронная почта:</h4>
            <div class="div_p">
              <p class="p___">
                HR – rabota@evos.uz Маркетинг – marketing@evos.uz
              </p>
            </div>
          </div>

          <div class="btn_p">
            <a class="a_teg_link_evos" href="#">
              https://t.me/evosdeliverybot.
            </a>
          </div>
        </div>

        <div class="div_kart">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11986.72155460763!2d69.27582195!3d41.31581609999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2a6565712d%3A0x790feb8933429946!2z0J3QsNGG0LjQvtC90LDQu9GM0L3QsNGPINCR0LjQsdC70LjQvtGC0LXQutCwINCj0LfQsdC10LrQuNGB0YLQsNC90LAg0LjQvC4g0JAuINCd0LDQstC-0Lg!5e0!3m2!1sru!2s!4v1685799335565!5m2!1sru!2s"
           
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
