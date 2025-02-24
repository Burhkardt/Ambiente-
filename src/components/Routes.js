import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Search from "./Search/SearchPage.js";
import Land from "./LandingPage/Landing.js";
import Login from "./Login/Login.js";
import SignUp from "./SignUp/Sign.js";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Search" element={<Search />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Land />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
