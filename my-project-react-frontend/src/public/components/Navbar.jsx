import { Store } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { color } = props;
  console.log(color);
  return (
    <div className={`${color} flex justify-between items-center p-3 `}>
      <div className="flex items-center">
        <span className="mr-2">
          <Store color="#444" />
        </span>
        <span className="font-semibold text-2xl"> Store </span>
      </div>
      <div className="flex gap-2">
        <Link to="/"> Accueil</Link>
        <Link to="services">Services</Link>
        <Link to="produits">Produits</Link>
        <Link to="apropos">A propos</Link>
      </div>
    </div>
  );
}

export default Navbar;
