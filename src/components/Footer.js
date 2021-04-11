import "./Footer.css";
import RickandMortylogo from "../imgs/RickandMortylogo.jpg";

function Footer() {
  return (
    <div className="Footer-Grid">
      <img className="Footer-Pic" src={RickandMortylogo} alt="Rick and Morty" />
    </div>
  );
}

export default Footer;
