import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { RecipeState } from "../../store/recipes/slice";
import { TipsState } from "../../store/tips/slice";
import { OnChange } from "../../types/EventListener";
import Loading from "../Loading/Loading";
import "./SearchBar.css";
import TipDetails from "../TipDetails/TipDetails";
interface SearchBarProps {
  recipes: RecipeState[] | null;
  ingredients: TipsState[] | null;
}

const SearchBar: React.FC<SearchBarProps> = ({ recipes, ingredients }) => {
  // console.log("data", data);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilterRecipes = (e: OnChange) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    if (recipes !== null) {
      const newFilter = recipes.filter((recipe: RecipeState) => {
        //   console.log("name", recipe);
        return recipe.name.toLowerCase().includes(searchWord.toLowerCase());
      });
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    }
  };
  const handleFilterIngredients = (e: OnChange) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    if (ingredients !== null) {
      const newFilter = ingredients.filter((ingredient: TipsState) => {
        //   console.log("name", recipe);
        return ingredient.name.toLowerCase().includes(searchWord.toLowerCase());
      });
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div>
      {recipes && (
        <div className="search">
          <div className="searchInputs" style={{ display: "flex " }}>
            <input
              type="text"
              placeholder="Search recipe"
              //   value={wordEntered}
              onChange={handleFilterRecipes}
            />
          </div>

          {filteredData.length !== 0 && (
            <div className="dataResult">
              {filteredData.map((recipe, key) => {
                return (
                  <Link
                    className="dataItem"
                    key={recipe.id}
                    to={`/recipes/${recipe.id}`}
                    target="_blank"
                  >
                    <p className="dataName">{recipe.name}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
      {ingredients && (
        <div className="search">
          <div className="searchInputs" style={{ display: "flex " }}>
            <input
              type="text"
              placeholder="Search ingredient"
              //   value={wordEntered}
              onChange={handleFilterIngredients}
            />
          </div>

          {filteredData.length !== 0 && (
            <div className="dataResult">
              {filteredData.map((ingredient, key) => {
                return (
                  <Link
                    className="dataItem"
                    key={ingredient.id}
                    to={`/tips/${ingredient.id}`}
                    target="_blank"
                  >
                    <p className="dataName">{ingredient.name}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
