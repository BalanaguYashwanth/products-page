import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchProducts = () => {
  return axios.get(`${BASE_URL}/products`);
};

export const fetchCategoriesProducts = ({ type }) => {
  return axios.get(`${BASE_URL}/products/category/${type}`);
};
