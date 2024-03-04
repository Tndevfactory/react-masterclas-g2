import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Produits from "./pages/Produits";
import Apropos from "./pages/Apropos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
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
