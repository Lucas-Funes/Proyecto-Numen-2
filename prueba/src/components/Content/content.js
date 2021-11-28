import React from "react";
import "../Content/content.js";
import Vino from "../../Images/vinotinto.jpg";
import icono from "../../Images/icon.svg";
import "../Content/content.css";

const Content = () => {
  return (
    <>
      <div className="conteiner">
        <div ClassName="conteiner-data">
          <div className="data">
            <div className="title-data">
              <h1>Como preparar Vino?</h1>
            </div>

            <div className="subtitle-data">
              <h3>
                Nuestra mision es enseñarles como preparar un vino de forma
                correcta y delicioso. Para ello, debe seguir estos pasos:
              </h3>
            </div>

            <div className="conteiner-data-images">

              <div className="images-datawine-one">
                <div className = "partone-img">
                  <img src = {icono}/>
                </div>
                
                <div className = "partone-data">
                  <p>Vendimia: Cosechar la uva cuando este madura.</p>
                </div>
              </div>

              <div className="images-datawine-two">
                <div className="parttwo-img">
                  <img src={icono} />
                </div>
                <div className="partwo-data">
                  <p>Despalillado: Separar las uvas del resto del racimo.</p>
                </div>
              </div>

              <div className="images-datawine-three">
                <div className="parthree-img">
                  <img src={icono} />
                </div>
                <div className="parthree-data">
                  <p>
                    Estrujado: Una vez separadas las uvas, pasan por la
                    estrujadora o maquina de pisado
                  </p>
                </div>
              </div>

              <div className="images-datawine-four">
                <div className="partfour-img">
                  <img src={icono} />
                </div>
                <div className="partfour-data">
                  <p>
                    Maceracion y Fermentacion Alcoholica: Se mantendrán a
                    temperatura controlada macerando durante unos días. Luego,
                    se denomina fermentación alcohólica ya que en ella, el
                    azúcar de las uvas termina transformándose en alcohol
                    etílico.
                  </p>
                </div>
              </div>

              <div className="images-datawine-five">
                <div className="partfive-img">
                  <img src={icono} />
                </div>
                <div className="partfive-data">
                  <p>
                    Prensado: el producto sólido de la fermentación aún contiene
                    grandes cantidades de vino, por lo que es sometido a un
                    prensado para extraer todo el líquido, obteniéndose el vino
                    de prensa, rico en aromas y taninos, que no se mezcla con el
                    obtenido en el descube
                  </p>
                </div>
              </div>

              <div className="images-datawine-six">
                <div className="partsix-img">
                  <img src={icono} />
                </div>
                <div className="partsix-data">
                  <p>
                    Fermentacion Molactica: El vino obtenido durante los pasos
                    anteriores es sometido a un nuevo proceso de fermentación.
                  </p>
                </div>
              </div>

              <div className="images-datawine-seven">
                <div className="partseven-img">
                  <img src={icono} />
                </div>
                <div className="partseven-data">
                  <p>
                    Crianza: El vino obtenido durante los pasos anteriores es
                    introducido en barricas de roble. Con ello, a lo largo del
                    tiempo este va evolucionando y desarrollando sus
                    características.
                  </p>
                </div>
              </div>

              <div className="images-datawine-eight">
                <div className="parteight-img">
                  <img src={icono} />
                </div>
                <div className="parteight-data">
                  <p>
                    Trasiego: proceso mediante el cual el vino se cambia varias
                    veces de recipiente, con el fin de ir eliminando los
                    sedimentos sólidos y de airear el vino.
                  </p>
                </div>
              </div>

              <div className="images-datawine-nine">
                <div className="partenine-img">
                  <img src={icono} />
                </div>
                <div className="partnine-data">
                  <p>
                    Clarificacion: se somete al vino a un proceso de
                    clarificación, en el que se emplean sustancias orgánicas que
                    arrastran las impurezas suspendidas en el vino hacia el
                    fondo de la barril.
                  </p>
                </div>
              </div>

              <div className="images-datawine-ten">
                <div className="parten-img">
                  <img src={icono} />
                </div>
                <div className="parten-data">
                  <p>
                    Embotellado: Una segunda parte del período de crianza del
                    vino tendrá lugar una vez que este es embotellado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className = "button-conteiner">
            <button className="boton">Toca aqui para mas info!</button>
          </div>
          
        </div>

        <div className="conteiner-img">
          <img src={Vino} />
        </div>
      </div>
    </>
  );
};

export default Content;
