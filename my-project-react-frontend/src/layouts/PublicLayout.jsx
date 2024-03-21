import { Outlet } from "react-router-dom";
import Navbar from "../public/components/Navbar";
import Footer from "../public/components/Footer";

export default function () {
  return (
    <>
      <Navbar color="bg-gray-100" />
      <div className="bg-slate-100 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
