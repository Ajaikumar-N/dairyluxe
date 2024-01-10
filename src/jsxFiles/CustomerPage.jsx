import React, { Component } from "react";
import "../cssFiles/FarmerPage.css";
import img1 from "../images/cow1.jpg";
// import { Image } from "../elementFiles/Image";

const farmProducts = [
  { id: 1, name: "P1", price: " ₹10" },
  { id: 2, name: "Product 2", price: " ₹15" },
  { id: 3, name: "Product 3", price: " ₹20" },
  { id: 4, name: "Product 1", price: " ₹10" },
  { id: 5, name: "Product 2", price: " ₹15" },
  { id: 6, name: "Product 3", price: " ₹20" },
];

class CustomerPage extends Component {
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
                <img src={img1} alt={product.name} />

                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default CustomerPage;
