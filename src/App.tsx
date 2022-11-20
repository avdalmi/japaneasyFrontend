import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from './hooks';
import { getUserWithStoredToken } from './store/user/thunks';
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp"
import {selectAppLoading} from "./store/appState/selectors"
import NavBar from "./components/NavBar/NavBar"
import Loading from "./components/Loading/Loading"
import RecipeExpPage from './pages/RecipeExpPage';
import { fetchAllRecipesThunk} from "./store/recipes/thunks"
import { selectRecipe } from './store/recipes/slice';



function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectAppLoading);

  const recipes = useAppSelector(selectRecipe)

  
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

 

  return (
    <div className="App">
      <NavBar />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/recipes" element={<RecipeExpPage />} />
    </Routes>
    </div>
  );
}

export default App;
