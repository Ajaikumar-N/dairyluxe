import React, { Component } from "react";
import "../cssFiles/FarmerPage.css";
import img1 from "../images/milk.webp";
import img2 from "../images/curd.jpg";
import img3 from "../images/butter.jpg";
import img4 from "../images/butterMilk.jpg";
import img5 from "../images/Badam-Milk.jpg";
import img6 from "../images/ghee.webp";
import { Button } from "../elementFiles/Button";

const farmProducts = [
  { id: 1, name: "Milk - Daily uses", price: " ₹ 80 / L ", imgSrc: img1 },
  {
    id: 2,
    name: "Curd",
    price: " ₹ 70 / L",
    imgSrc: img2,
  },
  {
    id: 3,
    name: "Butter",
    price: " ₹ 350 / kg",
    imgSrc: img3,
  },
  { id: 4, name: "Butter Milk", price: " ₹ 50 / L", imgSrc: img4 },
  {
    id: 5,
    name: "Badam Milk",
    price: " ₹ 140 / L",
    imgSrc: img5,
  },
  { id: 6, name: "Ghee", price: " ₹ 500 / L", imgSrc: img6 },
];

const Order = (product, user) => {
  const order = {
    orderId: Date.now(),
    productId: product.id,
    Name: product.name,
    Price: product.price,
    UserName: user.name,
    UserNumber: user.number,
    userAddress: user.address,
    is_deleted: 0,
    orderedDate: new Date().toISOString().slice(0, 10),
  };

  const existingOrders =
    JSON.parse(localStorage.getItem("ordered-products")) || [];

  existingOrders.push(order);
  localStorage.setItem("ordered-products", JSON.stringify(existingOrders));
  alert("Order placed successfully!");
};

class CustomerPage extends Component {
  handleOrderClick = (product) => {
    const logedInUser = JSON.parse(localStorage.getItem("loggedIn-dairy-user"));
    if (!logedInUser) {
      alert("Please log in to place an order.");
      return;
    }

    // eslint-disable-next-line no-restricted-globals
    const confirmation = confirm("Do you want to Confirm your order ?");
    confirmation
      ? Order(product, logedInUser)
      : alert("Please! pre plan accordingly before ordering");
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
                <p>Price: {product.price}</p>
                <Button
                  type="submit"
                  value="Order Now"
                  onClick={() => this.handleOrderClick(product)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default CustomerPage;
