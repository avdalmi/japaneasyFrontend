import React, { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { CategoryState, RecipeState } from "../../store/recipes/slice";
import "./Filter.css";
import Loading from "../Loading/Loading";
import * as loadingNoodles from "../Loading/39520-japanese-noodles.json";

interface FilterState {
  id: number;
  filtered: boolean;
}

interface FilterProps {
  recipes: RecipeState[];
  categories: CategoryState[];
  filterTitle: string;
}

// const difficultyLevels = [
//   { id: 1, level: "easy" },
//   { id: 2, level: "medium" },
//   { id: 3, level: "hard" },
// ];

const Filter = (props: FilterProps) => {
  const recipes = props.recipes;
  const categories = props.categories;

  const [filterSettings, setFilterSettings] = useState<FilterState[]>([]);

  useEffect(() => {
    getFilterState();
  }, [categories]);

  const getFilterState = () => {
    const stateObject = categories.map((i) => {
      return { id: i.id, filtered: true };
    });
    setFilterSettings(stateObject);
  };

  const handleFilter = (r: CategoryState, e: boolean) => {
    const newSettings = filterSettings.map((i) => {
      if (i.id === r.id) {
        return { ...i, filtered: e };
      }
      return i;
    });
    setFilterSettings(newSettings);
  };

  const renderCategoryFilter = () => {
    if (!categories) return;
    const categoryNames = categories.map((category) => {
      return (
        <div className="categoryItems" key={category.id}>
          <input
            className="catCheckbox"
            key={category.id}
            type="checkbox"
            onChange={(e) => handleFilter(category, e.target.checked)}
            checked={handleCheck(category)}
          ></input>
          <p className="catItemTitle">{category.name}</p>
        </div>
      );
    });
    return categoryNames;
  };

  const handleCheck = (category: CategoryState) => {
    let filterValue = false;
    if (filterSettings === undefined) {
      return filterValue;
    }
    filterSettings.map((filterState: FilterState) => {
      if (filterState.id === category.id) {
        filterValue = filterState.filtered;
      }
    });
    return filterValue;
  };

  const renderRecipeCards = () => {
    const recipe = recipes.map((rec) => {
      const filterState = filterSettings.find((filterState: FilterState) => {
        if (filterState.id === rec.categoryId) {
          return true;
        }
      });
      if (!filterState || filterState.filtered === false) {
        return <></>;
      }
      return <RecipeCard recipe={rec} />;
    });
    return recipe;
  };

  // const renderDifficultyFilter = () => {
  //   difficultyLevels.map((dif) => {
  //     return (
  //       <div
  //         className="difItems"
  //         key={dif.id}
  //         style={{
  //           display: "flex",
  //         }}
  //       >
  //         <input
  //           className="difCheckbox"
  //           key={dif.id}
  //           type="checkbox"
  //           onChange={(e) => handleFilter(dif, e.target.checked)}
  //           checked={handleCheck(dif)}
  //         ></input>
  //         <p className="catItemTitle">{dif.level}</p>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div>
      {/* {!props ? (
        <Loading animationData={loadingNoodles} />
      ) : ( */}
      <div>
        <div className="filterContainer">
          <div className="filterCategoryContainer">
            <p className="filterCategoryTitle">{props.filterTitle}</p>
            <div className="filter">{renderCategoryFilter()}</div>
          </div>

          <div className="filterRecipeContainer">
            <div className="filterRecipeItems">{renderRecipeCards()}</div>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Filter;
