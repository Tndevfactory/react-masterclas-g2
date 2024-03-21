import { useState } from "react";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const [counter, setCounter] = useState(0);
  const logout = (v) => {
    alert(v);
  };

  return (
    <div className="bg-white p-3 flex justify-end gap-2">
      {/* <div>
        <span className="text-lg">{counter}</span>
        <button
          className="text-lg ml-2"
          onClick={() => setCounter(counter + 10)}
        >
          +
        </button>
      </div> */}
      <div className="flex justify-between gap-2">
        <nav>Bonjour, Admin</nav>
        <span
          className="cursor-pointer"
          onClick={() => logout("deconnexion-33")}
        >
          <LogOut />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
