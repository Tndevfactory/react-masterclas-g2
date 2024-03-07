import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// zone auth
import Login from "./auth/Login";
import Register from "./auth/Register";

// zone public
import PublicLayout from "./layouts/PublicLayout";
import Home from "./public/pages/Home";
import Services from "./public/pages/Services";
import Produits from "./public/pages/Produits";
import Apropos from "./public/pages/Apropos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="produits" element={<Produits />} />
          <Route path="apropos" element={<Apropos />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
