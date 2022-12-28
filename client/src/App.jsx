import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage/Landingpage";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;
