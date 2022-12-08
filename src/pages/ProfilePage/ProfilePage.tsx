import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { selectFullProfile, selectToken } from "../../store/user/slice";
import { useNavigate } from "react-router-dom";
import { getUserWithStoredToken } from "../../store/user/thunks";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import "./ProfilePage.css";
import { RecipeState } from "../../types/Recipes";

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const fullProfile = useAppSelector(selectFullProfile);
  const token = useAppSelector(selectToken);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  const getUsersSavedRecipes = () => {
    if (!fullProfile) {
      return;
    }

    const returnProfilesRecipes = fullProfile.user?.recipes?.map(
      (recipe: RecipeState) => {
        if (recipe.SavedUsers?.isSaved === true) {
          return (
            <RecipeCard
              key={recipe.id}
              categoryId={recipe.categoryId}
              name={recipe.name}
              description={recipe.description}
              rating={recipe.rating}
              difficulty={recipe.difficulty}
              image={recipe.image}
              prefectureId={recipe.prefectureId}
              time={recipe.time}
              isSaved={recipe.SavedUsers.isSaved}
              id={recipe.id}
              portions={recipe.portions}
            />
          );
        }
      }
    );
    return returnProfilesRecipes;
  };

  const getUsersFavoriteRecipes = () => {
    if (!fullProfile) {
      return;
    }

    const returnProfilesRecipes = fullProfile.user?.recipes?.map(
      (recipe: RecipeState) => {
        // return console.log("return profile", recipe.SavedUsers);
        if (recipe.SavedUsers?.isFavorite === true) {
          return (
            <RecipeCard
              key={recipe.id}
              categoryId={recipe.categoryId}
              name={recipe.name}
              description={recipe.description}
              rating={recipe.rating}
              difficulty={recipe.difficulty}
              image={recipe.image}
              prefectureId={recipe.prefectureId}
              time={recipe.time}
              isFavorite={recipe.SavedUsers.isFavorite}
              id={recipe.id}
              portions={recipe.portions}
            />
          );
        }
      }
    );
    return returnProfilesRecipes;
  };

  return (
    <div>
      <h1>Hello!</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">My Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">My saved recipes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">My favorite recipes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Add new recipe</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first"></Tab.Pane>
              <Tab.Pane eventKey="second">
                <div>{getUsersSavedRecipes()}</div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div>{getUsersFavoriteRecipes()}</div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default ProfilePage;
