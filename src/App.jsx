import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return <div className="bg-hero bg-cover bg-center min-h-screen text-white">
    <Navbar />
    <HomePage />
  </div>

};

export default App;
