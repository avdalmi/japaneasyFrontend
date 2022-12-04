import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { CategoryState, RecipeState } from "../../types/Recipes";
import "./Filter.css";
import "../RecipeCard/RecipeCard.css";
import {
  FilterState,
  DifficultyFilterState,
  DifficultyState,
} from "../../types/Filter";

interface FilterProps {
  recipes: RecipeState[];
  categories: CategoryState[];
  filterTitle: string;
}

const Filter = (props: FilterProps) => {
  const recipes = props.recipes;
  const categories = props.categories;

  const difficultyLevels = [
    { id: 9, level: "easy" },
    { id: 10, level: "medium" },
    { id: 11, level: "hard" },
  ];

  const [categoryFilterSettings, setCategoryFilterSettings] = useState<
    FilterState[]
  >([]);
  const [difficultyFilterSettings, setDifficultyFilterSetting] = useState<
    DifficultyFilterState[]
  >([]);

  useEffect(() => {
    getCategoryFilterState();
  }, [categories]);

  useEffect(() => {
    getDifficultyFilterState();
  }, []);

  const getCategoryFilterState = () => {
    const stateObject = categories.map((category) => {
      return { id: category.id, filtered: false };
    });
    setCategoryFilterSettings(stateObject);
  };

  const getDifficultyFilterState = () => {
    const stateObject = difficultyLevels.map((item) => {
      return { id: item.id, filtered: false, level: item.level };
    });
    setDifficultyFilterSetting(stateObject);
  };

  const handleCategoryFilter = (cat: CategoryState, event: boolean) => {
    const newSettings = categoryFilterSettings.map((item) => {
      if (item.id === cat.id) {
        return { ...item, filtered: event };
      }
      return item;
    });
    setCategoryFilterSettings(newSettings);
  };

  const handleDifficultyFilter = (dif: DifficultyState, event: boolean) => {
    const newSettings = difficultyFilterSettings.map((item) => {
      if (item.id === dif.id) {
        return { ...item, filtered: event };
      }
      return item;
    });
    setDifficultyFilterSetting(newSettings);
  };

  const renderCategoryFilter = () => {
    if (!categories) return;
    const categoryNames = categories.map((category) => {
      return (
        <div className="categoryItems" key={category.id}>
          <input
            className="filterCheckbox"
            key={category.id}
            type="checkbox"
            onChange={(e) => handleCategoryFilter(category, e.target.checked)}
            checked={handleCategoryCheck(category)}
          ></input>
          <p className="catItemTitle">{category.name}</p>
        </div>
      );
    });
    return categoryNames;
  };

  const renderDifficultyFilter = () => {
    if (!difficultyLevels) return;
    const difficultyNames = difficultyLevels.map((dif) => {
      return (
        <div className="categoryItems" key={dif.id}>
          <input
            className="filterCheckbox"
            key={dif.id}
            type="checkbox"
            onChange={(e) => handleDifficultyFilter(dif, e.target.checked)}
            checked={handleDifficultyCheck(dif)}
          ></input>
          <p className="catItemTitle">{dif.level}</p>
        </div>
      );
    });
    return difficultyNames;
  };

  const handleCategoryCheck = (category: CategoryState) => {
    let filterValue = false;
    if (categoryFilterSettings === undefined) {
      return filterValue;
    }
    categoryFilterSettings.map((filterState: FilterState) => {
      if (filterState.id === category.id) {
        filterValue = filterState.filtered;
      }
    });
    return filterValue;
  };

  const handleDifficultyCheck = (difficulty: DifficultyState) => {
    let filterValue = false;
    if (difficultyFilterSettings === undefined) {
      return filterValue;
    }
    difficultyFilterSettings.map((filterState: DifficultyFilterState) => {
      if (filterState.id === difficulty.id) {
        filterValue = filterState.filtered;
      }
    });
    return filterValue;
  };

  const renderSelectedCategoryFilter = categoryFilterSettings.some(
    (item) => item.filtered
  );
  const renderSelectedDifficultyFilter = difficultyFilterSettings.some(
    (item) => item.filtered
  );

  const renderRecipeCards = () => {
    const recipe = recipes.map((rec) => {
      if (!renderSelectedCategoryFilter || !renderSelectedDifficultyFilter) {
        return (
          <RecipeCard
            key={rec.id}
            categoryId={rec.categoryId}
            name={rec.name}
            description={rec.description}
            rating={rec.rating}
            difficulty={rec.difficulty}
            image={rec.image}
            prefectureId={rec.prefectureId}
            time={rec.time}
            portions={rec.portions}
            id={rec.id}
          />
        );
      }
      const filterState = categoryFilterSettings.find(({ id }) => {
        if (id === rec.categoryId) {
          return true;
        }
      });
      const difficultyState = difficultyFilterSettings.find(({ level }) => {
        if (level === rec.difficulty) {
          return true;
        }
      });
      if (
        !filterState ||
        !difficultyState ||
        filterState.filtered === false ||
        difficultyState.filtered === false
      ) {
        return;
      }
      return (
        <RecipeCard
          key={rec.id}
          categoryId={rec.categoryId}
          name={rec.name}
          description={rec.description}
          rating={rec.rating}
          difficulty={rec.difficulty}
          image={rec.image}
          prefectureId={rec.prefectureId}
          time={rec.time}
          portions={rec.portions}
          id={rec.id}
        />
      );
    });
    return recipe;
  };

  return (
    <div>
      <div>
        <div className="filterContainer">
          <div className="filterCategoryContainer">
            <p className="filterTitle">{props.filterTitle}</p>
            <div className="Filter">{renderCategoryFilter()}</div>
            <p className="filterTitle">Filter by difficulty</p>
            <div className="Filter">{renderDifficultyFilter()}</div>
          </div>

          <div className="filterRecipeContainer">
            <div className="filterRecipeItems">{renderRecipeCards()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
