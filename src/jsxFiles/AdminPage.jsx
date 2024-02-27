import React, { useState, useEffect } from "react";
import { Button } from "../elementFiles/Button";
import "../cssFiles/AdminPage.css";

const AdminPage = ({ onChange }) => {
  const [userData, setUserData] = useState([]);
  const [showUserData, setShowUserData] = useState(true);
  const [OrderData, setOrderData] = useState([]);
  const [showOrderData, setShowOrderData] = useState(true);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("dairy-users")) || [];
    setUserData(storedData);

    // const storedData = JSON.parse(localStorage.getItem("dairy-users")) || [];
    // setUserData(storedData);
  }, []);

  const toggleUserDataVisibility = () => {
    setShowUserData(!showUserData);
  };

  const toggleOrderDataVisibility = () => {
    setShowUserData(!showUserData);
  };

  return (
    <div>
      <Button
        value={showUserData ? "Hide User Data" : "Show User Data"}
        onClick={toggleUserDataVisibility}
      />

      <Button
        value={showUserData ? "Hide Order Data" : "Show Order Data"}
        onClick={toggleOrderDataVisibility}
      />

      {showUserData && (
        <table className="user-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>User Type</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => {
              console.log(user.userType.toLowerCase());
              return (
                <tr
                  key={user.userId}
                  className={`user-type-${user.userType.toLowerCase()}`}
                >
                  <td>{user.userId}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td>{user.address}</td>
                  <td>{user.userType}</td>
                  <td>{user.createdDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPage;
