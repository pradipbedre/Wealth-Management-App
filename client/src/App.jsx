import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage/Landingpage";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Dashboard from "./pages/User/Dashboard";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;
