import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Catalogue from "./catalogues/Catalogue";
import FlexCatalog from "./catalogues/Flex";
import FlexLesson from "./lessons/flex/Flex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="catalog" element={<Catalogue />}></Route>
      <Route path="catalog/flex" element={<FlexCatalog />} />
      <Route path="/lesson/flex" element={<FlexLesson />} />
    </Routes>
  </BrowserRouter>
);
