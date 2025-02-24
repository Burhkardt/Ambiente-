import "./SignUp.css";
import React from "react";
import Logo from "../../assets/Imagens/BlackLogo.png";
import GoogleIcon from "@mui/icons-material/Google";

export default function SignUp() {
  return (
    <div className="SignUpScreen">
      <div className="SideLeft">
        <div className="Title">
          <h1>Criar</h1>
          <h3>conta!</h3>
        </div>
        <div className="NameInput">
          <div>
          <h5>Login:</h5>
          <input />
          </div>
          <div>
          <h5>Login:</h5>
          <input />
          </div>
        </div>
        <div className="EmailInput">
          <h5>Senha:</h5>
          <input />
        </div>
        <div className="ForgPass">
          <a href="">Esqueci a senha</a>
        </div>
        <div className="Buttons">
          <div>
            <button>Entrar</button>
          </div>
          <button>
            <GoogleIcon fontSize="" />
            Entrar com Google
          </button>
        </div>
        <div className="CreateAccountA">
          <a href="/">
            <h5>Não tem uma conta?</h5> <h5>crie uma agora!</h5>
          </a>
        </div>
      </div>
      <div className="SideRight">
        <img src={Logo} />
      </div>
    </div>
  );
}
