// AppRoutes.tsx
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  
  import Home from "../components/pages/Home";
  
  
  export default function AppRoutes() {
    return (
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/Home" element={<Home />} />
          
          
        </Routes>
      </Router>
    );
  }
  