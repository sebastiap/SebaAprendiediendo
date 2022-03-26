import React from "react";
import { Link } from "react-router-dom"
function Header() {
  return (
    <header>
      <h1><Link to="/"> Spika Games</Link></h1>
      <Link to="/"> Home</Link>
      <Link to="/top"> Top Games</Link>
    </header>
  );
}
export default Header;
