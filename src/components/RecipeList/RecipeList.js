import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
          {/* Renderizza i dettagli della ricetta */}
          <div>{recipe.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
