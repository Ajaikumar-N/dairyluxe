import React, { Component } from "react";
import "../cssFiles/FarmerPage.css";
import img1 from "../images/cow1.jpg";
import img2 from "../images/cow2.jpg";
import img3 from "../images/chick.jpg";
import img4 from "../images/goat.jpg";

const farmProducts = [
  { id: 1, name: "Cow Husbandry", price: " ₹50,000", imgSrc: img1 },
  {
    id: 2,
    name: "Cow Husbandry",
    price: " ₹50,000",
    imgSrc: img2,
  },
  {
    id: 3,
    name: "Chick Poultry",
    price: " ₹25,000",
    imgSrc: img3,
  },
  { id: 4, name: "Goat Shed", price: " ₹25,000", imgSrc: img4 },
  {
    id: 5,
    name: "Duck Poultry",
    price: " ₹20,000",
    imgSrc: img4,
  },
  { id: 6, name: "Fish Pond", price: " ₹20,000", imgSrc: "path/to/image3.jpg" },
];

class FarmerPage extends Component {
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
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default FarmerPage;
