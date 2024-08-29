import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../images/blackCowLogo.png";
import { Button } from "../elementFiles/Button";
import FarmerPage from "./FarmerPage";
import CustomerPage from "./CustomerPage";
import AdminPage from "./AdminPage";
import EmployeePage from "./EmployeePage";
import { Image } from "../elementFiles/Image";
import "../cssFiles/sideBar.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [userData, setUserData] = useState(null);

  const existingUsers = JSON.parse(localStorage.getItem("dairy-users"));
  const loggedInUser = JSON.parse(localStorage.getItem("loggedIn-dairy-user"));

  useEffect(() => {
    if (loggedInUser && existingUsers) {
      const userDetails = existingUsers.find(
        (user) => user.email === loggedInUser.email
      );
      if (userDetails) {
        setUserData(userDetails);
      }
    }
  }, []);

  useEffect(() => {
    if (userData) {
      const featureMap = {
        Farmer: "farmer",
        Customer: "customer",
        Admin: "Admin",
        Employee: "Employee",
      };
      const feature = featureMap[userData.userType] || null;
      if (feature !== selectedFeature) {
        setSelectedFeature(feature);
      }
    }
  }, [userData, selectedFeature]);

  const login = () => {
    navigate("/login");
  };

  const logout = () => {
    localStorage.removeItem("loggedIn-dairy-user");
    navigate("/");
  };

  const renderSelectedComponent = () => {
    switch (selectedFeature) {
      case "farmer":
        return <FarmerPage />;
      case "customer":
        return <CustomerPage />;
      case "Admin":
        return <AdminPage />;
      case "Employee":
        return <EmployeePage />;
      default:
        return null;
    }
  };

  return (
    <>
      <header className="header">
        <Image src={img} alt="alt" width="8%" />
        {userData && <h2>Welcome to Dairyluxe, {userData.name}!</h2>}
        <div className="header-button">
          {loggedInUser ? (
            <Button type="" value="Logout" onClick={logout} />
          ) : (
            <Button type="" value="LogIn" onClick={login} />
          )}
        </div>
      </header>
      <div className="Component-Container">
        {userData && (
          <aside className="sidebar">
            {selectedFeature === "farmer" ? (
              <>
                <Button
                  type=""
                  value="Buy Products"
                  onClick={() => selectedFeature !== "customer" && setSelectedFeature("customer")}
                />
                <Button
                  type=""
                  value="History"
                  onClick={() => selectedFeature !== "customer" && setSelectedFeature("customer")}
                />
              </>
            ) : (
              <>
                <Button
                  type=""
                  value="Go to Home"
                  onClick={() => selectedFeature !== "farmer" && setSelectedFeature("farmer")}
                />
                <Button
                  type=""
                  value="History"
                  onClick={() => selectedFeature !== "farmer" && setSelectedFeature("farmer")}
                />
              </>
            )}
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Number: {userData.number}</p>
            <p>Address: {userData.address}</p>
          </aside>
        )}
        <div className="main">{renderSelectedComponent()}</div>
      </div>
    </>
  );
};

export default HomePage;
