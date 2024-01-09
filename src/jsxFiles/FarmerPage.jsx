import React, { Component } from 'react';
import '../cssFiles/FarmerPage.css'; // Import the CSS file for styling

// Sample JSON data (replace it with your actual data)
const farmProducts = [
  { id: 1, name: 'Product 1', price: '$10', imgSrc: 'path/to/image1.jpg' },
  { id: 2, name: 'Product 2', price: '$15', imgSrc: 'path/to/image2.jpg' },
  { id: 3, name: 'Product 3', price: '$20', imgSrc: 'path/to/image3.jpg' },
  { id: 4, name: 'Product 1', price: '$10', imgSrc: 'path/to/image1.jpg' },
  { id: 5, name: 'Product 2', price: '$15', imgSrc: 'path/to/image2.jpg' },
  { id: 6, name: 'Product 3', price: '$20', imgSrc: 'path/to/image3.jpg' },
];

class FarmerPage extends Component {
  render() {
    return (
      <div className="farmer-page">
        <div className="row">
          {farmProducts.slice(0, 3).map(product => (
            <div key={product.id} className="card">
              <img src={product.imgSrc} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
            </div>
          ))}
        </div>
        <div className="row">
          {farmProducts.slice(3, 6).map(product => (
            <div key={product.id} className="card">
              <img src={product.imgSrc} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FarmerPage;
