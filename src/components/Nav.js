import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <NavLink exact to="/">
        {" "}
        Home{" "}
      </NavLink>
      <NavLink to="/characters"> Characters </NavLink>
    </nav>
  );
}

export default Nav;
