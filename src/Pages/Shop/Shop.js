import React from 'react'
import { useState } from "react";
import "./Shop.css"
import Sidebar from './Sidebar/Sidebar'
import SearchBar from './SearchBar/SearchBar'
import Recommended from './Sidebar/Recommended/Recommended'
// import Prodect from '../../commponent/Prodect/Prodects'
import Prodects from './Prodect/ProdectsShop'
import all_product from '../../assetes/all_product'
import ProdCard from '../../commponent/Card/ProdCard'

export default function Shop() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = all_product.filter(
    (all_product) => all_product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
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
        ({ category ,company , new_price, name }) =>
          category === selected ||
          company === selected ||
          new_price === selected ||
          name === selected

      );
    }

    return filteredProducts.map(
      ({id, image,name ,category, new_price,old_price }) => (
        
        <ProdCard
          key={Math.random()}
          id={id}
          image={image}
          name={name}
          category={category}
          old_price={old_price}
          new_price={new_price}
        />
        
      )
    );
  }

  const result = filteredData(all_product, selectedCategory, query);
  return (
    <div>

      <Sidebar  handleChange={handleChange}/>
      <SearchBar query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Prodects result={result}/>
      

    </div>
  )
}
