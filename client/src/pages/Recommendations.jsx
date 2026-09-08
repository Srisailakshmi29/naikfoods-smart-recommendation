import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { getRecommendations } from "../services/api";
import ProductCard from "../components/ProductCard";

function Recommendations() {
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const preferences = location.state;

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (!preferences) {
        setError("No preferences were selected.");
        setLoading(false);
        return;
      }

      try {
        const response = await getRecommendations(preferences);

        setProducts(response.data);
      } catch (err) {
        console.error(err);

        setError(
          "Failed to generate recommendations."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [preferences]);

  if (loading) {
    return (
      <div className="recommendations-loading">

        <div className="loading-icon">
          ✨
        </div>

        <h2>
          Finding the best products for you...
        </h2>

        <p>
          We're matching your preferences with our products.
        </p>

      </div>
    );
  }

  if (error) {
    return (
      <div className="recommendations-error">

        <h2>{error}</h2>

        <Link to="/quiz">
          <button>
            Take the Quiz Again
          </button>
        </Link>

      </div>
    );
  }

  return (
    <div className="recommendations-page">

      {/* =========================
          HEADER
      ========================= */}

      <section className="recommendations-header">

        <span>
          ✨ YOUR PERSONALIZED RESULTS
        </span>

        <h1>
          Recommended For You
        </h1>

        <p>
          We found products that match your
          taste, preferences and budget.
        </p>

      </section>


      {/* =========================
          PREFERENCE SUMMARY
      ========================= */}

      <section className="preference-summary">

        <h3>
          Your Preferences
        </h3>

        <div className="preference-list">

          <div>
            <span>
              🌶️ Taste
            </span>

            <strong>
              {preferences?.taste}
            </strong>
          </div>


          <div>
            <span>
              🥗 Purpose
            </span>

            <strong>
              {preferences?.purpose}
            </strong>
          </div>


          <div>
            <span>
              💰 Budget
            </span>

            <strong>
              Under ₹{preferences?.budget}
            </strong>
          </div>

        </div>

      </section>


      {/* =========================
          RESULTS
      ========================= */}

      <section className="recommendation-results">

        <div className="results-heading">

          <h2>
            Top Picks For You
          </h2>

          <span>
            {products.length} products found
          </span>

        </div>


        <div className="recommendation-grid">

          {products.map((product, index) => (

            <div
              className="recommendation-card"
              key={product._id}
            >

              {/* =========================
                  MATCH PERCENTAGE
              ========================= */}

              <div className="match-score">
                <span>
                  {product.matchPercentage ?? 0}% Match
                </span>
              </div>


              {/* =========================
                  BEST MATCH
              ========================= */}

              {index === 0 && (
                <div className="best-match-badge">
                  ⭐ Best Match
                </div>
              )}


              {/* Product Card */}

              <ProductCard
                product={product}
              />


              {/* =========================
                  WHY RECOMMENDED
              ========================= */}

              <div className="recommendation-reason">

                <strong>
                  Why we recommend this
                </strong>


                {product.recommendationReasons &&
                product.recommendationReasons.length > 0 ? (

                  product.recommendationReasons.map(
                    (reason, reasonIndex) => (

                      <p key={reasonIndex}>
                        ✓ {reason}
                      </p>

                    )
                  )

                ) : (

                  <p>
                    ✓ Recommended based on your
                    preferences
                  </p>

                )}

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          ACTIONS
      ========================= */}

      <section className="recommendation-actions">

        <Link to="/quiz">

          <button className="try-again-button">
            ↻ Try Quiz Again
          </button>

        </Link>


        <Link to="/">

          <button className="continue-shopping-button">
            Continue Shopping →
          </button>

        </Link>

      </section>

    </div>
  );
}

export default Recommendations;