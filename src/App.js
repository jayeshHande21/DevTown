import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductPage/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
}
