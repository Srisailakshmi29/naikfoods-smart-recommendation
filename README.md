# Naik Foods Smart Product Recommendation System

## Live Demo

Frontend: https://tourmaline-shortbread-a17118.netlify.app/

GitHub Repository: https://github.com/Srisailakshmi29/naikfoods-smart-recommendation

Backend API: Deployed on Render

---

## Project Overview

The Naik Foods Smart Product Recommendation System is a full-stack MERN application developed after analyzing the Naik Foods e-commerce website.

The main objective is to improve product discovery by helping customers find suitable snacks based on their taste preference, purpose, and budget.

Instead of manually browsing many products, users can answer a few questions and receive personalized product recommendations.

---

## Problem Identified

During the analysis of the Naik Foods website, several opportunities for improvement were identified:

- Customers have to browse multiple products to find suitable items.
- Product discovery can be improved with personalized recommendations.
- Some products displayed a price of ₹0.
- Product information can be made more detailed.
- Product filtering can be improved.
- Recommendation and cross-selling opportunities can be increased.
- Cart experience can be improved using free-delivery progress information.
- Blog and recipe content can be connected directly with products.

Based on these observations, a Smart Product Recommendation feature was developed as a working prototype.

---

## Key Features

### Customer Features

- Responsive home page
- Product browsing
- Product details
- Smart recommendation quiz
- Personalized recommendations
- Match percentage
- Recommendation reasons
- Add to cart
- Shopping cart
- Free-delivery progress indicator
- Responsive mobile design

### Recommendation Features

Users select:

1. Taste preference
2. Purpose
3. Budget

The system analyzes these preferences and ranks products according to their suitability.

---

## Recommendation Logic

The recommendation engine uses a weighted scoring system.

| Preference | Weight |
|------------|--------|
| Taste | 40% |
| Purpose | 30% |
| Budget | 20% |
| Rating | 10% |

The products are scored based on how well they match the user's selected preferences.

The top five products are returned as recommendations.

---

## System Architecture

User
↓
React Frontend
↓
Node.js + Express Backend
↓
Recommendation Engine
↓
MongoDB Atlas
↓
Product Data

---

## Technology Stack

### Frontend

- React.js
- Vite
- JavaScript
- Axios
- React Router
- HTML
- CSS

### Backend

- Node.js
- Express.js
- REST API

### Database

- MongoDB
- MongoDB Atlas
- Mongoose

### Deployment

- Netlify - Frontend
- Render - Backend
- MongoDB Atlas - Database

---

## Project Structure

naikfoods-smart-recommendation/
│
├── client/
│   ├── public/
│   │   └── images/
│   │
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── ProductCard.jsx
│       │   ├── Footer.jsx
│       │   └── Loading.jsx
│       │
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Quiz.jsx
│       │   ├── Recommendations.jsx
│       │   ├── ProductDetails.jsx
│       │   └── Cart.jsx
│       │
│       ├── services/
│       │   └── api.js
│       │
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── server/
│   ├── controllers/
│   │   └── productController.js
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── models/
│   │   └── Product.js
│   │
│   ├── routes/
│   │   └── productRoutes.js
│   │
│   ├── server.js
│   ├── seed.js
│   └── .env
│
├── .gitignore
└── README.md

---

## API Endpoints

### Get Products

GET /api/products

Returns the available products.

### Get Product By ID

GET /api/products/:id

Returns details of a specific product.

### Get Recommendations

POST /api/recommendations

Accepts user preferences and returns personalized recommendations.

Example request:

{
  "taste": "spicy",
  "purpose": "regular",
  "budget": 150
}

---

## Local Installation

### Step 1: Clone the Repository

git clone https://github.com/Srisailakshmi29/naikfoods-smart-recommendation.git

### Step 2: Open the Project

cd naikfoods-smart-recommendation

---

## Frontend Setup

Open the client folder:

cd client

Install dependencies:

npm install

Start the development server:

npm run dev

---

## Backend Setup

Open another terminal and go to the server folder:

cd server

Install dependencies:

npm install

Create a .env file:

PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

Start the backend:

node server.js

---

## Database Setup

MongoDB Atlas is used as the database.

The database stores product information including:

- Product name
- Description
- Price
- Category
- Image
- Rating
- Tags
- Taste
- Suitable purpose
- Health type

To seed the database:

node seed.js

---

## Environment Variables

The following environment variables are required for the backend:

PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

For the frontend deployment:

VITE_API_URL=https://naikfoods-smart-recommendation.onrender.com/api

Sensitive credentials such as database passwords are stored in environment variables and are not committed to GitHub.

---

## User Flow

Home Page
↓
Find Your Snack
↓
Select Taste
↓
Select Purpose
↓
Select Budget
↓
Get Recommendations
↓
View Recommended Products
↓
View Product Details
↓
Add to Cart
↓
Shopping Cart

---

## UX Improvements Identified

The following improvements were identified during the Naik Foods website analysis.

### Product Discovery

- Advanced filtering
- Price filtering
- Taste filtering
- Dietary filtering
- Use-case filtering
- Personalized recommendations

### Product Details

Product pages can include:

- Ingredients
- Nutritional information
- Shelf life
- Storage instructions
- Allergen information
- Product origin
- Quantity information

### Reviews

Recommended improvements include:

- Verified purchase badge
- Rating breakdown
- Photo reviews
- Review sorting
- Helpful review voting

### Cart

The cart can include:

- Free-delivery progress bar
- Frequently bought together
- Product bundles
- Cross-selling recommendations

---

## Technical Issues Identified

### Products Showing ₹0

Some products displayed a price of ₹0.

This can create confusion and reduce customer trust.

Recommended solution:

- Validate product price before publishing.
- Do not allow price values below ₹1.
- Display "Price unavailable" or "Out of stock" when required.

### Contact Information Inconsistency

Different location and support information should be made consistent across the website.

### Support Information

Support hours and contact information should be standardized across all pages.

### Return Policy

The return information shown on the website should match the detailed terms and conditions.

---

## SEO and Customer Acquisition Opportunities

The website can target search terms related to:

- Maharashtrian snacks
- Traditional Indian snacks
- Vidarbha food
- Maharashtrian pickles
- Homemade pickles
- Indian traditional snacks
- Healthy Indian snacks
- Maharashtrian masala

Blog and recipe pages can also include direct product links.

Example:

Recipe
↓
Required Ingredients
↓
Product Page
↓
Add to Cart

This can help convert organic search traffic into customers.

---

## Performance Improvements

Recommended technical improvements include:

- WebP/AVIF image formats
- Lazy loading
- Image compression
- Code splitting
- Browser caching
- CDN usage
- Reduced JavaScript bundle size
- Core Web Vitals optimization

---

## Accessibility Improvements

The application can be improved by implementing:

- Semantic HTML
- Image alt text
- Keyboard navigation
- Visible focus states
- Proper form labels
- Improved color contrast
- Accessible buttons and navigation

---

## Future Improvements

Future versions can include:

- User authentication
- Order history
- Wishlist
- Product comparison
- Advanced product filters
- Frequently bought together
- AI-based recommendations
- Personalized offers
- Festival gift bundles
- Corporate gifting
- Product review system
- Admin dashboard
- Analytics dashboard
- Cart abandonment tracking

---

## Deployment

### Frontend

The React frontend is deployed using Netlify.

Live URL:

https://tourmaline-shortbread-a17118.netlify.app/

### Backend

The Node.js and Express backend is deployed using Render.

### Database

MongoDB Atlas is used for cloud database storage.

---

## Testing

The following features were tested:

- Home page loading
- Navigation
- Recommendation quiz
- Recommendation API
- Product details
- Add to cart
- Cart quantity
- Cart total
- Free-delivery progress
- Mobile responsive layout
- Frontend-backend communication
- Production deployment

---

## Screenshots

The following screenshots demonstrate the working application:

1. Home Page
2. Find Your Snack Quiz
3. Recommendation Results
4. Product Details
5. Shopping Cart
6. Mobile Responsive View
7. Netlify Deployment
8. GitHub Repository

---

## Conclusion

The Naik Foods Smart Product Recommendation System demonstrates how a personalized recommendation feature can improve product discovery and the overall e-commerce experience.

The project combines product analysis with a working full-stack implementation using React, Node.js, Express, and MongoDB.

The prototype focuses on solving a real e-commerce problem while keeping the implementation simple, scalable, and user-friendly.

---

## Author

Developed as a Full Stack MERN Internship Assignment.

### Technologies

React | Node.js | Express.js | MongoDB | Vite | Axios
