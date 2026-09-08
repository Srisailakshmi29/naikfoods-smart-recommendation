import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();

  const [taste, setTaste] = useState("");
  const [purpose, setPurpose] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taste || !purpose || !budget) {
      alert("Please answer all questions.");
      return;
    }

    navigate("/recommendations", {
      state: {
        taste,
        purpose,
        budget,
      },
    });
  };

  return (
    <div className="quiz-page">

      {/* Header */}
      <div className="quiz-header">

        <span>✨ PERSONALIZED SHOPPING</span>

        <h1>Find Your Perfect Snack</h1>

        <p>
          Answer three simple questions and discover
          products selected specially for you.
        </p>

      </div>


      <form
        className="quiz-form"
        onSubmit={handleSubmit}
      >

        {/* Question 1 */}
        <div className="quiz-card">

          <div className="quiz-number">
            01
          </div>

          <div className="quiz-content">

            <h2>What taste do you prefer?</h2>

            <p>
              Choose the flavor you enjoy the most.
            </p>

            <div className="quiz-options">

              <label
                className={
                  taste === "spicy"
                    ? "quiz-option selected"
                    : "quiz-option"
                }
              >
                <input
                  type="radio"
                  name="taste"
                  value="spicy"
                  checked={taste === "spicy"}
                  onChange={(e) =>
                    setTaste(e.target.value)
                  }
                />

                <span className="option-icon">
                  🌶️
                </span>

                <span>
                  <strong>Spicy</strong>
                  <small>Bold & flavorful</small>
                </span>

              </label>


              <label
                className={
                  taste === "savory"
                    ? "quiz-option selected"
                    : "quiz-option"
                }
              >
                <input
                  type="radio"
                  name="taste"
                  value="savory"
                  checked={taste === "savory"}
                  onChange={(e) =>
                    setTaste(e.target.value)
                  }
                />

                <span className="option-icon">
                  🥨
                </span>

                <span>
                  <strong>Savory</strong>
                  <small>Rich & satisfying</small>
                </span>

              </label>


              <label
                className={
                  taste === "sweet"
                    ? "quiz-option selected"
                    : "quiz-option"
                }
              >
                <input
                  type="radio"
                  name="taste"
                  value="sweet"
                  checked={taste === "sweet"}
                  onChange={(e) =>
                    setTaste(e.target.value)
                  }
                />

                <span className="option-icon">
                  🍬
                </span>

                <span>
                  <strong>Sweet</strong>
                  <small>Delicious & comforting</small>
                </span>

              </label>


              <label
                className={
                  taste === "mild"
                    ? "quiz-option selected"
                    : "quiz-option"
                }
              >
                <input
                  type="radio"
                  name="taste"
                  value="mild"
                  checked={taste === "mild"}
                  onChange={(e) =>
                    setTaste(e.target.value)
                  }
                />

                <span className="option-icon">
                  😊
                </span>

                <span>
                  <strong>Mild</strong>
                  <small>Light & enjoyable</small>
                </span>

              </label>

            </div>

          </div>

        </div>


        {/* Question 2 */}
        <div className="quiz-card">

          <div className="quiz-number">
            02
          </div>

          <div className="quiz-content">

            <h2>What are you looking for?</h2>

            <p>
              Tell us how you plan to enjoy your snack.
            </p>

            <div className="quiz-options">

              <label
                className={
                  purpose === "healthy"
                    ? "quiz-option selected"
                    : "quiz-option"
                }
              >

                <input
                  type="radio"
                  name="purpose"
                  value="healthy"
                  checked={purpose === "healthy"}
                  onChange={(e) =>
                    setPurpose(e.target.value)
                  }
                />

                <span className="option-icon">
                  🥗
                </span>

                <span>
                  <strong>Healthy Snack</strong>
                  <small>Better everyday choices</small>
                </span>

              </label>


              <label
                className={
                  purpose === "regular"
                    ? "quiz-option selected"
                    : "quiz-option"
                }
              >

                <input
                  type="radio"
                  name="purpose"
                  value="regular"
                  checked={purpose === "regular"}
                  onChange={(e) =>
                    setPurpose(e.target.value)
                  }
                />

                <span className="option-icon">
                  🍿
                </span>

                <span>
                  <strong>Regular Snack</strong>
                  <small>Perfect for any occasion</small>
                </span>

              </label>

            </div>

          </div>

        </div>


        {/* Question 3 */}
        <div className="quiz-card">

          <div className="quiz-number">
            03
          </div>

          <div className="quiz-content">

            <h2>What's your budget?</h2>

            <p>
              We'll prioritize products that fit your budget.
            </p>

            <div className="budget-options">

              <label
                className={
                  budget === "75"
                    ? "budget-option selected"
                    : "budget-option"
                }
              >
                <input
                  type="radio"
                  name="budget"
                  value="75"
                  checked={budget === "75"}
                  onChange={(e) =>
                    setBudget(e.target.value)
                  }
                />

                <span>₹75</span>
                <small>Under ₹75</small>

              </label>


              <label
                className={
                  budget === "100"
                    ? "budget-option selected"
                    : "budget-option"
                }
              >
                <input
                  type="radio"
                  name="budget"
                  value="100"
                  checked={budget === "100"}
                  onChange={(e) =>
                    setBudget(e.target.value)
                  }
                />

                <span>₹100</span>
                <small>Under ₹100</small>

              </label>


              <label
                className={
                  budget === "150"
                    ? "budget-option selected"
                    : "budget-option"
                }
              >
                <input
                  type="radio"
                  name="budget"
                  value="150"
                  checked={budget === "150"}
                  onChange={(e) =>
                    setBudget(e.target.value)
                  }
                />

                <span>₹150</span>
                <small>Under ₹150</small>

              </label>


              <label
                className={
                  budget === "200"
                    ? "budget-option selected"
                    : "budget-option"
                }
              >
                <input
                  type="radio"
                  name="budget"
                  value="200"
                  checked={budget === "200"}
                  onChange={(e) =>
                    setBudget(e.target.value)
                  }
                />

                <span>₹200</span>
                <small>Under ₹200</small>

              </label>

            </div>

          </div>

        </div>


        {/* Submit */}
        <div className="quiz-submit">

          <button type="submit">
            Find My Recommendations →
          </button>

          <p>
            🔒 Your preferences are only used to
            personalize your recommendations.
          </p>

        </div>

      </form>

    </div>
  );
}

export default Quiz;