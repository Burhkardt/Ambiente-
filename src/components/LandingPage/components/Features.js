import React from "react";
import "./Features.css";
import banner from "../../../assets/Imagens/Banner.png";

function Features() {
  return (
    <section className="features">
      <div className="feature-section">
        {/* Feature bar */}
        <div className="features-bar">
          <span>Gamificação</span>
          <span>Personalidade</span>
          <span>Conteúdo</span>
        </div>
      </div>
      <div className="platform-info">
        <h2>Sobre a plataforma</h2>
        <p>
          Nossa plataforma ensina você a consumir e produzir de forma
          sustentável, aplicando o ODS 12 com práticas conscientes para reduzir
          desperdício e adotar a reciclagem.
        </p>
      </div>
      <div className="feature-boxes">
        <div className="feature">
          <h3 className="feature-title">Aulas e Níveis</h3>
          <p className="feature-description">
            Nosso site possui módulos com vídeos e quizzes práticos para
            aprender de forma dinâmica. Progrida de nível conforme completa as
            aulas, ganhando pontuações no sistema.
          </p>
        </div>
        <div className="feature">
          <h3 className="feature-title">Jogo Future+</h3>
          <p className="feature-description">
            No jogo, os irmãos Mily e Lucca enfrentam uma rebelião em um Recife
            distópico, usando um livro misterioso para restaurar a
            sustentabilidade e salvar o meio ambiente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
