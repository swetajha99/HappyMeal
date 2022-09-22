import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleMeal from "./pages/SingleMeal";
import Error from "./pages/Error";

// import Components
import Navbar from "./components/Navbar";

function App(){
  return (
    <BrowserRouter>
    <Navbar />
    <Routes >
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/meal/:id" element={<SingleMeal />} />
      <Route path="*"element={<Error />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;