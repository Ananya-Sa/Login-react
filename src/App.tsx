import { useState } from "react";
import BgImage from "../public/background.jpg";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div
        className="h-full w-full object-fill"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <form className="flex h-full justify-center items-center bg-transparent">
          <div className="flex h-full justify-center items-center">
            <div className="border-s-8 border-e-8 shadow-xl border-slate-600 p-4 rounded-xl bg-white bg-opacity-10">
              <h1 className="flex h-10 justify-center items-center font-extrabold text-2xl text-white">
                Login
              </h1>
              <br />
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="password"
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-white"
                >
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 rounded-full text-sm px-5 py-2.5 text-center"
              >
                LogIn
              </button>
              <br />
              <br />
              <h3 className="text-white">No Account?</h3>
              <h3 className="font-semibold text-white">Sign up</h3>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
