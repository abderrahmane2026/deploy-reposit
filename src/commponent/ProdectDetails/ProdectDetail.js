import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart, FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa";
import Breadcrum from "../../Breadcrum/Breadcrum";
import { ShopContext } from "../../Context/ShopContext";
import { FavoriteContext } from "../../Context/FavoritContext"; 
import "./ProdectDetail.css";
import axios from "axios";
import ProdCard from "../Card/ProdCard";

function ProdectDetail() {
  const { addToCart } = useContext(ShopContext);
  const { addToFavorites } = useContext(FavoriteContext); 
  const { prodectId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${prodectId}`);
        setProduct(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchProduct();
  }, [prodectId]);

  useEffect(() => {
    const fetchRelatedProducts = async (productName) => {
      try {
        const response = await axios.get("/api/products");
        let allProducts = response.data;

        const related = allProducts.filter(p =>
          p.name.toLowerCase().includes(productName.toLowerCase()) && p._id !== product._id
        ).slice(0, 4);

        setRelatedProducts(related);
      } catch (error) {
        console.error("Error fetching related products", error);
      }
    };

    if (product) {
      fetchRelatedProducts(product.name);
    }
  }, [product]);

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${prodectId}`);
    if (savedRating) {
      setRating(parseInt(savedRating, 10));
    }
  }, [prodectId]);

  const handleRating = (newRating) => {
    setRating(newRating);
    localStorage.setItem(`rating-${prodectId}`, newRating);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <Breadcrum product={product} />

      <div className="detail-page">
        <div className="image-container">
          <div className="global-img">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        <div className="description-container">
          <h1>{product.name}</h1>
          <h3>small <span>title</span></h3>
          <h2>${product.price}</h2>
          <div className="rating">
            <h3>Rating:</h3>
            <ul>
              {[...Array(5)].map((_, index) => (
                <i key={index} onClick={() => handleRating(index + 1)}>
                  {index < rating ? <FaStar /> : <FaRegStar />}
                </i>
              ))}
            </ul>
          </div>
          <h3>Description:</h3>
          <p>{product.description}</p>
          <h3>Quantity:</h3>
          <p className="quantity">{product.quantity}</p>
          <div className="btn-container">
            <button onClick={() => addToCart(product._id)}>
              <FaShoppingCart />
              <span> Add to Cart </span>
            </button>
            <button onClick={() => addToFavorites(product)}><FaRegHeart /></button>
          </div>
          <div className="icons-container">
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="related-products mt-3 ms-3">
        <h2>Related Products</h2>
        <div className="related-products-list d-flex mt-5">
          {relatedProducts.map(relatedProduct => (
            <ProdCard
              key={relatedProduct._id}
              id={relatedProduct._id}
              image={relatedProduct.image}
              name={relatedProduct.name}
              category={relatedProduct.category}
              new_price={relatedProduct.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProdectDetail;
