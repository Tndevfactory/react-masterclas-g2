import React from "react";
import { Linkedin, Facebook, Instagram } from "lucide-react";
const Footer = () => {
  return (
    <div className="bg-gray-700 text-white ">
      <div id="social_media" className="flex justify-center gap-4 p-6 pt-10">
        <a href="" className="bg-white p-2 rounded-full text-zinc-900">
          <Facebook />
        </a>
        <a href="" className="bg-white p-2 rounded-full text-zinc-900">
          <Instagram />
        </a>
        <a href="" className="bg-white p-2 rounded-full text-zinc-900">
          <Linkedin />
        </a>
      </div>

      <div id="information" className="grid grid-cols-4">
        <div className="p-3">
          <h3 className="text-2xl font-semibold mb-3">Store</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            repudiandae reprehenderit
          </p>
        </div>
        <div className="flex flex-col justify-center items-center  ">
          <h4 className="text-xl font-semibold mb-3">Services</h4>
          <ul>
            <li>service 1</li>
            <li>service 2</li>
            <li>service 3</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center  ">
          <h4 className="text-xl font-semibold mb-3">Produits</h4>
          <ul>
            <li>service 1</li>
            <li>service 2</li>
            <li>service 3</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center  ">
          <h4 className="text-xl font-semibold mb-3">Contact</h4>
          <ul>
            <li>service 1</li>
            <li>service 2</li>
            <li>service 3</li>
          </ul>
        </div>
      </div>

      <div id="copyright" className="text-center pt-10 p-2">
        &copy; copyright-2024 powered by
        <span className="text-orange-400 ml-1">Formation</span>
      </div>
    </div>
  );
};

export default Footer;
