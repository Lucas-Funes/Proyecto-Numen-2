import React from "react";
import "../Content/content.css";
import Vino from "../../Images/vinotinto.jpg";
import Button from "../Elements/Button/Button"
import {listItems} from "./data"

const Content = () => {
  

  return (
    <div className="flex-row">
      <div>
        <h1>
          <span className="text-orange">Como prepar</span> Vino?
        </h1>
        <h3>Estos son los pasos para preparar un rico vino</h3>
        <div className="main-container">
          {listItems.map((item) => (
            <div className="items-container">
              <img src={item.imagen} alt={item.nombre} className="item-image" />
              <p className="item-text">{item.nombre}</p>
            </div>
          ))}
          <Button texto="Descubre mas sobre el Vino" mensaje="Vino"/>
        </div>
      </div>
      <div>
        <img src={Vino} alt="Vino" className="wine-image" />
      </div>
    </div>
  );
};

export default Content;
