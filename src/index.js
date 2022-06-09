import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Catalogue from "./catalogues/Catalogue";
import Index from "./lessons/flex/Index";
import FlexCatalog from "./catalogues/Flex";
import Introduction from "./lessons/flex/Introduction";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="catalog" element={<Catalogue />}></Route>
      <Route path="catalog/flex" element={<FlexCatalog />} />
      <Route path="/lesson/flex">
        <Route path="/lesson/flex" element={<Index />} />
        <Route path="introduction" element={<Introduction />} />
      </Route>
      <Route path="/*" element={<>Error</>} />
    </Routes>
  </BrowserRouter>
);
