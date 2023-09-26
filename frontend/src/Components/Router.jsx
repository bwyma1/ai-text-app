import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Views/Homepage";
import ResponsiveNavbar from "./Navbar";
import AIChatBot from "../Views/AIChatBot";

export const Router = () => (
  <BrowserRouter>
    <ResponsiveNavbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="aichatbot" element={<AIChatBot />} />
    </Routes>
  </BrowserRouter>
);
