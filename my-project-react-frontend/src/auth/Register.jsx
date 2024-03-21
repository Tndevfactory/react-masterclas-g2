import React, { useState } from "react";
import { Lock } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
//import { register as registerUser } from "../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    data.phone = phone;
    // dispatch(registerUser(data))
    //  .then((res) => console.log(res))
    //   .catch((err) => console.log);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" bg-white p-4 rounded shadow w-96">
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit((data) => handleRegister(data))}
        >
          <div className="flex justify-center items-center">
            <Lock />
          </div>
          <h2 className="text-center uppercase font-semibold">
            formulaire d'inscription
          </h2>
          <div>
            <label htmlFor="username" className="block required">
              Nom
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              className="w-full p-2 border"
            />
            {errors.username && (
              <span className="text-xs text-red-600">Nom est obligatoire.</span>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block required">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full p-2 border"
            />
            {errors.username && (
              <span className="text-xs text-red-600">
                Email est obligatoire.
              </span>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block ">
              Téléphone
            </label>
            <PhoneInput
              name="phone"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              country={"tn"}
              inputStyle={{ width: "100%" }}
            />
          </div>
          <div>
            <label htmlFor="password" className="block required">
              Mot de passe
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="w-full p-2 "
            />
            {errors.password && (
              <span className="text-xs text-red-600">
                {" "}
                password is required.
              </span>
            )}
          </div>
          <div className="flex justify-between items-center gap-1">
            <span className="text-xs">
              Vous avez un compte,
              <a href="/login" className="text-blue-500">
                Se connecter
              </a>
            </span>
            <div>
              <button
                type="reset"
                className=" border-2 mr-2 border-gray-200 px-2 p-1 text-sm text-gray-500 bg-gray-100 hover:bg-gray-300 rounded-sm "
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-2 p-1 text-sm text-white bg-blue-800 hover:bg-blue-600 rounded-sm "
              >
                S'inscrire
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
