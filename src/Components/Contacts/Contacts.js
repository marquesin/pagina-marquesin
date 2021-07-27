import React from "react";
import "./Contacts.css";
import foto from "./Images/Fotografia.jpeg";

export default function Contacts() {
  return (
    <div className="containerContacto" id="Contactame">
      <h3 className="contacto">Contactame</h3>
      <div className="contactoFoto">
        {" "}
        <img src={foto} alt="foto" className="fotografia" />
      </div>
      <a href="mailto:marquesinro@gmail.com" className="mailtoC">
        marquesinro@gmail.com
      </a>
      <a
        href="http://www.linkedin.com/in/rocio-marquesin-a97265217/"
        className="linkedingC"
      >
        www.linkedin.com/in/rocio-marquesin-a97265217
      </a>
    </div>
  );
}
