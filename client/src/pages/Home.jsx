import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <span className="hero-badge">
            🌶️ Authentic Flavors • Smart Recommendations
          </span>

          <h1>
            Discover Your
            <span> Perfect Snack</span>
          </h1>

          <p>
            Explore authentic traditional flavors from Vidarbha &
            Konkan. Tell us what you like and we'll recommend
            products that match your taste, preferences and budget.
          </p>

          <div className="hero-buttons">

            <Link to="/quiz">
              <button className="hero-primary-button">
                Find My Perfect Snack →
              </button>
            </Link>

            <a href="#products">
              <button className="hero-secondary-button">
                Explore Products
              </button>
            </a>

          </div>

        </div>

      </section>


      {/* Why Choose Us */}
      <section className="features-section">

        <div className="section-heading">

          <span>WHY NAIK FOODS?</span>

          <h2>
            Traditional Taste Meets Smart Shopping
          </h2>

          <p>
            We make it easier to discover products you'll love.
          </p>

        </div>

        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">🌶️</div>

            <h3>Authentic Flavors</h3>

            <p>
              Traditional snacks and foods inspired by
              Vidarbha and Konkan.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🤖</div>

            <h3>Smart Recommendations</h3>

            <p>
              Get personalized product suggestions based on
              your taste and preferences.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">💰</div>

            <h3>Budget Friendly</h3>

            <p>
              Find delicious products that fit your
              preferred budget.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🛒</div>

            <h3>Easy Shopping</h3>

            <p>
              Discover products, add them to your cart and
              shop with ease.
            </p>
          </div>

        </div>

      </section>


      {/* Products */}
      <section
        className="products-section"
        id="products"
      >

        <div className="section-heading">

          <span>OUR PRODUCTS</span>

          <h2>
            Popular Products
          </h2>

          <p>
            Explore some of our traditional favorites.
          </p>

        </div>


        {loading && (
          <div className="loading-message">
            <h3>Loading products...</h3>
          </div>
        )}


        {error && (
          <div className="error-message">
            <h3>{error}</h3>
          </div>
        )}


        {!loading && !error && (
          <div className="product-grid">

            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}

          </div>
        )}

      </section>


      {/* Recommendation CTA */}
      <section className="recommendation-banner">

        <div>

          <span>
            ✨ PERSONALIZED SHOPPING
          </span>

          <h2>
            Not sure what to choose?
          </h2>

          <p>
            Take our quick quiz and discover products
            selected specially for you.
          </p>

        </div>

        <Link to="/quiz">
          <button>
            Get Personalized Recommendations →
          </button>
        </Link>

      </section>

    </div>
  );
}

export default Home;