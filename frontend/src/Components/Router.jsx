import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Views/Homepage";
import ResponsiveNavbar from "./Navbar";
import AIChatBot from "../Views/AIChatBot";
import AboutUs from "../Views/AboutUs";
import HowToUse from "../Views/HowToUse";

export const Router = () => (
  <BrowserRouter>
    <ResponsiveNavbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="aichatbot" element={<AIChatBot />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="howtouse" element={<HowToUse />} />
    </Routes>
  </BrowserRouter>
);
