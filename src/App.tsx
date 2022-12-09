import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/HomePage/Homepage";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { getUserWithStoredToken } from "./store/user/thunks";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SignUp";
import NavBar from "./components/NavBar/NavBar";
import RecipeExpPage from "./pages/RecipeExpPage/RecipeExpPage";
import RecipeDetailsPage from "./pages/RecipeDetailPage/RecipeDetailsPage";
import MapPage from "./pages/MapPage/MapPage";
import TipsPage from "./pages/TipsPage/TipsPage";
import TipsDetailPage from "./pages/TipsDetailPage/TipsDetailPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import BentoPage from "./pages/bentoPage/BentoPage";
import WhereToEatPage from "./pages/WhereToEatPage.tsx/WhereToEatPage";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
