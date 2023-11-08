
import React from 'react';

function RecipeDetailsPage({ recipe }) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <pre>{JSON.stringify(recipe, null, 2)}</pre>
    </div>
  );
}

export default RecipeDetailsPage;