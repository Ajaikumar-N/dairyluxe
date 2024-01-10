import React, { useState } from "react";
import "../cssFiles/login.css";
import img from "../images/signUp.png";
import { Input } from "../elementFiles/Input";
import { useNavigate } from "react-router-dom";
import { Button } from "../elementFiles/Button";

const SignUp = ({ onChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const newUser = {
      userId: Date.now(),
      name: name,
      email: email,
      number: number,
      password: password,
      userType: userType,
      is_deleted: 0,
      createdDate: new Date().toISOString().slice(0, 10),
    };

    if(newUser.number.length > 10){
        setErrorMessage("Enter valid number only 10 digits");
        return;
    }

    try {
      const existingUsers = JSON.parse(localStorage.getItem("dairy-users")) || [];
      const isDuplicate = existingUsers.some(
        (user) => user.email === newUser.email
      );

      if (isDuplicate) {
        setErrorMessage("This email address is already registered.");
        return;
      }

      existingUsers.push(newUser);
      localStorage.setItem("dairy-users", JSON.stringify(existingUsers));
      setRegistrationSuccess(true);
      setErrorMessage("");
      console.log("User Registered:", newUser);
      navigate("/login");
    } catch (error) {
      setErrorMessage("Registration failed. Please try again.");
      console.error("Error during registration:", error);
    }
  };

  const InputWithSelect = ({
    labelName,
    inputType,
    value,
    onChange,
    options,
  }) => (
    <div className="input-field">
      <label>{labelName}</label>
      <input type={inputType} value={value} onChange={onChange} required/>
      <select onChange={onChange}>
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  const handlePageChange = () => {
    navigate("/login");
  };

  return (
    <div className="sign-up-container">
      <img className="sign-up-image" src={img} alt="sign up" />
      <form className="sign-up-form" onSubmit={register}>
        {registrationSuccess && (
          <p className="success-message">Registration successful!</p>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Input
          className="input-field"
          labelName="Name"
          inputType="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className="input-field"
          labelName="Email"
          inputType="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="input-field"
          labelName="Phone Number"
          inputType="tel"
          onChange={(e) => setNumber(e.target.value)}
        />
        <Input
          className="input-field"
          labelName="Password"
          inputType="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputWithSelect
          className="input-field"
          labelName="Role"
          inputType="text"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          options={[
            { value: "Customer", label: "Customer" },
            { value: "Farmer", label: "Farmer" },
          ]}
        />
        <Button className="submit-button" type="submit" value="Register Now" />
        <Button type="submit" value="Login" onClick={handlePageChange} />
      </form>
    </div>
  );
};

export default SignUp;
