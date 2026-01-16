import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Movies from "./Components/Movies";
import Games from "./Components/Games";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Favorites from "./Components/Favorites";
import Chatbot from "./Components/Chatbot";
import DetailsPage from "./Components/DetailsPage";
import Cart from "./Components/Cart";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleMode = () => setDarkMode(!darkMode);
  const toggleFavorites = () => setShowFavorites(!showFavorites);

  const addFavorite = (item) => {
    if (!favorites.some(fav => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (item) => {
    setFavorites(favorites.filter((fav) => fav.id !== item.id));
  };

  const addToCart = (item) => {
    if (!cart.some(c => c.id === item.id)) {
      setCart([...cart, item]);
      alert(`${item.title} added to cart!`);
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((c) => c.id !== item.id));
  };

  return (
    <Router>
      <div className={darkMode ? "app dark-mode" : "app"} style={{ width: "100%" }}>
        <Header 
          cartCount={cart.length}
          toggleMode={toggleMode} 
          darkMode={darkMode} 
          toggleFavorites={toggleFavorites} 
          favoritesCount={favorites.length} 
        />
        <Favorites 
          showFavorites={showFavorites} 
          toggleFavorites={toggleFavorites} 
          favorites={favorites} 
          removeFavorite={removeFavorite} 
        />
        <Chatbot />

        <Routes>
          <Route path="/" element={
            <>
              <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <Movies searchQuery={searchQuery} favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite} />
              <Games searchQuery={searchQuery} favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite} />
              <About />
            </>
          } />
          <Route path="/details/:type/:id" element={<DetailsPage addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
