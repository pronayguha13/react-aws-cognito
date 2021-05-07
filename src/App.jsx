import React, { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import { LoginContext } from "./global/LoginContext";
const App = () => {
  const { logOutHandler } = useContext(LoginContext);
  return (
    <div>
      <Navbar logOutHandler={logOutHandler} />
      <div>Body of Home</div>
    </div>
  );
};

export default App;
