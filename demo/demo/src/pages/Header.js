import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Welcome! </h1>
      <ul className="nav-bar">
        <li>Main</li>
        <li>
          <Link to="/signup">Sign-up</Link>
        </li>
        <li>
          <Link to="/login">Log-in</Link>
        </li>
      </ul>
    </header>
  );
}
