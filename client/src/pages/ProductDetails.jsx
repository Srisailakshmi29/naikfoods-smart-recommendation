import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getProductById } from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = existingCart.find(
      (item) => item._id === product._id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item) =>
        item._id === product._id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );

    setMessage(`${product.name} added to your cart!`);
  };

  if (loading) {
    return (
      <div className="page">
        <h2>Loading product...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="page">
        <h2>Product not found</h2>

        <Link to="/">
          <button>Back to Products</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="product-details-page">

      {/* Product Image */}
      <div className="product-details-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>


      {/* Product Information */}
      <div className="product-details-info">

        <span className="details-category">
          {product.category}
        </span>

        <h1>{product.name}</h1>

        <div className="details-rating">
          ⭐ {product.rating} / 5
        </div>

        <h2 className="details-price">
          ₹{product.price}
        </h2>

        <p className="details-description">
          {product.description}
        </p>


        {/* Product Tags */}
        {product.tags &&
          product.tags.length > 0 && (

            <div className="details-tags">

              <h3>Product Highlights</h3>

              <div className="tag-list">

                {product.tags.map((tag) => (
                  <span key={tag}>
                    ✓ {tag}
                  </span>
                ))}

              </div>

            </div>

          )}


        {/* Taste */}
        {product.taste &&
          product.taste.length > 0 && (

            <div className="details-section">

              <strong>Taste:</strong>

              <span>
                {product.taste.join(", ")}
              </span>

            </div>

          )}


        {/* Suitable For */}
        {product.suitableFor &&
          product.suitableFor.length > 0 && (

            <div className="details-section">

              <strong>Suitable For:</strong>

              <span>
                {product.suitableFor.join(", ")}
              </span>

            </div>

          )}


        {/* Purchase Area */}
        <div className="purchase-box">

          <div className="purchase-price">
            ₹{product.price}
          </div>

          <button
            className="details-add-cart"
            onClick={addToCart}
          >
            🛒 Add to Cart
          </button>

          <Link to="/cart">
            <button className="details-cart-button">
              View Cart
            </button>
          </Link>

        </div>


        {/* Success Message */}
        {message && (
          <div className="cart-success-message">
            ✓ {message}
          </div>
        )}


        {/* Back Button */}
        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;