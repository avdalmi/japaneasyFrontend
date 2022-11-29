import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectCategories, selectRecipe } from "../store/recipes/slice";
import { fetchAllRecipesThunk, getCategories } from "../store/recipes/thunks";
import Filter from "../components/Filter/Filter";
import Loading from "../components/Loading/Loading";
import * as loadingNoodles from "../components/Loading/39520-japanese-noodles.json";
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
      {!recipes ? (
        <Loading animationData={loadingNoodles} />
      ) : (
        <div>
          <SearchBar recipes={recipes} ingredients={null} />
          <Filter
            recipes={recipes}
            categories={categories}
            filterTitle="Filter by Category"
          />
        </div>
      )}
    </div>
  );
};

export default RecipeExpPage;
