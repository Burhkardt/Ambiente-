import "./SideBar.css";
import logo from "../../assets/Imagens/logo.png";
import perf from "../../assets/Imagens/Pessoinhasinha.png";
import lupa from "../../assets/Imagens/lupa.png";
import controle from "../../assets/Imagens/controle.png";
import config from "../../assets/Imagens/ingrenagi.png";
import char from "../../assets/Imagens/Pessoinha.png";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
export default function () {
  return (
    <div className="axis">
      <view className="SideBar">
        {" "}
        <a press href="/Home">
          <img src={logo} className="iconA"></img>
        </a>
        <a href="/Search">
          <img src={lupa} className="subIcons"></img>
        </a>
        <a>
          <img src={perf} className="subIcons"></img>
        </a>
        <a>
          <img src={controle} className="subIcons"></img>
        </a>
        <a>
          <img src={config} className="subIcons"></img>
        </a>
      </view>
      <img src={char} className="pessoinha" />
    </div>
  );
}
