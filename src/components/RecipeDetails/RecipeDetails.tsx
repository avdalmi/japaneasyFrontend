import React, { useState } from "react";
import {
  CompleteRecipeState,
  IngredientState,
  InstructionsState,
} from "../../store/recipes/slice";
import Loading from "../Loading/Loading";
import "./RecipeDetails.css";
import Rating from "../Rating/Rating";

interface Props {
  recipe: CompleteRecipeState;
}

const RecipeDetails: React.FC<Props> = ({ recipe }) => {
  // const recipe = props.recipe;
  console.log("recipe props", recipe);

  const [style, setStyle] = useState(false);
  const {
    name,
    description,
    image,
    rating,
    difficulty,
    ingredients,
    instructions,
    portions,
    time,
  } = recipe;

  //toggle styles between complete and incomplete steps
  const handleCompleted = (id: number) => {
    setStyle((prevState) => ({
      //@ts-ignore
      ...style,
      //@ts-ignore
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      {!recipe ? (
        "Loading..."
      ) : (
        <div className="recipeDetailsContainer">
          <div className="recipeDetailsLeftContainer">
            <img className="recipeDetailsImage" src={image} alt={name} />

            <div className="recipeDetailsInfoContainer">
              <p className="recipeDetailsInfo">difficulty: {difficulty}</p>

              <Rating rating={rating} />
              <p className="recipeDetailsInfo">{time}</p>
              <p className="recipeDetailsInfo">portions: {portions}</p>
            </div>

            {!ingredients ? (
              "Loading..."
            ) : (
              <div className="recipeDetailsIngredientsContainer">
                <h4>Ingredients</h4>
                {ingredients.map((ingredient: IngredientState) => {
                  return (
                    <div
                      className="recipeDetailsIngredientsList"
                      key={ingredient.id}
                    >
                      <p>
                        <strong>{ingredient.name}:</strong>{" "}
                        {ingredient.quantity} {ingredient.measurement}
                      </p>

                      {/* {ingredient.name}: {ingredient.quantity}{" "}
                      {ingredient.measurement} */}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {!instructions ? (
            <Loading />
          ) : (
            <div className="recipeDetailsRightContainer">
              <h1 className="recipeDetailsTitle">{name}</h1>
              <p className="recipeDetailsDescription">{description}</p>
              <h4>Instructions</h4>
              {instructions.map((instruction: InstructionsState) => {
                return (
                  <div
                    className="instructionDetails"
                    key={instruction.id}
                    style={{
                      //@ts-ignore
                      color: style[`${instruction.id}`] ? "grey" : "initial",
                      //@ts-ignore
                      border: style[`${instruction.id}`]
                        ? "4px solid grey"
                        : "4px solid black",
                    }}
                    onClick={() => handleCompleted(instruction.id)}
                  >
                    {`${instruction.step}. ${instruction.description}`}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="checkIcon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
