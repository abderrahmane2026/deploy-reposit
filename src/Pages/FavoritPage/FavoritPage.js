import React, { useContext } from "react";
import { FavoriteContext } from "../../Context/FavoritContext"
import ProdCard from "../../commponent/Card/ProdCard";
import "./FavoritPage.css";

export default function FavoritPage() {
  const { favorites } = useContext(FavoriteContext); // Use the FavoriteContext

  return (
    <div className="favorit-page">
      <h2>Favorite Products</h2>
      <div className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <ProdCard
              key={product._id}
              id={product._id}
              image={product.image}
              name={product.name}
              category={product.category}
              new_price={product.price}
            />
          ))
        ) : (
          <p>No favorite products yet.</p>
        )}
      </div>
    </div>
  );
}
