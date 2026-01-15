import React from "react";

function Hero({ searchQuery, setSearchQuery }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Favorite Movies & Games</h1>
        <p>Explore trending titles and get instant recommendations based on your mood.</p>
        <input
          type="text"
          id="search-input"
          placeholder="Search Movies & Games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{padding: '10px', borderRadius: '10px', border: '1px solid #ccc'}}
        />
      </div>
    </section>
  );
}

export default Hero;
