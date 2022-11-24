import React from "react";
import CarouselComp from "../components/Carousel/Carousel";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <CarouselComp />

      <div>
        <div style={{ maxHeight: "20%" }}>
          <Link to="/recipes">
            <h3>Recipe Explorer</h3>
            <img
              style={{ maxWidth: "300px" }}
              src="https://gurunavi.com/en/japanfoodie/article/a_guide_to_washoku/img/13_washoku.jpg"
              alt="Traditional Japanese dishes"
            />
          </Link>
        </div>

        <div>
          <Link to="/information">
            <h3>Prefecture Information</h3>
            <img
              style={{ maxWidth: "300px" }}
              src="https://wallpapercave.com/wp/wp9483207.jpg"
              alt="Traditional Japanese Art"
            />
          </Link>
        </div>

        <div>
          <h3>What are bento boxes?</h3>
          <img />
        </div>

        <div>
          <h3>Tips and tricks</h3>
          <img />
        </div>

        <div>
          <h3>Ingredient Explorer</h3>
          <img />
        </div>

        <div>
          <h3>Where to eat in Amsterdam</h3>
          <img />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
