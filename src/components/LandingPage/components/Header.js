import React from "react";
import "./Header.css"; // Assuming this is the CSS file where styles are managed

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <span className="ambiente">Ambiente+</span>
      </div>

      <nav className="nav-links">
        <a href="#">Inicio</a>
        <a href="#">Sobre</a>
        <a href="#">Sistema</a>
      </nav>

      <div className="auth-section">
        <a href="/login">Login</a>
        <a href="/SignUp">Cadastro</a>
      </div>
    </header>
  );
};

export default Header;
