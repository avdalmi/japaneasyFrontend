import React, { useEffect } from "react";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectRecipe } from "../store/recipes/slice";
import { fetchAllRecipesThunk } from "../store/recipes/thunks";
// import{ RecipeState} from "../store/recipes/slice"

const RecipeExpPage = () => {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector(selectRecipe);
  console.log("recipes", recipes);

  useEffect(() => {
    dispatch(fetchAllRecipesThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Recipe page</h1>
      {recipes.map((recipe) => {
        return <RecipeCard recipe={recipe} />;
      })}
    </div>
  );
};

export default RecipeExpPage;
