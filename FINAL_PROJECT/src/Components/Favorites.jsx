import React from "react";

function Favorites({ showFavorites, toggleFavorites, favorites, removeFavorite }) {
  if (!showFavorites) return null;

  return (
    <div className="favorites-modal-overlay" onClick={toggleFavorites}>
      <div className="favorites-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>My Watchlist ❤️</h2>
          <button className="close-modal" onClick={toggleFavorites}>✖</button>
        </div>

        <div className="modal-body">
          {favorites.length > 0 ? (
            <div className="favorites-modal-list">
              {favorites.map((favorite) => (
                <div className="modal-favorite-item" key={favorite.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <img 
                    src={favorite.image} 
                    alt={favorite.title} 
                    style={{ width: "50px", height: "75px", objectFit: "cover", borderRadius: "6px", marginRight: "10px" }}
                  />
                  <span style={{ flex: 1 }}>{favorite.title}</span>
                  <button 
                    onClick={() => removeFavorite(favorite)} 
                    className="remove-btn"
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "#ff6666",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-favorites">No favorites yet! Add some movies or games 🎬🎮</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
