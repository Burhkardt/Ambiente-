import React from "react";
import "./Sign.css";
import Logo from "../../assets/Imagens/BlackLogo.png";
import CharA from "../../assets/Imagens/Pessoinha.png";
import CharB from "../../assets/Imagens/Menina.png";

function SignupPage() {
  return (
    <div className="SignupPage">
      {/* Left Section */}
      <div className="LeftSection">
        <img src={Logo} className="LogoPlaceholder" />
        <div className="Characters">
          <div className="CharacterPlaceholder">
            <img src={CharA} />
          </div>
          <div className="CharacterPlaceholder">
            <img src={CharB} />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="RightSection">
        <h1>CRIAR conta!</h1>
        <form className="SignupForm">
          {/* Name Inputs */}
          <div className="InputRow">
            <div className="InputGroup">
              <label htmlFor="firstName">Primeiro nome:</label>
              <input id="firstName" type="text" />
            </div>
            <div className="InputGroup">
              <label htmlFor="lastName">Sobrenome:</label>
              <input id="lastName" type="text" />
            </div>
          </div>

          {/* Other Inputs */}
          <div className="InputGroup">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" />
          </div>
          <div className="InputGroup">
            <label htmlFor="username">Criar username:</label>
            <input id="username" type="text" />
          </div>
          <div className="InputGroup">
            <label htmlFor="password">Criar senha:</label>
            <input id="password" type="password" />
          </div>

          {/* Buttons */}
          <button type="button" className="PrimaryButton">
            Entrar
          </button>
          <div className="Separator">ou</div>
          <button type="button" className="GoogleButton">
            <span className="GoogleIcon">G</span> Entrar com Google
          </button>
          <p className="LoginLink">
            Já tem uma conta? <a href="#">Faça login!</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
