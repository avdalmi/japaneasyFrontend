import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectCategories, selectRecipe } from "../store/recipes/slice";
import { fetchAllRecipesThunk, getCategories } from "../store/recipes/thunks";
import Filter from "../components/Filter/Filter";

const RecipeExpPage = () => {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector(selectRecipe);
  const categories = useAppSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchAllRecipesThunk());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <SearchBar data={recipes} />
      <Filter
        recipes={recipes}
        categories={categories}
        filterTitle="Filter by Category"
      />
    </div>
  );
};

export default RecipeExpPage;
