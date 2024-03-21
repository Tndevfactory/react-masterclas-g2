import React from "react";
import { Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="p-2">
      <div
        className="uppercase text-red-700 text-center 
            text-lg font-semibold mb-12 flex gap-2 items-center"
      >
        <Settings /> <span>zone administration</span>
      </div>
      <div>
        <a href=""> Statistiques </a>
      </div>
    </div>
  );
};

export default Sidebar;
