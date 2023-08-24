import React, { useState } from 'react';
import 'animate.css/animate.min.css';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const [showRecipeText, setShowRecipeText] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clickedToShow, setClickedToShow] = useState(false);
  const API_KEY = '12923b00bd9a4c43afdac075ba880862';

  const toggleRecipeText = () => {
    setShowRecipeText((prevShowRecipeText) => !prevShowRecipeText);
    setClickedToShow(false);
  };

  const fetchRecipeDetails = async () => {
    setIsLoading(true); // Attiva il loader prima del fetch

    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}&includeNutrition=false`);
      const data = await response.json();
      setRecipeDetails(data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }

    setIsLoading(false); // Disattiva il loader dopo il fetch
  };

  const cleanRecipeText = (text) => {
    return text.replace(/<a\b[^>]*>.*?<\/a>/g, '').replace(/<\/?[^>]+(>|$)/g, '');
  };

  const handleRecipeClick = async (event) => {
    event.preventDefault();
    await fetchRecipeDetails();
    setClickedToShow(true);
    toggleRecipeText();
  };

  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <button className="recipe-button" onMouseDown={handleRecipeClick}>
        Ricetta
      </button>
      <div className={`loader ${isLoading ? 'active' : ''}`}>Caricamento...</div>
      {showRecipeText && recipeDetails && (
        <div className="recipe-modal-overlay" onClick={toggleRecipeText}>
          {/* Resto del contenuto del modal */}
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
