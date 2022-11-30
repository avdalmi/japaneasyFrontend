import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  ProfileState,
  selectFullProfile,
  selectToken,
  selectUser,
} from "../../store/user/slice";
import { useNavigate } from "react-router-dom";
import { getUserWithRecipe } from "../../store/user/thunks";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import { RecipeState } from "../../store/recipes/slice";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const fullProfile = useAppSelector(selectFullProfile);
  // console.log("full user", user);
  console.log("full profile", fullProfile);
  const token = useAppSelector(selectToken);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    dispatch(getUserWithRecipe());
  }, [dispatch]);

  const getUsersSavedRecipes = () => {
    if (!fullProfile) {
      return;
    }
    const returnProfile = fullProfile.map((profile: ProfileState) => {
      // console.log("return profile", profile);
      if (profile.isSaved === true) {
        return (
          <RecipeCard recipe={profile.recipe} removeFavoriteButton={true} />
        );
      }
    });
    return returnProfile;
  };

  const getUsersFavoriteRecipes = () => {
    if (!fullProfile) {
      return;
    }
    const returnProfile = fullProfile.map((profile: ProfileState) => {
      // console.log("return profile", profile);
      if (profile.isFavorite === true) {
        return <RecipeCard recipe={profile.recipe} removeSavedButton={true} />;
      }
    });
    return returnProfile;
  };
  return (
    <div>
      <h1>Hello {user?.firstName}!</h1>
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
