import "./Footer.css";
import RickandMortylogo from "../imgs/RickandMortylogo.jpg";

function Footer() {
  return (
    <footer className="Footer-Grid">
      <img className="Footer-Pic" src={RickandMortylogo} alt="Rick and Morty" />
    </footer>
  );
}

export default Footer;
