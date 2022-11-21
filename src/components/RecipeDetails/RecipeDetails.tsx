import React from 'react'
import { CompleteRecipeState } from "../../store/recipes/slice";

interface RecipeDetailsDisplayProps {
  recipe: CompleteRecipeState;
  }

function RecipeDetails(props: RecipeDetailsDisplayProps) {
  const recipe = props.recipe
  // console.log("recipe props", props)

  const { name, description, image, rating, difficulty, ingredients, instructions, portions, time } = recipe
  
  return (
    <div>
      {!recipe
        ? "Loading..."
        : 
        <div>
          <h1>{name}</h1>
          <img src={image} alt={name} style={{ width: "30%"}} />
          <p>difficulty: {difficulty}</p>
          <p>rating: {rating}</p>
          <p>{time}</p>
          <p>portions: {portions}</p>

          {!instructions
            ? "Loading..."
        : <div style={{ border: "1px solid black" }}>
        <h4>Ingredients</h4>
        {ingredients.map(ingredient => {
          return (
            <div style={{ display: "flex" }} key={ingredient.id}>
              <p>{ingredient.name}: </p>
              <p>{ingredient.quantity}</p>
              <p>{ingredient.measurement}</p>
            </div>
          )
        })}
      </div>
          }
         

          <p>{description}</p>

          {!instructions
            ? "Loading..."
            : <div style={{ border: "1px solid black", margin: "20px" }}>
            <h4>Instructions</h4>
            {instructions.map(instruction => {
              return (
                <div style={{ display: "flex" }} key={instruction.id}>
                  <p>{instruction.step}.</p>
                  <p>{instruction.description}</p>
                </div>
              )
            })}
          </div>
        }
         
        </div>
    }
    </div>
  )
}

export default RecipeDetails