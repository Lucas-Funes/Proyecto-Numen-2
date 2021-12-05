import React from "react";
import "../Surprise/surprise.css";
import vinooferta from "../../Images/vinooferta.jpg";
import Button from "../Elements/Button/Button"
const Surprise = () => {
  return (
    <>
      <div className="contenedor">
        <div className="contenedor-imagenes">
          <img src={vinooferta} />
        </div>

        <div className="contenedor-datos">
          <h1 className="titulo-datos">Sorprende a alguien!</h1>
          <h2 className="subtitulo-datos">De fiesta con amigos!</h2>

          <p className="parrafouno-datos">
            Nuestra caja de distintos vinos, es especial para una ocasion en
            espacial o para una cena con amigos o familiares.
          </p>

          <p className="parrafodos-datos">
            Es ideal a la hora de regalar en un evento o para esos momentos que
            son precisos de un buen vino.
          </p>

          <Button texto="Nuestra Caja" mensaje="Caja"/>
        </div>
      </div>
    </>
  );
};

export default Surprise;
