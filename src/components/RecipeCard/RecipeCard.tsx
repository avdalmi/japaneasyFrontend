import React from "react";
// import { Recipe } from "../../types/Recipes";
import { RecipeState } from "../../store/recipes/slice";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"

interface RecipeDisplayProps {
  recipe: RecipeState;
}

function RecipeCard(props: RecipeDisplayProps) {
  // console.log("props", props.recipe.id)

  return <div>
    {!props
      ? null
      :
      <Container>
        <Card style={{ width: "18rem", border:"1px solid black" }}>
          <Card.Img variant="top" src={props.recipe.image} style={{width:"10rem"}} />
          <Card.Body>
            <Card.Title>{props.recipe.name}</Card.Title>
            <Card.Text>{props.recipe.description.substring(0, 150)}</Card.Text>

            <Link to={`/recipes/${props.recipe.id}`}>
                <Button variant="secondary">Go to recipe</Button>
            </Link>
            
          </Card.Body>
          </Card>
        </Container>
    }
    
  </div>;
}

export default RecipeCard;
