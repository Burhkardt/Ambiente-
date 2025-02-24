import "./Login.css";
import React from "react";
import Logo from "../../assets/Imagens/logo.png";
import GoogleIcon from "@mui/icons-material/Google";

export default function Login() {
  return (
    <div className="LoginScreen">
      <div className="LeftSide">
        <div className="Title">
          <h1>Bem vindo</h1>
          <h2>De volta!</h2>
        </div>
        <div className="LoginInput">
          <h5>Login:</h5>

          <input />
        </div>
        <div className="PasswordInput">
          <h5>Senha:</h5>
          <input />
        </div>
        <div className="ForgPass">
          <a href="">Esqueci a senha</a>
        </div>
        <div className="Buttons">
          <div>
            <a href="/Home">
              <button>Entrar</button>
            </a>
          </div>
          <button>
            <GoogleIcon fontSize="" />
            Entrar com Google
          </button>
        </div>
        <div className="CreateAccountA">
          <a href="/SignUp">
            <h5>Não tem uma conta?</h5> <h5>crie uma agora!</h5>
          </a>
        </div>
      </div>
      <div className="RightSide">
        <img src={Logo} />
      </div>
    </div>
  );
}
