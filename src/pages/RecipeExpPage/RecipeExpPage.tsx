import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectCategories, selectRecipe } from "../../store/recipes/slice";
import {
  fetchAllRecipesThunk,
  getCategories,
} from "../../store/recipes/thunks";
import { SearchBar, Filter, Loading } from "../../components";
import * as loadingNoodles from "../../components/Loading/39520-japanese-noodles.json";

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
