import React, { useContext } from "react";
import Login from "./Components/Auth/Login";
import Regiter from "./Components/Auth/Register";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Module/Home";
import Computer from "./departments/Computer";
import Mathematics from "./departments/Mathematics";
import Bio from "./departments/Bio"
import Chemistry from './departments/Chemistry'
import Dept from "./Components/Module/Dept";
import { Protected } from "./Protection/ProtectedPages";
import Add from "./client/Add";

import About from "././Components/Users/About";
import AuthContext from "./Protection/AuthContext";
import Overview from "./Components/Module/Overview";

function App() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuth(null);
    navigate("/");
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Regiter />} />
        <Route path="home" element={<Home logout={handleLogout} />}>
          <Route path="over" element={<Overview />} />
          <Route path="dept" element={<Dept />} />
          <Route path="computer" element={<Computer />} />
          <Route path="maths" element={<Mathematics />} />
          <Route path="bio" element={<Bio />} />
          <Route path="chem" element={<Chemistry />} />
          <Route path="about" element={<About />} />
          <Route path=":id" element={<Add />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
