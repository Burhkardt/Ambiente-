import React from "react";
import Banner from "../../../assets/Imagens/FutureBanner.png";
import "./Future.css";

export default function Future() {
  return (
    <section>
      <img src={Banner} className="imagem" />
      <div className="journey-section">
        <div className="journey-content">
          <div className="journey-title">
            <h2>Comece sua jornada!</h2>
          </div>
          <div className="bar"></div>{" "}
          {/* This is the bar separating the sections */}
          <div className="journey-btn">
            <button className="start-btn">Quero começar!</button>
          </div>
        </div>
      </div>
    </section>
  );
}
