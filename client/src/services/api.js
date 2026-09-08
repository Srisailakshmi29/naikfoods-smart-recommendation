import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const getProducts = () => {
  return API.get("/products");
};

export const getProductById = (id) => {
  return API.get(`/products/${id}`);
};

export const getRecommendations = (preferences) => {
  return API.post("/recommendations", preferences);
};

export default API;