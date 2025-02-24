import "./Home.css";
import React, { useRef } from "react";
import SideBar from "../SideBar/SideBar";
import Banner from "../../assets/Imagens/Banner.png";

import Carrossel1 from "../../assets/Imagens/Carrossel1.png";
import Carrossel2 from "../../assets/Imagens/Carrossel2.png";
import Carrossel3 from "../../assets/Imagens/Carrossel3.png";
import Carrossel4 from "../../assets/Imagens/Carrossel4.png";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function Land() {
  const scrollableRef = useRef(null);

  const scrollLeft = () => {
    scrollableRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollableRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <div className="background">
      <view className="BannerContainer">
        <img src={Banner} className="BannerContainer" />
      </view>
      <h1 className="Textomeio">Aulas</h1>
      <div className="Carro" ref={scrollableRef}>
        <div className="imagibox">
          <img src={Carrossel1} className="imagi" />
          <h3>Reciclagem</h3>
          <PlayCircleFilledIcon sx={{ fontSize: 40 }} className="icon" />
        </div>
        <div className="imagibox">
          <img src={Carrossel2} className="imagi" />
          <h4>Pegada Ecológica</h4>
          <PlayCircleFilledIcon sx={{ fontSize: 40 }} className="icon" />
        </div>
        <div className="imagibox">
          <img src={Carrossel3} className="imagi" />
          <h3>Modernidade</h3>
          <PlayCircleFilledIcon sx={{ fontSize: 40 }} className="icon" />
        </div>
        <div className="imagibox">
          <img src={Carrossel4} className="imagi" />
          <h3>Consumismo</h3>
          <PlayCircleFilledIcon sx={{ fontSize: 40 }} className="icon" />
        </div>
        <div className="imagibox">
          <img src={Carrossel1} className="imagi" />
          <h3>Reciclagem</h3>
          <PlayCircleFilledIcon sx={{ fontSize: 40 }} className="icon" />
        </div>
        <div className="imagibox">
          <img src={Carrossel2} className="imagi" />
          <h4>Pegada Ecológica</h4>
          <PlayCircleFilledIcon sx={{ fontSize: 40 }} className="icon" />
        </div>
        <div className="imagibox">
          <img src={Carrossel3} className="imagi" />
          <h3>Modernidade</h3>
          <PlayCircleFilledIcon sx={{ fontSize: 40 }} className="icon" />
        </div>
        <div className="imagibox">
          <img src={Carrossel4} className="imagi" />

          <h3>Consumismo</h3>
          <PlayCircleFilledIcon sx={{ fontSize: 40 }} className="icon" />
        </div>
        <ArrowForwardIosIcon onClick={scrollRight} className="setadireita" />
        <ArrowBackIosNewIcon onClick={scrollLeft} className="setaesquerda" />
      </div>

      <SideBar className="bar" />
    </div>
  );
}
