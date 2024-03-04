import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function () {
  return (
    <>
      <Navbar />
      <div className="bg-slate-100 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
