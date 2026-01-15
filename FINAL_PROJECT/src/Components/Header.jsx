import React from "react";

function Header({ toggleMode, darkMode, toggleFavorites, favoritesCount }) {
  return (
    <header>
      <div className="logo">Movies Hub</div>
      <nav>
        <ul>
          <li><a href="#movies">Movies</a></li>
          <li><a href="#games">Games</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <div className="header-buttons">
        <button onClick={toggleFavorites} id="favorites-btn" title="View Favorites">
          ❤️ {favoritesCount}
        </button>
        <button onClick={toggleMode} id="toggle-mode">
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </header>
  );
}

export default Header;
