import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getUserWithStoredToken } from "./store/user/thunks";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import { selectAppLoading } from "./store/appState/selectors";
import NavBar from "./components/NavBar/NavBar";
import Loading from "./components/Loading/Loading";
import RecipeExpPage from "./pages/RecipeExpPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import MapPage from "./pages/MapPage";
import TipsPage from "./pages/TipsPage";
import TipsDetailPage from "./pages/TipsDetailPage";

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recipes" element={<RecipeExpPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
        <Route path="/information" element={<MapPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/tips/:id" element={<TipsDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
