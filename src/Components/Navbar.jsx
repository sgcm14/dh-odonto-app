import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { ContextGlobal } from "../Components/utils/global.context.jsx";

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);
  return (
    <nav>
      <div className="navContainer">
        <h3>DH Odonto</h3>
        <div className="linksNavbar">
          <Link to={routes.home}>
            <h4>Home</h4>
          </Link>
          <Link to={routes.contact}>
            <h4>Contact</h4>
          </Link>
          <Link to={routes.favs}>
            <h4>Favs</h4>
          </Link>
          <button onClick={toggleTheme}>
            {state.theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
