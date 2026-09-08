import { Link } from "react-router-dom";

function ProductCard({ product }) {
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

    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-card">

      {/* Product Image */}
      <div className="product-image-container">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <span className="product-category-badge">
          {product.category}
        </span>

      </div>


      {/* Product Information */}
      <div className="product-info">

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>


        {/* Rating + Price */}
        <div className="product-details">

          <span className="product-price">
            ₹{product.price}
          </span>

          <span className="product-rating">
            ⭐ {product.rating}
          </span>

        </div>


        {/* Taste Tags */}
        {product.taste &&
          product.taste.length > 0 && (

            <div className="product-tags">

              {product.taste.map((taste) => (
                <span key={taste}>
                  {taste}
                </span>
              ))}

            </div>

          )}


        {/* Buttons */}
        <div className="product-actions">

          <Link
            to={`/products/${product._id}`}
          >
            <button className="view-product-button">
              View Product
            </button>
          </Link>

          <button
            className="add-cart-button"
            onClick={addToCart}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;