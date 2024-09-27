import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Listing from "./page/listing/listing.jsx";
import TopBar from "./page/topbar/topbar.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./page/about/about.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/topbaronly" element={<TopBar />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
