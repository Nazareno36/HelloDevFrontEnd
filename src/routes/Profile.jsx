import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";

const Profile = () => {
  return (
    <>
      <Header />
      <div
        className="flex justify-center"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
        }}
      >
        <div className="flex flex-col place-items-center justify-center pb-10 pt-5">
          <div className="w-full rounded-lg shadow md:max-w-4xl bg-slate-900 border-gray-700 bg-opacity-70">
            <div className="col-span-2 grid grid-cols-4 gap-5 grid-rows-14 m-6">
              <h1 className="col-start-2 col-span-2 grid place-items-center mb-8 font-extrabold text-5xl text-white">
                Perfil
              </h1>
              <Input
                label="Nombres"
                type="text"
                id="name"
                placeholder="Nombre..."
                style=" col-start-1 col-span-2"
              />
              <Input
                label="Apellidos"
                type="text"
                id="lastname"
                placeholder="Apellidos..."
                style=" col-span-2"
              />
              <Input
                label="Telefono"
                type="number"
                id="phoneNumber"
                placeholder="+57 000 0000000"
                style=""
              />
              <div>
                <label
                  for=""
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Nacionalidad
                </label>
                <select
                  className="col-start-1 h-10 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <Input
                label="E-mail"
                type="email"
                id="email"
                placeholder="name@hellodev.com"
                style="col-span-2"
              />
              <div className="col-span-4">
                <label for="" className="block text-sm font-medium text-white">
                  Autobiografia
                </label>
                <textarea
                  className="sm:text-sm resize-none h-24 rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder=" Autobiografia"
                  required
                />
              </div>
              <div className="col-start-2 col-span-2 grid place-items-center">
                <Link to="/AuthorMenu">
                  <button
                    type="submit"
                    className=" ml-6 text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Guardar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
