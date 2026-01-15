import React from "react";
import { gamesData } from "../assets/data";
import { useNavigate } from "react-router-dom";

function Games({ searchQuery, favorites, addFavorite, removeFavorite }) {
  const navigate = useNavigate();

  const filteredGames = gamesData.filter((game) =>
    game.title.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  const isFavorite = (game) =>
    favorites.some((fav) => fav.id === game.id);

  return (
    <section id="games">
      <h2>Top Games</h2>

      <div className="grid-container">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <div className="grid-item" key={game.id}>

              {/* ✅ GAME IMAGE CLICKABLE */}
              <img
                src={game.image}
                alt={game.title}
                className="card-img"
                onClick={() => navigate(`/details/game/${game.id}`)}
                style={{ cursor: "pointer" }}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x300?text=No+Image";
                }}
              />

              <h3>{game.title}</h3>
              <p className="genre">{game.genre}</p>

              <button
                onClick={() =>
                  isFavorite(game)
                    ? removeFavorite(game)
                    : addFavorite(game)
                }
                className={
                  isFavorite(game)
                    ? "favorite-btn active"
                    : "favorite-btn"
                }
              >
                {isFavorite(game)
                  ? "❤️ Favorited"
                  : "🤍 Add to Favorites"}
              </button>
            </div>
          ))
        ) : (
          <p>No games found</p>
        )}
      </div>
    </section>
  );
}

export default Games;
