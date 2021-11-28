import React from "react";
import '../Surprise/surprise.css'
import vinooferta from '../../Images/vinooferta.jpg'

const Surprise = () => {
    return (  
        <>
            <div className = "conteiner">

                <div className = "data">
                    <img src = {vinooferta}/>
                    <h1>Sorprende a alguien!</h1>
                    <h2>De fiesta con amigos!</h2>
                    <br/>
                    <p>
                        Nuestra caja de distintos vinos, es especial para una ocasion en espacial
                        o para una cena con amigos o familiares.
                    </p>
                    <p>
                        Es ideal a la hora de regalar en un evento o para esos momentos que son precisos
                        de un buen vino.
                    </p>

                    <button>Toca aqui para adquirir nuestra caja</button>
                    
                </div>


            </div>
        </>
    );
}
 
export default Surprise;