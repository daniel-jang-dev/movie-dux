import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src="logo.png" alt="moviedux" />
      <h2 className="app-subtitle">
        It's time for popcorn! Finde your next movie
      </h2>
    </header>
  );
}
