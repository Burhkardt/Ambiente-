import React from "react";
import "./MainSection.css";
import logo from "../..//../assets/Imagens/BlackLogo.png";

export default function MainSection() {
  return (
    <section className="main-section">
      <div className="main-content">
        <div className="text-content">
          <h1>Aprenda a Fazer a Diferença com Pequenas Ações Diárias!</h1>
          <p>
            Descubra o impacto das suas escolhas no meio ambiente e transforme a
            maneira como você consome, recicla e interage com o mundo.
          </p>
        </div>
        <img src={logo} alt="Logo" className="main-logo" />
      </div>
    </section>
  );
}
