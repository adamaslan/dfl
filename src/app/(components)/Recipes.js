import React, { useEffect, useState, useCallback } from 'react';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const fetchRecipes = useCallback(async () => {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchInput
      );
      const data = await response.json();

      let meals = [];
      if (Array.isArray(data.meals)) {
        meals = data.meals.slice(0, 4);
      } else if (data.meals !== null) {
        meals = [data.meals];
      }

      setRecipes(meals);
    } catch (error) {
      console.error(error);
    }
  }, [searchInput]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchButtonClick = () => {
    fetchRecipes();
  };

  return (
    <div className="recipe-list">
      <div className="search-bar">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search recipes"
        />
        <button onClick={handleSearchButtonClick}>Search</button>
      </div>

      <div className="cards-container">
        {recipes.slice(0, 4).map((recipe) => (
          <div className="recipe-card" key={recipe.idMeal}>
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .recipe-list {
          max-width: 1200px;
          margin: 0 auto;
        }

        .search-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px 0;
        }

        .search-bar input {
          width: 300px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .search-bar button {
          margin-left: 10px;
          padding: 10px 20px;
          background-color: #eee;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .cards-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .recipe-card {
          width: 280px;
          margin: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        }

        .recipe-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 5px;
        }

        // Use media queries to change the layout and styling for smaller screens

        @media screen and (max-width: 900px) {
          .cards-container {
            justify-content: center;
          }
        }

        @media screen and (max-width: 600px) {
          .recipe-list {
            max-width: 100%;
          }

          .search-bar input {
            width: 200px;
          }

          .recipe-card {
            width: 90%;
          }
        }
      `}      </style>
          </div>
        );
      }
      
      export default RecipeList;