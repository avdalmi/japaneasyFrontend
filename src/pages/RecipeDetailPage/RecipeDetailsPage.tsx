import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getRecipeById } from "../../store/recipes/thunks";
import { selectFullRecipe } from "../../store/recipes/slice";
import { CompleteRecipeState } from "../../types";
import { RecipeDetails, Loading } from "../../components";
import loadingNoodles from "../../components/Loading/39520-japanese-noodles.json";

const RecipeDetailsPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const fullRecipe = useAppSelector<CompleteRecipeState | null>(
    selectFullRecipe
  );

  const { id } = useParams<string>();
  const newId = Number(id);

  useEffect(() => {
    dispatch(getRecipeById(newId));
  }, [dispatch, newId]);

  const [showRecipeDetails, setShowRecipeDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRecipeDetails(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!showRecipeDetails ? (
        <Loading animationData={loadingNoodles} />
      ) : (
        <div>
          <RecipeDetails recipe={fullRecipe as CompleteRecipeState} />
        </div>
      )}
    </div>
  );
};

export default RecipeDetailsPage;
