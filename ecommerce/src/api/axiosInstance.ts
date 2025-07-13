// src/api/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com", // kendi API base URL'ini buraya yaz
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
