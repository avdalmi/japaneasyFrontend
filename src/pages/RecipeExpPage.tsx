import React, { useEffect, useMemo, useState } from "react";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectCategories, selectRecipe } from "../store/recipes/slice";
import { fetchAllRecipesThunk, getCategories } from "../store/recipes/thunks";

const RecipeExpPage = () => {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector(selectRecipe);
  //   console.log("recipes", recipes);
  const categories = useAppSelector(selectCategories);
  //   console.log("categories", categories);

  const [filter, setFilter] = useState(8);

  useEffect(() => {
    dispatch(fetchAllRecipesThunk());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      {!recipes || !categories ? (
        "Loading..."
      ) : (
        <div>
          <h1>Recipe page</h1>
          {/* @ts-ignore */}

          <SearchBar data={recipes} />

          <select
            value={filter}
            onChange={(e) => setFilter(parseInt(e.target.value))}
          >
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
                //   <div className="categoryItems" key={category.id}>
                //     <input
                //       className="catCheckBox"
                //       type="checkbox"
                //       value={category.id}
                //       onChange={(e) => setFilter(e.target.value)}
                //     />
                //     <h4>{category.name}</h4>
                //   </div>
              );
            })}
          </select>
          {filter !== 8 ? (
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
          ) : (
            <div>
              {recipes.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeExpPage;
