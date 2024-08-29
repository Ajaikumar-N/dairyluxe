import React, { useState, useEffect } from "react";
import { Button } from "../elementFiles/Button";
import "../cssFiles/AdminPage.css";

const AdminPage = ({ onChange }) => {
  const [userData, setUserData] = useState([]);
  const [showUserData, setShowUserData] = useState(true);
  const [OrderData, setOrderData] = useState([]);
  const [showOrderData, setShowOrderData] = useState(true);
  const [FarmOrderData, setFarmOrderData] = useState([]);
  const [showFarmOrderData, setShowFarmOrderData] = useState(true);

  useEffect(() => {
    const storedUserData =
      JSON.parse(localStorage.getItem("dairy-users")) || [];
    setUserData(storedUserData);

    const storedOrderData =
      JSON.parse(localStorage.getItem("ordered-products")) || [];
    setOrderData(storedOrderData);

    const storedFarmOrderData =
      JSON.parse(localStorage.getItem("farm-orders")) || [];
    setFarmOrderData(storedFarmOrderData);
  }, []);

  const toggleUserDataVisibility = () => {
    setShowUserData(!showUserData);
  };

  const toggleOrderDataVisibility = () => {
    setShowOrderData(!showOrderData);
  };

  const toggleFarmOrderDataVisibility = () => {
    setShowFarmOrderData(!showFarmOrderData);
  };

  const handleAcceptOrder = (orderId) => {
    console.log(`Order ${orderId} accepted.`);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrderData = OrderData.filter(
      (order) => order.orderId !== orderId
    );
    setOrderData(updatedOrderData);
    localStorage.setItem("ordered-products", JSON.stringify(updatedOrderData));
    console.log(`Order ${orderId} deleted.`);
  };
  
  const handleDeleteFarmOrder = (orderId) => {
    const updatedOrderData = FarmOrderData.filter(
      (order) => order.orderId !== orderId
    );
    setFarmOrderData(updatedOrderData);
    localStorage.setItem("farm-orders", JSON.stringify(updatedOrderData));
    console.log(`Order ${orderId} deleted.`);
  };

  const handleEditUser = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
  };

  const handleDeleteUser = (userId) => {
    const updatedUserData = userData.map((user) => {
      if (user.userId === userId) {
        user.is_deleted = true;
      }
      return user;
    });
    setUserData(updatedUserData);
    localStorage.setItem("dairy-users", JSON.stringify(updatedUserData));
  };

  return (
    <div>
      <Button
        value={showUserData ? "Hide User Data" : "Show User Data"}
        onClick={toggleUserDataVisibility}
      />

      <Button
        value={showOrderData ? "Hide Order Data" : "Show Order Data"}
        onClick={toggleOrderDataVisibility}
      />

      <Button
        value={
          showFarmOrderData ? "Hide Farm Order Data" : "Show Farm Order Data"
        }
        onClick={toggleFarmOrderDataVisibility}
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
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => {
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

                  <td>
                    <Button
                      value="Edit"
                      onClick={() => handleEditUser(user.userId)}
                    />
                  </td>
                  <td>
                    <Button
                      value="Delete"
                      onClick={() => handleDeleteUser(user.userId)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {showOrderData && (
        <table className="user-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Id</th>
              <th>Name</th>
              <th>Product's Price</th>
              <th>Ordered Date</th>
              <th>Name</th>
              <th>Number</th>
              <th>Address</th>
              <th>Accept</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {OrderData.map((order) => {
              return (
                <tr
                  key={order.orderId}
                  className={`order-id-${order.productId}`}
                >
                  <td>{order.orderId}</td>
                  <td>{order.productId}</td>
                  <td>{order.Name}</td>
                  <td>{order.Price}</td>
                  <td>{order.orderedDate}</td>
                  <td>{order.UserName}</td>
                  <td>{order.UserNumber}</td>
                  <td>{order.userAddress}</td>
                  <td>
                    <Button
                      value="Accept"
                      onClick={() => handleAcceptOrder(order.orderId)}
                    />
                  </td>
                  <td>
                    <Button
                      value="Delete"
                      onClick={() => handleDeleteOrder(order.orderId)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {showFarmOrderData && (
        <table className="user-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Batch Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Ordered Date</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Accept</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {FarmOrderData.map((order) => {
              return (
                <tr
                  key={order.orderId}
                  className={`order-id-${order.productId}`}
                >
                  <td>{order.orderId}</td>
                  <td>{order.productId}</td>
                  <td>{order.productName}</td>
                  <td>{order.productPrice}</td>
                  <td>{order.orderedDate}</td>
                  <td>{order.userName}</td>
                  <td>{order.phone}</td>
                  <td>{order.address}</td>
                  <td>
                    <Button
                      value="Accept"
                      onClick={() => handleAcceptOrder(order.orderId)}
                    />
                  </td>
                  <td>
                    <Button
                      value="Delete"
                      onClick={() => handleDeleteFarmOrder(order.orderId)}
                    />
                  </td>
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
