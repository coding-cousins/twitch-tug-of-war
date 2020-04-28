import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <img src={logo}></img>
      </Link>
    </header>
  );
};

export default Header;
