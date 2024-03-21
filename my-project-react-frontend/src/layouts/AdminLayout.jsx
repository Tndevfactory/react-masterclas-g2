import { Outlet } from "react-router-dom";
import Navbar from "../admin/components/Navbar";
import Sidebar from "../admin/components/Sidebar";

export default function () {
  return (
    <div className="flex flex-row">
      <div id="left_part" className="bg-white basis-[18%] h-screen">
        <Sidebar />
      </div>
      <div id="right_part" className=" basis-[82%] h-screen">
        <Navbar />
        <div className="bg-gray-100 h-[93vh] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
