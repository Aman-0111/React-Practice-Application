import { useState } from "react";

const RecipeFinder = () => {

    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    const YOUR_APP_ID = 'cc196422'; // Replace with your actual app_id
    const YOUR_APP_KEY = '6fe098591d40bb4d62208cbab9223b44'; // Replace with your actual app_key

    const fetchRecipes = () => {
        const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    
        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setRecipes(data.hits);
          })
          .catch((error) => {
            console.error('Error fetching recipes:', error);
          });
    };

    return ( 
        <div className="recipe-finder">
            <h2>Recipe Finder</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a recipe"
            />
            <button onClick={fetchRecipes}>Search</button>
            <ul className="recipe-list">
                {recipes.map((recipeItem) => (
                    <li key={recipeItem.recipe.uri} className="recipe-item">
                    <h2>{recipeItem.recipe.label}</h2>
                    <img src={recipeItem.recipe.image} alt={recipeItem.recipe.label} />
                    <p>Ingredients: {recipeItem.recipe.ingredientLines.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default RecipeFinder;