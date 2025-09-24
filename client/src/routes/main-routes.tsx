import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

function MainRoutes() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<Home />} />

      {/* Also keep /home if you like */}
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default MainRoutes;
