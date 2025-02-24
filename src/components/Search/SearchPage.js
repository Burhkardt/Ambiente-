import React, { useState } from "react";
import "./SearchPage.css";
import SideBar from "../SideBar/SideBar";
import lupa from "../../assets/Imagens/lupa.png";
import Carrossel1 from "../../assets/Imagens/Carrossel1.png";
import Carrossel2 from "../../assets/Imagens/Carrossel2.png";
import Carrossel3 from "../../assets/Imagens/Carrossel3.png";
import Carrossel4 from "../../assets/Imagens/Carrossel4.png";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    { title: "Reciclagem", src: Carrossel1 },
    { title: "Pegada Ecológica", src: Carrossel2 },
    { title: "Modernidade", src: Carrossel3 },
    { title: "Consumismo", src: Carrossel4 },
    { title: "Reciclagem", src: Carrossel1 },
    { title: "Pegada Ecológica", src: Carrossel2 },
    { title: "Modernidade", src: Carrossel3 },
    { title: "Consumismo", src: Carrossel4 },
    { title: "Reciclagem", src: Carrossel1 },
    { title: "Pegada Ecológica", src: Carrossel2 },
    { title: "Modernidade", src: Carrossel3 },
    { title: "Consumismo", src: Carrossel4 },
    { title: "Reciclagem", src: Carrossel1 },
    { title: "Pegada Ecológica", src: Carrossel2 },
    { title: "Modernidade", src: Carrossel3 },
    { title: "Consumismo", src: Carrossel4 },
    { title: "Reciclagem", src: Carrossel1 },
    { title: "Pegada Ecológica", src: Carrossel2 },
    { title: "Modernidade", src: Carrossel3 },
    { title: "Consumismo", src: Carrossel4 },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="background">
      <input
        className="Busca"
        placeholder="Buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img src={lupa} className="searchicon" alt="Search Icon" />

      <div className="contentBox">
        {filteredItems.map((item, index) => (
          <div className="imagibox" key={index}>
            <img src={item.src} className="imagi" alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
      <SideBar />
    </div>
  );
}
