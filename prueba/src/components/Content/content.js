import React from "react";
import "../Content/content.js";
import Vino from "../../Images/vinotinto.jpg";
import "../Content/content.css";

const Content = () => {
  return (
    <>
      <div className="conteiner">
        <div ClassName="conteiner-data">
          <h1>Como preparar Vino?</h1>

          <h3>
            Nuestra mision es enseñarles como preparar un vino de forma correcta
            y delicioso. Para ello, debe seguir estos pasos:
          </h3>
          <ul>
            <li>Vendimia: Cosechar la uva cuando este madura</li>

            <li>Despalillad: Separar las uvas del resto del racimo</li>

            <li>
              Estrujado: Una vez separadas las uvas, pasan por la estrujadora o
              maquina de pisado
            </li>

            <li>
              Maceracion y Fermentacion Alcoholica: Se mantendrán a temperatura
              controlada macerando durante unos días. Luego, se denomina
              fermentación alcohólica ya que en ella, el azúcar de las uvas
              termina transformándose en alcohol etílico.
            </li>

            <li>
              Prensado: el producto sólido de la fermentación aún contiene
              grandes cantidades de vino, por lo que es sometido a un prensado
              para extraer todo el líquido, obteniéndose el vino de prensa, rico
              en aromas y taninos, que no se mezcla con el obtenido en el
              descube
            </li>

            <li>
              Fermentacion Molactica: El vino obtenido durante los pasos
              anteriores es sometido a un nuevo proceso de fermentación.
            </li>

            <li>
              Crianza: El vino obtenido durante los pasos anteriores es
              introducido en barricas de roble. Con ello, a lo largo del tiempo
              este va evolucionando y desarrollando sus características.
            </li>

            <li>
              Trasiego: proceso mediante el cual el vino se cambia varias veces
              de recipiente, con el fin de ir eliminando los sedimentos sólidos
              y de airear el vino.
            </li>

            <li>
              Clarificacion: se somete al vino a un proceso de clarificación, en
              el que se emplean sustancias orgánicas que arrastran las impurezas
              suspendidas en el vino hacia el fondo de la barrica
            </li>

            <li>
              Embotellado: Una segunda parte del período de crianza del vino
              tendrá lugar una vez que este es embotellado.
            </li>
          </ul>
          <button className="boton">Toca aqui para mas info!</button>
        </div>

        <div className="conteiner-img">
          <img src={Vino} />
        </div>
      </div>
    </>
  );
};

export default Content;
