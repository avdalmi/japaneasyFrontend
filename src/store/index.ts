import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import appReducer from "./appState/slice";
import recipeReducer from "./recipes/slice";
import prefectureReducer from "./prefectures/slice";
import tipsReducer from "./tips/slice";
import savedReducer from "./saved/slice";

const store = configureStore({
  reducer: {
    appState: appReducer,
    user: userReducer,
    recipe: recipeReducer,
    prefecture: prefectureReducer,
    tips: tipsReducer,
    saved: savedReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
