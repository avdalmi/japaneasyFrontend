import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RecipeState } from "../../types/Recipes";
import { TipsState } from "../../store/tips/slice";
import { OnChange } from "../../types/EventListener";

import "./SearchBar.css";

interface SearchBarProps {
  recipes: RecipeState[] | null;
  ingredients: TipsState[] | null;
}

const SearchBar: React.FC<SearchBarProps> = ({ recipes, ingredients }) => {
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [wordEntered, setWordEntered] = useState<string>("");

  const handleFilterRecipes = (e: OnChange) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    if (recipes !== null) {
      const newFilter = recipes.filter((recipe: RecipeState) => {
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
        return ingredient.name.toLowerCase().includes(searchWord.toLowerCase());
      });
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    }
  };

  return (
    <div>
      {recipes && (
        <div className="search">
          <div className="searchInputs" style={{ display: "flex " }}>
            <input
              type="text"
              placeholder="Search recipe"
              value={wordEntered}
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
              value={wordEntered}
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
