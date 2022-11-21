import React, { useEffect, useMemo, useState } from "react";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectCategories, selectRecipe } from "../store/recipes/slice";
import { fetchAllRecipesThunk, getCategories } from "../store/recipes/thunks";
import Filter from "../components/Filter/Filter";

const RecipeExpPage = () => {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector(selectRecipe);
  //   console.log("recipes", recipes);
  const categories = useAppSelector(selectCategories);
  //   console.log("categories", categories);

  const [filter, setFilter] = useState(0);

  useEffect(() => {
    dispatch(fetchAllRecipesThunk());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <h1>Recipe page</h1>

      {!recipes ? (
        "Loading..."
      ) : (
        <div>
          <select
            value={filter}
            onChange={(e) => setFilter(parseInt(e.target.value))}
          >
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>

          {filter === 8 ? (
            <div>
              {recipes.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />;
              })}
            </div>
          ) : (
            <>
              {recipes
                .filter(
                  (recipe) =>
                    recipe.categoryId === 8 || recipe.categoryId === filter
                )
                .map((recipe) => {
                  return <RecipeCard key={recipe.id} recipe={recipe} />;
                })}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeExpPage;
