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

const Order = () => {

}

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
                <Button type="submit" value="Apply Now" onClick={Order} />

              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default CustomerPage;
