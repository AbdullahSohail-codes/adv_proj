import React from "react";
import { Link } from "react-router-dom";

function WatchlistPage({ favorites, removeFavorite }) {
  if (favorites.length === 0)
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Your watchlist is empty!</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h2>My Watchlist</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {favorites.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            {/* Click image to go to Details */}
            <Link to={`/details/${item.type || "movie"}/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", borderRadius: "8px", cursor: "pointer" }}
              />
            </Link>

            <h3>{item.title}</h3>

            <button
              onClick={() => removeFavorite(item)}
              style={{
                padding: "6px 12px",
                fontSize: "0.9rem",
                fontWeight: "bold",
                backgroundColor: "#ff6666",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchlistPage;
