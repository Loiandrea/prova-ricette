import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import RecipeList from './components/RecipeList/RecipeList';
import Footer from './components/Footer/Footer';
import logo from './components/icons/logo.jpg';
import './styles/App.css';

const API_KEY = '12923b00bd9a4c43afdac075ba880862';

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&diet=vegetarian&number=12&addRecipeInformation=true&query=${query}`;
    try {
      const response = await axios.get(apiUrl);
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="app">
      <Router>
        <header className="app-header">
          <img src={logo} alt="Logo" className="logo" />
        </header>

        <h1>Cerca ispirazione nei sapori verdi delle nostre ricette vegetariane...</h1>
        <SearchBar onSubmit={fetchRecipes} />
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
