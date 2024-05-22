import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Offers.css"
import ProdCard from '../../Card/ProdCard'


export default function Offers() {
  const [all_product, setAllProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setAllProduct(response.data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to get the 5 products with the minimum price
  const getMinPriceProducts = (products) => {
    return products
      .sort((a, b) => a.price - b.price)
      .slice(0, 5);
  };

  const minPriceProducts = getMinPriceProducts(all_product);

  return (
    <div className='Newprod-continer'>
      <h1>
        Offers prod
        <hr/>
      </h1>
      <div className='prod-continer'>
        {minPriceProducts.map((product) => (
          <ProdCard
            key={product._id}
            id={product._id}
            image={product.image}
            name={product.name}
            category={product.category}
            new_price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
