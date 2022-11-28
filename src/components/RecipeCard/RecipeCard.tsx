import React from "react";
// import { Recipe } from "../../types/Recipes";
import { RecipeState } from "../../store/recipes/slice";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Loading from "../Loading/Loading";
import Rating from "../Rating/Rating";
import "./RecipeCard.css";

interface RecipeDisplayProps {
  recipe: RecipeState;
}

const RecipeCard = (props: RecipeDisplayProps) => {
  // console.log("props", props.recipe);

  return (
    <div>
      {!props ? (
        <Loading />
      ) : (
        <Container>
          <Card className="recipeCardContainer">
            <Card.Img
              variant="top"
              src={props.recipe.image}
              className="recipeCardImage"
            />
            <Card.Body className="recipeCardBody">
              <div className="recipeCardTitleRating">
                <Card.Title className="recipeCardTitle">
                  {props.recipe.name}
                </Card.Title>
                <Rating rating={props.recipe.rating} />
              </div>

              <Card.Subtitle className="recipeCardSubtitle">
                {" "}
                difficulty: {props.recipe.difficulty}
              </Card.Subtitle>
              <Card.Subtitle className="recipeCardSubtitle">
                time: {props.recipe.time}
              </Card.Subtitle>
              {/* <Card.Subtitle className="recipeCardSubtitle">
                <Rating rating={props.recipe.rating} />{" "}
              </Card.Subtitle> */}

              <Card.Text className="recipeCardText">
                {props.recipe.description.substring(0, 150)}...
              </Card.Text>

              <div className="recipeDetailsButton">
                <Link to={`/recipes/${props.recipe.id}`}>
                  <Button variant="secondary" className="recipeCardButton">
                    Go to recipe
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Container>
      )}
    </div>
  );
};

export default RecipeCard;
