import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Newprod.css";
import ProdCard from '../../Card/ProdCard';

export default function Newprod() {
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

  return (
    <div className='Newprod-continer'>
      <h1>
        Newprod
        <hr/>
      </h1>
      <div className='prod-continer'>
        {all_product.slice(-5).map((product) => (
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
