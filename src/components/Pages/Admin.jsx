import React, { useContext, useState } from "react";
import { Context } from "../../../Contex";
import "../Admin/Admin.scss";

const Admin = () => {
  const {
    data,
    PatchElements,
    AdminDelete,
    createContext,
    CreateDevice,
    title,
    setData,
    image,
    SetImage,
    price,
    SetTitle,
    desc,
    SetDesc,
    SetPrice,
    category,
    SetCategory,
  } = useContext(Context);
  return (
    <div className="container">
      <div className="ooooo">
        <h1 className="ooooo__h1">ADMIN PANEL</h1>

        <div className="registr">
          <input
            value={title}
            onChange={(e) => SetTitle(e.target.value)}
            placeholder="Title"
            type="text"
            className="registr__input"
          />
          <input
            value={image}
            onChange={(e) => SetImage(e.target.value)}
            placeholder="Image"
            type="text"
            className="registr__input"
          />
          <input
            value={desc}
            onChange={(e) => SetDesc(e.target.value)}
            placeholder="Description"
            type="text"
            className="registr__input"
          />
          <input
            value={price}
            onChange={(e) => SetPrice(e.target.value)}
            placeholder="Price"
            type="number"
            className="registr__input"
          />
          <input
            value={category}
            onChange={(e) => SetCategory(e.target.value)}
            placeholder="Category"
            type="text"
            className="registr__input"
          />
          <button className="register__btn" onClick={CreateDevice}>
            Create
          </button>
        </div>
      </div>
      <div className="maped">
        {data.map((el) => {
          return (
            <div className="salom">
              <div className="cardPlants" key={el._id}>
                <img className="cardPlants__img" src={el.image} alt="" />
                <div className="ggg">
                  <h1 className="cardPlants__h1">{el.title}</h1>
                  <p className="cardPlants__p">{el.desc}</p>
                  <div className="prices">
                    <p className="prices__1">{el.price} $</p>
                  </div>
                  <div className="ggg__btns">
                    <button
                      onClick={() => PatchElements(el._id)}
                      className="price__btn1"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => AdminDelete(el._id)}
                      className="price__btn1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;