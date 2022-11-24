import React from "react";
// import { Recipe } from "../../types/Recipes";
import { RecipeState } from "../../store/recipes/slice";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Loading from "../Loading/Loading";

interface RecipeDisplayProps {
  recipe: RecipeState;
}

function RecipeCard(props: RecipeDisplayProps) {
  // console.log("props", props.recipe);

  return (
    <div>
      {!props ? (
        <Loading />
      ) : (
        <Container>
          <Card style={{ width: "18rem", border: "1px solid black" }}>
            <Card.Img
              variant="top"
              src={props.recipe.image}
              style={{ width: "10rem" }}
            />
            <Card.Body>
              <Card.Title>{props.recipe.name}</Card.Title>
              <Card.Subtitle>
                {" "}
                difficulty: {props.recipe.difficulty}
              </Card.Subtitle>
              <Card.Subtitle>time: {props.recipe.time}</Card.Subtitle>
              <Card.Subtitle>rating: {props.recipe.rating}</Card.Subtitle>
              <Card.Text>
                {props.recipe.description.substring(0, 150)}
              </Card.Text>

              <Link to={`/recipes/${props.recipe.id}`}>
                <Button variant="secondary">Go to recipe</Button>
              </Link>
            </Card.Body>
          </Card>
        </Container>
      )}
    </div>
  );
}

export default RecipeCard;
