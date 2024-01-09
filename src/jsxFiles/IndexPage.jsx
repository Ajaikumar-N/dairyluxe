import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../images/blackCowLogo.png";
import "../cssFiles/button.css";
import { Button } from "../elementFiles/Button";


const IndexPage = () => {
  const navigate = useNavigate();

  const signUp = () => {
    navigate("/signUp");
  };

  const Login = () => {
    navigate("/login");
  };

  return (
    <div>
      <header className="header">
        <img src={img} alt="logo" width="8%" />
        <h2>Welcome to Dairy Luxe</h2>
        <div className="header-button">
          <Button type="" value="Sign Up" onClick={signUp} />
          <Button type="" value="Login" onClick={Login} />
        </div>
      </header>
    </div>
  );
};

export default IndexPage;
