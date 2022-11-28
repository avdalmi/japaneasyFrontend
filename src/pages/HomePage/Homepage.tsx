import React, { useState } from "react";
import CarouselComp from "../../components/Carousel/Carousel";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Breadcrumb } from "react-bootstrap";
import "./HomePage.css";

function Homepage() {
  // const [term, setTerm] = useState("");

  // //@ts-ignore
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log("term", term);
  // };

  return (
    <div>
      <CarouselComp />
      <div className="homePageNavContainer">
        <div className="homePageNavItemContainer item1">
          <Link to="/recipes">
            <h3>Recipe Explorer</h3>
          </Link>
        </div>

        <div className="homePageNavItemContainer item2">
          <Link to="/information">
            <h3>Prefecture Information</h3>
          </Link>
        </div>

        <div className="homePageNavItemContainer item3">
          <Link to="/tips">
            <h3 className="titlego">Tips & Tricks</h3>
          </Link>
        </div>

        {/* <div>
          <h3>Ingredient Explorer</h3>
          <img />
        </div> */}

        {/* <div>
          <h3>Where to eat in Amsterdam</h3>
          <img />
        </div> */}
      </div>
      <Breadcrumb />{" "}
    </div>
  );
}

export default Homepage;
