import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getRecipeById } from "../store/recipes/thunks";
import { useParams } from "react-router-dom";
import { CompleteRecipeState, selectFullRecipe } from "../store/recipes/slice";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";

type Ingredients = {
  id: number;
  ingredientDescriptionId: number;
  measurement: string;
  name: string;
  quantity: number;
  recipeId: number;
};

type Instructions = {
  id: number;
  description: string;
  recipeId: number;
  step: number;
};

interface FullRecipe {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  difficulty: string;
  portions: number;
  prefectureId: number;
  time: string;
  ingredients: Ingredients[];
  instructions: Instructions[];
}

const RecipeDetailsPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const fullRecipe = useAppSelector<unknown>(selectFullRecipe);
  console.log("fullRecipe", fullRecipe);

  const { id } = useParams<string>();
  const newId = Number(id);
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
          <RecipeDetails recipe={fullRecipe as CompleteRecipeState} />
        </div>
      )}
    </div>
  );
};

export default RecipeDetailsPage;
