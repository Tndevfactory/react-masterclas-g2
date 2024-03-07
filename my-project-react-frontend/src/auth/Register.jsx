import React from "react";
import { Lock } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" bg-white p-4 rounded shadow w-80">
        <form className="flex flex-col space-y-4">
          <div className="flex justify-center items-center">
            <Lock />
          </div>
          <h2 className="text-center uppercase font-semibold">
            formulaire d'inscription
          </h2>
          <div>
            <label htmlFor="" className="block">
              Nom utilisateur
            </label>
            <input type="text" className="w-full p-2 border" />
          </div>
          <div>
            <label htmlFor="" className="block">
              Email
            </label>
            <input type="email" className="w-full p-2 border" />
          </div>
          <div>
            <label htmlFor="" className="block">
              Téléphone
            </label>
            <PhoneInput country={"tn"} inputStyle={{ width: "100%" }} />
          </div>
          <div>
            <label htmlFor="" className="block">
              Mot de passe
            </label>
            <input type="password" className="w-full p-2 border" />
          </div>
          <div className="flex justify-end">
            <button className="px-2 p-1 text-sm text-white bg-blue-800 hover:bg-blue-600 rounded-sm ">
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
