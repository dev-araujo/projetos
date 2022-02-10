import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Details } from "../pages/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
