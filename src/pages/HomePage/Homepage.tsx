import CarouselComp from "../../components/Carousel/Carousel";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./HomePage.css";
import { OnClick } from "../../types/EventListener";
import JoyRide from "react-joyride";
import Button from "react-bootstrap/Button";

function Homepage() {
  const [run, setRun] = useState(false);
  const [continuous, setContinuous] = useState(false);
  const tourSteps = [
    {
      target: ".item1 h3",
      content:
        "Explore home cooked recipes and special recipes from each prefecture",
    },
    {
      target: ".item2 h3",
      content:
        "Get to know Japan's prefectures and their special recipes through exploring an interactive map",
    },
    {
      target: ".item3 h3",
      content:
        "Discover what Japanese ingredients are and what to replace them with if you dont have them at home or at the grocery store",
    },
    {
      target: ".item4 h3",
      content:
        "A complete guide on how to create your own bento boxes from scratch",
    },
    {
      target: ".item5 h3",
      content:
        "An interactive map that shows which Japanese restaurants to go to in Amsterdam according to Akiko",
    },
  ];

  const startTour = (e: OnClick) => {
    e.preventDefault();
    setRun(true);
    setContinuous(true);
  };

  return (
    <div>
      <JoyRide
        steps={tourSteps}
        continuous={continuous}
        run={run}
        showProgress
      />
      <div>
        <CarouselComp />
        <Button
          style={{ margin: "10px" }}
          variant="secondary"
          onClick={startTour}
        >
          Start Tour
        </Button>
        <div className="homePageNavContainer">
          <div className="homePageNavItemContainer item1">
            <Link to="/recipes">
              <h3>Recipe Explorer</h3>
            </Link>
          </div>

          <div className="homePageNavItemContainer item2">
            <Link to="/information">
              <h3>Prefecture Explorer</h3>
            </Link>
          </div>

          <div className="homePageNavItemContainer item3">
            <Link to="/tips">
              <h3 className="titlego">Tips & Tricks</h3>
            </Link>
          </div>

          <div className="homePageNavItemContainer item4">
            <Link to="/bento">
              <h3>Bento Boxes</h3>
            </Link>
          </div>
          <div className="homePageNavItemContainer item5">
            <Link to="/wheretoeat">
              <h3>Where to eat in Amsterdam</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
