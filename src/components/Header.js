import "./Header.css";
import HeaderLogo from "../imgs/HeaderLogo.jpg";

function Header() {
  return (
    <div className="Header">
      <img className="HeaderLogo" src={HeaderLogo} alt="anotherLogo" />
    </div>
  );
}

export default Header;
