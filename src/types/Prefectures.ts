import { RecipeState } from "./Recipes";

export type PrefectureImage = {
  image: string;
};

export type PrefectureState = {
  title: string;
  description: string;
  long: string;
  lat: string;
  image: PrefectureImage[];
  recipes: RecipeState;
  id: number;
};
