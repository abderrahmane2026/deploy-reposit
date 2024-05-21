import React from "react";
import { useState, useEffect } from "react";
import "./Shop.css";
import Sidebar from "./Sidebar/Sidebar";
import SearchBar from "./SearchBar/SearchBar";
import Recommended from "./Sidebar/Recommended/Recommended";
// import Prodect from '../../commponent/Prodect/Prodects'
import Prodects from "./Prodect/ProdectsShop";
import ProdCard from "../../commponent/Card/ProdCard";
import axios from "axios";

export default function Shop() {
  const [all_product, setall_product] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setall_product(response.data);
        console.log(all_product);
        console.log(response.data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchProducts();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = all_product.filter(
    (all_product) =>
      all_product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(all_product, selected, query) {
    let filteredProducts = all_product;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, company, new_price, name }) =>
          category === selected ||
          company === selected ||
          new_price === selected ||
          name === selected
      );
    }

    return filteredProducts.map((product) => (
      <ProdCard
        key={product._id}
        id={product._id}
        image={product.image}
        name={product.name}
        category={product.category}
        old_price={product.price}
      />
    ));
  }

  const result = filteredData(all_product, selectedCategory, query);
  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <SearchBar query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Prodects result={result} />
    </div>
  );
}
