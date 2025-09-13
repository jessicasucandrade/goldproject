// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/AboutSection";
import Servicos from "./pages/ServicesSection";
// import Contato from "./pages/Contato";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        {/* <Route path="/contato" element={<Contato />} /> */}
      </Routes>
    </BrowserRouter>
  );
}