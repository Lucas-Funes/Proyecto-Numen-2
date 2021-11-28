import React from "react";
import "../Content/content.css";
import Vino from "../../Images/vinotinto.jpg";
import icono from "../../Images/icon.svg";

const Content = () => {

  const imageurl = icono

  const listItems = [
  {
    imagen: imageurl,
    nombre: "Vendimia: Cosechar la uva cuando este madura.",
  },
  {
    imagen: imageurl,
    nombre: "Despalillado: Separar las uvas del resto del racimo.",
  },
  {
    imagen: imageurl,
    nombre:
      "Estrujado: Una vez separadas las uvas, pasan por la estrujadora o maquina de pisado",
  },

  {
    imagen: imageurl,
    nombre:
      "Maceracion y Fermentacion Alcoholica: Se mantendrán a temperatura controlada macerando durante unos días. Luego,se denomina fermentación alcohólica ya que en ella, el azúcar de las uvas termina transformándose en alcoholtílico.",
  },

  {
    imagen: imageurl,
    nombre:
      "Prensado: el producto sólido de la fermentación aún contiene grandes cantidades de vino, por lo que es sometido a un prensado para extraer todo el líquido, obteniéndose el vino de prensa, rico en aromas y taninos, que no se mezcla con el obtenido en el descube",
  },

  {
    imagen: imageurl,
    nombre:
      "Fermentacion Molactica: El vino obtenido durante los pasos  anteriores es sometido a un nuevo proceso de fermentación.",
  },

  {
    imagen: imageurl,
    nombre:
      "Crianza: El vino obtenido durante los pasos anteriores es introducido en barricas de roble. Con ello, a lo largo del tiempo este va evolucionando y desarrollando sus características.",
  },
  {
    imagen: imageurl,
    nombre:
      "Trasiego: proceso mediante el cual el vino se cambia varias veces de recipiente, con el fin de ir eliminando los sedimentos sólidos y de airear el vino.",
  },

  {
    imagen: imageurl,
    nombre:
    "Clarificacion: se somete al vino a un proceso de clarificación, en el que se emplean sustancias orgánicas que arrastran las impurezas suspendidas en el vino hacia el fondo de la barril.",
  },

  {
    imagen: imageurl,
    nombre:
    "Embotellado: Una segunda parte del período de crianza del vino tendrá lugar una vez que este es embotellado.",
  },


];

  return (
    <>
      <h1><span className = "text-orange">Como prepar</span> Vino?</h1>
      <h3>Estos son los pasos para preparar un rico vino</h3>
      <div className="main-container">
        {listItems.map((item) => (
        <div className="items-container">
          <img src={item.imagen} alt={item.nombre} className="item-image"/>
          <p className="item-text">{item.nombre}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Content;
