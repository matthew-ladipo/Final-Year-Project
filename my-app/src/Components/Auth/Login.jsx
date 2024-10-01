import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [btn, setBtn] = useState("Login");

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    setBtn("Processing...");
    setMessage("login successful")
    axios
      .post("http://localhost:8000/login", { email, password })
      .then((res) => {
        if (res.data.Login) {
          navigate("/home/over");
        }
        console.log(res.data);
        // navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div  className="flex justify-center items-center ">
      <div className=" mx-10 px-10  mt-20 bg-white shadow-2xl rounded">
        <div className="max-w-md w-full  rounded-xl  overflow-hidden p-8 space-y-8 mr-24 pr-10">
          <h2 className="text-center text-4xl font-extrabold text-black">
            Welcome
          </h2>
          <p className="text-center text-gray-500">Sign in to your account</p>
          <form
            method="POST"
            action="#"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                placeholder="john@example.com"
                className="peer h-10 w-full border-b-2 border-gray-300  bg-transparent placeholder-transparent focus:outline-none focus:border-purple-600"
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                for="email"
              >
                Email address
              </label>
            </div>
            <div className="relative">
              <input
                placeholder="Password"
                className="peer h-10 w-full border-b-2 border-gray-300  bg-transparent placeholder-transparent focus:outline-none focus:border-purple-600"
                required=""
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                for="password"
              >
                Password
              </label>
            </div>

            <button
              className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
              type="submit"
            >
              {btn}
            </button>
          </form>
          {message && <p>{message}</p>}
          <div className="text-center text-gray-300">
            Don't have an account?
            <Link to={"/register"} className="text-purple-300 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
