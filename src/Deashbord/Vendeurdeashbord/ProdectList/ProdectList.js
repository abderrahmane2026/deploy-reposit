import React from "react";
import './ProdectList.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    quantity: 10,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Product 2',
    quantity: 5,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Product 3',
    quantity: 20,
    image: 'https://via.placeholder.com/150'
  },
  // Add more products as needed
];
export default function ProdectList(){
    return(
        <div>
             <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-quantity">Quantity: {product.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    )
}
