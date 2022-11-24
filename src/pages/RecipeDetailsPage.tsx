import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getRecipeById } from "../store/recipes/thunks";
import { useParams } from "react-router-dom";
import { selectFullRecipe } from "../store/recipes/slice";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";

function RecipeDetailsPage() {
  const dispatch = useAppDispatch();

  const fullRecipe = useAppSelector(selectFullRecipe);
  //   console.log("fullRecipe", fullRecipe);

  const { id } = useParams() as any;
  const newId = parseInt(id);
  // console.log("id", id)

  useEffect(() => {
    dispatch(getRecipeById(newId));
  }, [dispatch, newId]);

  return (
    <div>
      {!fullRecipe ? (
        "Loading..."
      ) : (
        <div>
          {/* @ts-ignore */}
          <RecipeDetails recipe={fullRecipe} />
        </div>
      )}
    </div>
  );
}

export default RecipeDetailsPage;
