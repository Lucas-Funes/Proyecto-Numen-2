import React from "react";
import '../Surprise/surprise.css'
import vinooferta from '../../Images/vinooferta.jpg'

const Surprise = () => {
    return (  
        <>
            <div className = "contenedor">

                <div className = "contenedor-imagenes">
                 <img src = {vinooferta}/>
                </div>

                <div className = "contendor-datos">
                    <div className = "titulo-datos">
                        <h1>Sorprende a alguien!</h1>
                    </div>

                    <div className = "subtitulo-datos">
                        <h2>De fiesta con amigos!</h2>
                    </div>
                    
                    <div className = "parrafouno-datos">
                        <p>
                            Nuestra caja de distintos vinos, es especial para una ocasion en espacial
                            o para una cena con amigos o familiares.
                        </p>
                    </div>
                    
                    <div className = "parrafodos-datos">
                        <p>
                            Es ideal a la hora de regalar en un evento o para esos momentos que son precisos
                            de un buen vino.
                         </p>
                    </div>
                    
                    <div className = "boton-contenedor">
                        <button className = "boton">Nuestra caja!</button>
                    </div>
                </div>

            </div>
        </>
    );
}
 
export default Surprise;