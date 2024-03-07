import React from "react";
import { Lock } from "lucide-react";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" bg-white p-4 rounded shadow w-80">
        <form className="flex flex-col space-y-4">
          <div className="flex justify-center items-center">
            <Lock />
          </div>
          <h2 className="text-center uppercase font-semibold">
            formulaire de connexion
          </h2>

          <div>
            <label htmlFor="" className="block">
              Email
            </label>
            <input type="email" className="w-full p-2 border" />
          </div>
          <div>
            <label htmlFor="" className="block">
              Mot de passe
            </label>
            <input type="password" className="w-full p-2 border" />
          </div>
          <div className="flex justify-end">
            <button className="px-2 p-1 text-sm text-white bg-blue-800 hover:bg-blue-600 rounded-sm ">
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
