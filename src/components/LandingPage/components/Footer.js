import "./Footer.css";
import logo from "../../../assets/Imagens/logo.png"; // Ensure the correct path to your logo

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <ul>
            <li>Sobre</li>
            <li>Perguntas Frequentes</li>
            <li>Termos e Políticas</li>
          </ul>
        </div>
        <div className="footer-right">
          <p>Fique por dentro das novidades!</p>
          <div className="newsletter-container">
            <input type="email" placeholder="EMAIL" />
            <button>INSCREVER-SE</button>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="newsletter-checkbox" />
            <label htmlFor="newsletter-checkbox">
              Concordo com os Termos e Políticas, querendo receber novidades
              sobre o sistema.
            </label>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Todos os direitos reservados
      </div>
    </footer>
  );
}
