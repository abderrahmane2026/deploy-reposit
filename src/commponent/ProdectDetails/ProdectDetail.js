import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart, FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa";
import Breadcrum from "../../Breadcrum/Breadcrum";
import { ShopContext } from "../../Context/ShopContext";
import "./ProdectDetail.css";
import axios from "axios";

function ProdectDetail() {
  const { addToCart } = useContext(ShopContext);
  const { prodectId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${prodectId}`);
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchProduct();
  }, [prodectId]);

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
          <h3>
            small <span>title</span>
          </h3>
          <h2>
            ${product.price} {/* <del>${product.old_price.toFixed(2)}</del> */}
          </h2>
          <div className="rating">
            <h3>Rating:</h3>
            <ul>
              {[...Array(4)].map((_, index) => (
                <i key={index}>
                  <FaStar />
                </i>
              ))}
              <i>
                <FaRegStar />
              </i>
            </ul>
          </div>

          <h3>Description:</h3>
          <p>{product.description}</p>

          <div className="btn-container">
            <button onClick={() => addToCart(product._id)}>
              <FaShoppingCart />
              <span> Add to Cart </span>
            </button>
            <button>
              <FaRegHeart />
            </button>
          </div>

          <div className="icons-container">
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdectDetail;
