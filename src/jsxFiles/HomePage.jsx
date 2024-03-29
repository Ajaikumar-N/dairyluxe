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
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("loggedIn-dairy-user"));
    if (userDetails) {
      console.log("User Details:", userDetails);
      setUserData(userDetails);
    }
  }, []);

  useEffect(() => {
    if (userData && userData["userType"] === "Farmer") {
      setSelectedFeature("farmer");
    } else if (userData && userData["userType"] === "Customer") {
      setSelectedFeature("customer");
    } else if (userData && userData["userType"] === "Admin") {
      setSelectedFeature("Admin");
    } else if (userData && userData["userType"] === "Employee") {
      setSelectedFeature("Employee");
    }
  }, [userData]);

  const logout = () => {
    localStorage.removeItem("loggedIn-dairy-user");
    navigate("/");
  };

  const buyerPage = () => {
    setSelectedFeature("customer");
  };

  const farmerPage = () => {
    setSelectedFeature("farmer");
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
        <Image src={img} alt="alt" width="8%"></Image>
        {userData && <h2>Welcome to Dairyluxe, {userData.name}!</h2>}
        <div className="header-button">
          <Button type="" value="Logout" onClick={logout} />
        </div>
      </header>
      <div className="Component-Container">
        {userData && (
          <aside className="sidebar">
            <div>
              {userData.userType === "Farmer" && (
                <div>
                  {selectedFeature === "farmer" ? (
                    <Button type="" value="Buy Products" onClick={buyerPage} />
                  ) : (
                    <Button type="" value="Go to Home" onClick={farmerPage} />
                  )}
                </div>
              )}

              <p>Email: {userData.email}</p>
              <p>Number: {userData.number}</p>
            </div>
          </aside>
        )}

        <div className="main">{renderSelectedComponent()}</div>
      </div>
    </>
  );
};

export default HomePage;
