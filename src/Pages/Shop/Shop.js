import React, { useState, useEffect } from "react";
import "./Shop.css";
import Sidebar from "./Sidebar/Sidebar";
import SearchBar from "./SearchBar/SearchBar";
import Recommended from "./Sidebar/Recommended/Recommended";
import Prodects from "./Prodect/ProdectsShop";
import ProdCard from "../../commponent/Card/ProdCard";
import axios from "axios";

export default function Shop() {
  const [all_product, setall_product] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setall_product(response.data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(all_product, selected, query) {
    let filteredProducts = all_product;

    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selected) {
      if (selected === "under200") {
        filteredProducts = filteredProducts.filter((product) => product.price < 200);
      } else if (selected === "under500") {
        filteredProducts = filteredProducts.filter((product) => product.price < 500);
      } else if (selected === "under1000") {
        filteredProducts = filteredProducts.filter((product) => product.price < 1000);
      } else if (selected === "over1000") {
        filteredProducts = filteredProducts.filter((product) => product.price > 1000);
      } else {
        filteredProducts = filteredProducts.filter(
          ({ category, company, new_price, name }) =>
            category === selected ||
            company === selected ||
            new_price === selected ||
            name === selected
        );
      }
    }

    return filteredProducts.map((product) => (
      <ProdCard
        key={product._id}
        id={product._id}
        image={product.image}
        name={product.name}
        category={product.category}
        new_price={product.price}
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