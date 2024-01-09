import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../images/blackCowLogo.png";
import { Button } from "../elementFiles/Button";
import FarmerPage from "./FarmerPage";
import CustomerPage from "./CustomerPage";
import { Image } from "../elementFiles/Image";
import "../cssFiles/sideBar.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("loggedIn-dairy-user"));
    if (userDetails) {
      setUserData(userDetails);
    }
  }, []);

  const farmer = () => {
    setSelectedFeature("farmer");
  };

  const customer = () => {
    setSelectedFeature("customer");
  };

  const logout = () => {
    navigate("/");
  };

  const renderSelectedComponent = () => {
    switch (selectedFeature) {
      case "farmer":
        return <FarmerPage />;
      case "customer":
        return <CustomerPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <header className="header">
        <Image src={img} alt="alt" width="8%"></Image>
        {userData && <h2>Welcome to Dairyluxe, {userData.name}!</h2>}
        <div className="header-button">
          <Button type="" value="Logout" onClick={logout} />
        </div>
      </header>
      <div className="Component-Container">
        <aside className="sidebar">
          <h2>Go to</h2>
          <Button type="" value="farmer" onClick={farmer} />
          <Button type="" value="customer" onClick={customer} />

          {userData && (
            <div>
              <p>Email: {userData.email}</p>
              <p>Number: {userData.number}</p>
            </div>
          )}
        </aside>

        <div className="main">{renderSelectedComponent()}</div>
      </div>
    </>
  );
};

export default HomePage;