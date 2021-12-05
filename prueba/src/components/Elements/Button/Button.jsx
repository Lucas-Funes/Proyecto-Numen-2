import React from "react";
import "./styles.css";

const Button = ({ texto, mensaje="no estoy configurado" }) => {
  const handleclick = () => {
    return alert(mensaje);
  };
  return (
    <button className="boton-list" onClick={handleclick}>
      {texto}
    </button>
  );
};

export default Button;
