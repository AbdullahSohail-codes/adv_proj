import React from "react";
import { moviesData } from "../assets/data.js";
import { useNavigate } from "react-router-dom";

function Movies({ searchQuery, favorites, addFavorite, removeFavorite }) {
  const navigate = useNavigate();

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  const isFavorite = (movie) =>
    favorites.some((fav) => fav.id === movie.id);

  return (
    <section id="movies">
      <h2>Top Movies</h2>

      <div className="grid-container">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div className="grid-item" key={movie.id}>
              
              {/* ✅ MOVIE IMAGE CLICKABLE */}
              <img
                src={movie.image}
                alt={movie.title}
                className="card-img"
                onClick={() => navigate(`/details/movie/${movie.id}`)}
                style={{ cursor: "pointer" }}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x450?text=No+Image";
                }}
              />

              <h3>{movie.title}</h3>
              <p className="genre">{movie.genre}</p>

              <button
                onClick={() =>
                  isFavorite(movie)
                    ? removeFavorite(movie)
                    : addFavorite(movie)
                }
                className={
                  isFavorite(movie)
                    ? "favorite-btn active"
                    : "favorite-btn"
                }
              >
                {isFavorite(movie)
                  ? "❤️ Favorited"
                  : "🤍 Add to Favorites"}
              </button>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </section>
  );
}

export default Movies;
