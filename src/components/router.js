import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Gallery from "../routes/Gallery";
import Test from "../routes/Test";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
