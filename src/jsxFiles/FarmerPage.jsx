import React, { Component } from "react";
import "../cssFiles/FarmerPage.css";
import img1 from "../images/cow1.jpg";
import img2 from "../images/cow2.jpg";
import img3 from "../images/chick.jpg";
import img4 from "../images/goat.jpg";
import img5 from "../images/duck.webp";
import img6 from "../images/fish.jpg";
import { Button } from "../elementFiles/Button";

const farmProducts = [
  { id: "CH-01", name: "Cow Husbandry(Kankrej)", price: " ₹50,000", imgSrc: img1 },
  { id: "CH-02", name: "Cow Husbandry(Gir)", price: " ₹50,000", imgSrc: img2 },
  { id: "CP01", name: "Chick Poultry", price: " ₹25,000", imgSrc: img3 },
  { id: "GH-01", name: "Goat Shed", price: " ₹25,000", imgSrc: img4 },
  { id: "DP-01", name: "Duck Poultry", price: " ₹20,000", imgSrc: img5 },
  { id: "FP-01", name: "Fish Pond", price: " ₹20,000", imgSrc: img6 },
];

class FarmerPage extends Component {
  handleOrder = (productId) => {
    // Extract user information from local storage
    const userData = JSON.parse(localStorage.getItem("loggedIn-dairy-user"));
    if (!userData) {
      alert("Please log in to place an order.");
      return;
    }

    // Create order object
    const order = {
      productId,
      productName: farmProducts.find(product => product.id === productId).name,
      userName: userData.name,
      phone: userData.number,
      // address: userData.address,
    };

    // Get existing orders from local storage or initialize an empty array
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Add the new order to the orders array
    orders.push(order);

    // Save the updated orders array back to local storage
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Order placed successfully!");
  };

  render() {
    const rows = [];
    const productsPerRow = 3;

    farmProducts.forEach((product, index) => {
      if (index % productsPerRow === 0) {
        rows.push([]);
      }
      rows[rows.length - 1].push(product);
    });

    return (
      <div className="farmer-page">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((product) => (
              <div key={product.id} className="card">
                <img src={product.imgSrc} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price / month: {product.price}</p>
                <Button
                  type="submit"
                  value="Apply Now"
                  onClick={() => this.handleOrder(product.id)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default FarmerPage;
