// AppRoutes.tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../components/pages/Home";
import Courts from "../components/pages/Courts";


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Courts" element={<Courts />} />

      </Routes>
    </Router>
  );
}
