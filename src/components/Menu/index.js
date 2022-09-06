import "./menu.css";
import { BsYoutube, BsInstagram } from "react-icons/bs";

export default function Menu() {
  return (
    <div className="menu">
      <a href="https://youtube.com" className="social">
        <BsYoutube color="#FFF" size={24} />
      </a>
      <a href="https://www.instagram.com/cicerogabriel.js/" className="social">
        <BsInstagram color="#FFF" size={24} />
      </a>
    </div>
  );
}
