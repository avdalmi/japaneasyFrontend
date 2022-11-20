import React from "react";
// import { Recipe } from "../../types/Recipes";
import { RecipeState } from "../../store/recipes/slice";

interface RecipeDisplayProps {
  recipe: RecipeState;
}

function RecipeCard(props: RecipeDisplayProps) {
  // const { id, name, categoryId, description, rating, image, difficulty, portions} = recipe

  return <div>Recipe</div>;
}

export default RecipeCard;
