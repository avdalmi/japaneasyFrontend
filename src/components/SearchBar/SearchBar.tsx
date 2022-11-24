import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { RecipeState } from "../../store/recipes/slice";
import { OnChange } from "../../types/EventListener";
import Loading from "../Loading/Loading";
import "./SearchBar.css";

//@ts-ignore
function SearchBar(data) {
  //   console.log("data", data.data);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e: OnChange) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.data.filter((recipe: RecipeState) => {
      //   console.log("name", recipe);
      return recipe.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  //   console.log("filtered Data", filteredData);
  return (
    <div>
      {!data ? (
        <Loading />
      ) : (
        <div className="search">
          <div className="searchInputs">
            <input
              type="text"
              placeholder="enter recipe"
              //   value={wordEntered}
              onChange={handleFilter}
            />

            <div className="searchIcon">
              {filteredData.length === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-6 h-6"
                  style={{ width: "20px", backgroundColor: "pink" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
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
    </div>
  );
}

export default SearchBar;
