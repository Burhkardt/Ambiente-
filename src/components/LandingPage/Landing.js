import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import MainSection from "./components/MainSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Future from "./components/FutureBanner";

export default function App() {
  return (
    <div className="app">
      <Header />
      <MainSection />
      <Features />
      <Future className="futuretest" />
      <Footer />
    </div>
  );
}
