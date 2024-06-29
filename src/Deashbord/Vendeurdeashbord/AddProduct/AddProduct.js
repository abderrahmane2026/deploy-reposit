import React, { useState, useEffect } from "react";
import "./AddProduct.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState(""); // New state for quantity
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(window.localStorage.getItem("userr"));
    const userId = user?._id;

    const formData = new FormData();
    formData.append("name", title);
    formData.append("price", parseFloat(price));
    formData.append("description", description);
    formData.append("image", image);
    formData.append("category", category);
    formData.append("company", company);
    // formData.append("quantity", parseInt(quantity)); // Append quantity to formData
    formData.append("sellerId", userId);

    try {
      const response = await fetch("https://futterclubs-1.onrender.com/api/products", {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      console.log("Success:", json);
      toast.success("Product added successfully!");
      setTimeout(() => navigate("/shop"), 2000); // Navigate to the shop after 2 seconds
    } catch (err) {
      console.error("Error:", err);
      toast.error("Error adding product.");
    }
  };

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = JSON.parse(window.localStorage.getItem("userr"));
        setCurrentUser(user);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!currentUser) {
    return <div>User not found. Please log in.</div>;
  }

  if (currentUser.role !== "seller") {
    return <div>You must be a seller to add Club.</div>;
  }

  if (currentUser.sellerStatus === "requested") {
    return (
      <div>
        Your request is being reviewed. You can add Club once you are
        accepted.
      </div>
    );
  }

  if (currentUser.sellerStatus === "refused") {
    return <div>Your request has been refused. You cannot add Club.</div>;
  }

  if (currentUser.sellerStatus === "accepted") {
    return (
      <div className="add-product-container">
        <h2>Add New 
          Club
        </h2>
        <form onSubmit={handleSubmit} className="add-product-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
               <option value="">Select a wilaya</option>
    <option value="Adrar">Adrar</option>
    <option value="Chlef">Chlef</option>
    <option value="Laghouat">Laghouat</option>
    <option value="Oum El Bouaghi">Oum El Bouaghi</option>
    <option value="Batna">Batna</option>
    <option value="Béjaïa">Béjaïa</option>
    <option value="Biskra">Biskra</option>
    <option value="Béchar">Béchar</option>
    <option value="Blida">Blida</option>
    <option value="Bouira">Bouira</option>
    <option value="Tamanrasset">Tamanrasset</option>
    <option value="Tébessa">Tébessa</option>
    <option value="Tlemcen">Tlemcen</option>
    <option value="Tiaret">Tiaret</option>
    <option value="Tizi Ouzou">Tizi Ouzou</option>
    <option value="Algiers">Algiers</option>
    <option value="Djelfa">Djelfa</option>
    <option value="Jijel">Jijel</option>
    <option value="Sétif">Sétif</option>
    <option value="Saïda">Saïda</option>
    <option value="Skikda">Skikda</option>
    <option value="Sidi Bel Abbès">Sidi Bel Abbès</option>
    <option value="Annaba">Annaba</option>
    <option value="Guelma">Guelma</option>
    <option value="Constantine">Constantine</option>
    <option value="Médéa">Médéa</option>
    <option value="Mostaganem">Mostaganem</option>
    <option value="M'Sila">M'Sila</option>
    <option value="Mascara">Mascara</option>
    <option value="Ouargla">Ouargla</option>
    <option value="Oran">Oran</option>
    <option value="El Bayadh">El Bayadh</option>
    <option value="Illizi">Illizi</option>
    <option value="Bordj Bou Arréridj">Bordj Bou Arréridj</option>
    <option value="Boumerdès">Boumerdès</option>
    <option value="El Tarf">El Tarf</option>
    <option value="Tindouf">Tindouf</option>
    <option value="Tissemsilt">Tissemsilt</option>
    <option value="El Oued">El Oued</option>
    <option value="Khenchela">Khenchela</option>
    <option value="Souk Ahras">Souk Ahras</option>
    <option value="Tipaza">Tipaza</option>
    <option value="Mila">Mila</option>
    <option value="Aïn Defla">Aïn Defla</option>
    <option value="Naâma">Naâma</option>
    <option value="Aïn Témouchent">Aïn Témouchent</option>
    <option value="Ghardaïa">Ghardaïa</option>
    <option value="Relizane">Relizane</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="company">catigory</label>
            <select
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            >
              <option value="">Select a company</option>
              <option value="Team">Team</option>
              <option value="Individual">Individual </option>
              <option value="Combat">Combat </option>
              <option value="Recreational">Recreational </option>
              <option value="Bodybuilding">Bodybuilding</option>
            </select>
          </div>

          {/* <div className="form-group">
            <label htmlFor="quantity">Quantity</label>{" "}
            
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div> */}

          <div className="addproduct-button">
            <button type="submit" className="submit-button">
              Add Club
            </button>
          </div>
        </form>
        <ToastContainer /> {/* ToastContainer to show the toasts */}
      </div>
    );
  }

  return null; // Handle unexpected cases gracefully
};

export default AddProduct;
