import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import { useAppDispatch } from "./hooks";
import { getUserWithStoredToken } from "./store/user/thunks";
import {
  RecipeExpPage,
  RecipeDetailsPage,
  MapPage,
  TipsDetailPage,
  ProfilePage,
  BentoPage,
  WhereToEatPage,
  SignUpPage,
  LoginPage,
  TipsPage,
  Homepage,
} from "./pages";
import { NavBar } from "./components";

import "./App.css";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  function callApi() {
    fetch("https://japaneasy.herokuapp.com/", { method: "GET" })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));
  }
  return (
    <div className="App">
      <NavBar />
      {/* <div className="App">
        <header className="App-header">
          <button onClick={callApi}>Call API</button>
        </header>
      </div> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/recipes" element={<RecipeExpPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
        <Route path="/information" element={<MapPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/tips/:id" element={<TipsDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/bento" element={<BentoPage />} />
        <Route path="/wheretoeat" element={<WhereToEatPage />} />
      </Routes>
    </div>
  );
}

export default App;
