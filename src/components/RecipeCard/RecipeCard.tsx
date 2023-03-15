import { Link } from "react-router-dom";

import Rating from "../Rating/Rating";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleSavedRecipeThunk } from "../../store/user/thunks";
import { selectFullProfile, selectToken } from "../../store/user/slice";

import "./RecipeCard.css";
import { GoButton } from "../../styles/Buttons";
import { Card, Container } from "react-bootstrap";

interface RecipeDisplayProps {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  time: string;
  difficulty: string;
  portions: number;
  prefectureId: number;
  isSaved?: boolean;
  isFavorite?: boolean;
}

const RecipeCard = (props: RecipeDisplayProps) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const fullProfile = useAppSelector(selectFullProfile);

  //@ts-ignore
  const names = fullProfile?.user.recipes
    .filter((recipe) => recipe.SavedUsers?.isSaved)
    .map((recipe) => {
      return recipe.name;
    });

  const checkIfUserLoggedIn = () => {
    if (!token) return;
    if (token && names?.includes(props.name)) {
      return (
        <GoButton
          onClick={() => {
            dispatch(toggleSavedRecipeThunk(true, props.id as number));
          }}
          className="recipeCardButton"
          width={400}
        >
          unsave
        </GoButton>
      );
    } else {
      return (
        <GoButton
          onClick={() => {
            dispatch(toggleSavedRecipeThunk(false, props.id as number));
          }}
          className="recipeCardButton"
          width={400}
        >
          save
        </GoButton>
      );
    }
  };

  return (
    <div>
      <Container>
        <Card className="recipeCardContainer">
          <Card.Img
            variant="top"
            src={props.image}
            className="recipeCardImage"
          />
          <Card.Body className="recipeCardBody">
            <div className="recipeCardTitleRating">
              <Card.Title className="recipeCardTitle">{props.name}</Card.Title>
              <Rating rating={props.rating} />
            </div>

            <Card.Subtitle className="recipeCardSubtitle">
              {" "}
              difficulty: {props.difficulty}
            </Card.Subtitle>
            <Card.Subtitle className="recipeCardSubtitle">
              time: {props.time}
            </Card.Subtitle>

            <Card.Text className="recipeCardText">
              {props.description.substring(0, 150)}...
            </Card.Text>

            <div className="recipeDetailsButton">
              <Link to={`/recipes/${props.id}`}>
                <GoButton className="recipeCardButton" width={300}>
                  Go to recipe
                </GoButton>
              </Link>

              <div>{checkIfUserLoggedIn()}</div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default RecipeCard;
