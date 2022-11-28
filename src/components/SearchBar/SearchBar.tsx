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
          <div className="searchInputs" style={{ display: "flex " }}>
            <input
              type="text"
              placeholder="enter recipe"
              //   value={wordEntered}
              onChange={handleFilter}
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
    </div>
  );
}

export default SearchBar;
