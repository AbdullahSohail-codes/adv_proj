import React from "react";
import { useParams } from "react-router-dom";
import { moviesData, gamesData } from "../assets/data";

function DetailsPage({ addToCart }) {
  const { type, id } = useParams();
  const numericId = parseInt(id);

  // Choose the correct data source
  const dataSource = type === "movie" ? moviesData : type === "game" ? gamesData : [];
  const item = dataSource.find(d => d.id === numericId);

  if (!item) {
    return (
      <div style={{ textAlign: "center", marginTop: "80px", color: "#ff5555", fontSize: "1.3rem" }}>
        ❌ Item not found
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        flexDirection: window.innerWidth < 768 ? "column" : "row",
        alignItems: "center",
        gap: "40px",
      }}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: window.innerWidth < 768 ? "80%" : "400px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        }}
        onError={(e) =>
          (e.target.src = "https://via.placeholder.com/400x600?text=No+Image")
        }
      />

      {/* Details */}
      <div style={{ flex: 1, textAlign: "left" }}>
        <h1 style={{ marginBottom: "10px", fontSize: "2rem", color: "#66ccff" }}>
          {item.title}
        </h1>
        <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#aaa", marginBottom: "15px" }}>
          Genre: {item.genre}
        </p>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#ddd", marginBottom: "25px" }}>
          {item.story || "No story available for this item."}
        </p>

        <button
          onClick={() => addToCart(item)}
          style={{
            padding: "12px 25px",
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "#66ccff",
            color: "#1e1e2f",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#55bbff";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#66ccff";
            e.target.style.transform = "scale(1)";
          }}
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}
<button
  onClick={() => addFavorite(item)}
  style={{
    padding: "12px 25px",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#ffcc66",
    color: "#1e1e2f",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  Add to Watchlist 👁️
</button>

export default DetailsPage;
