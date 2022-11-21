import React, { useMemo, useState } from "react";
import {
  RecipeState,
  CategoryState,
  recipeSlice,
} from "../../store/recipes/slice";

interface FilterDisplayProps {
  recipes: RecipeState[];
  categories: CategoryState[];
}

function Filter(props: FilterDisplayProps) {
  //   console.log("props", props);
  //   const [filter, setFilter] = useState("");
  //   console.log(filter);

  //   const checkFilter = () => {};

  return (
    <div>
      {/* //   <select value={filter} onChange={(e) => setFilter(e.target.value)}>
    //     {props.categories.map((category) => {
    //       return (
    //         <option value={category.id} key={category.id}>
    //           {category.name}
    //         </option>
    //       );
    //     })}
    //   </select> */}
    </div>
  );
}

export default Filter;
