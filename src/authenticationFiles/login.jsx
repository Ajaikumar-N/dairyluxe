import React, { useState } from "react";
import "../cssFiles/login.css";
import img from "../images/loginImage.png";
import { Input } from "../elementFiles/Input";
import { useNavigate } from "react-router-dom";
import { Button } from "../elementFiles/Button";

const Login = ({ onChange }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("dairy-users")) || [];

    const user = existingUsers.find((user) => user.email === loginEmail);

    if (user && user.password === loginPassword) {
      const loggedInUserDetails = {
        userId: user.userId,
        name: user.name,
        number: user.number,
        email: user.email,
      };
      
      localStorage.setItem(
        "loggedIn-dairy-user",
        JSON.stringify(loggedInUserDetails)
      );
      console.log("Login successful!");
      navigate("/homepage");
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
      console.log("Login failed. Invalid credentials.");
    }
  };

  return (
    <div className="sign-up-container">
      <img className="sign-up-image" src={img} alt="login" />
      <form className="sign-up-form" onSubmit={login}>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <Input
          className="input-field"
          labelName="Email"
          inputType="email"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <Input
          className="input-field"
          labelName="Password"
          inputType="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <br />
        <Button type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
