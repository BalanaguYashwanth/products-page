export const categories = [
  { value: "electronics", label: "Electronics" },
  { value: "jewelery", label: "Jewelery" },
  { value: "men's clothing", label: "Men's clothing" },
  { value: "women's clothing", label: "Women's clothing" },
];

export const BASE_URL = 'https://fakestoreapi.com'

export const ACCESS_TOKEN = localStorage.getItem('access-token-products')

export const ProductState = {
  LOADING: false,
  ERROR: "",
  PRODUCTS: [],
};

export const loadingAction = () => {
  return {
    type:'LOADER',
    LOADING: true,
  };
};
export const loadProducts = (data) => {
  return {
    type:'LOAD_DATA',
    LOADING: false,
    PRODUCTS: data || [],
  };
};
export const errorAction = (error) => {
  return {
    type:'ERROR',
    LOADING: false,
    ERROR: error,
  };
};
export const API_KEY = process.env.REACT_APP_API_KEY;
export const AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN;
export const DATABASE_URL = process.env.REACT_APP_DATABASE_URL;
export const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
export const STORAGE_BUCKET = process.env.REACT_APP_STORAGE_BUCKET;
export const MESSAGING_SENDER_ID = process.env.REACT_APP_MESSAGING_SENDER_ID;
export const APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;
