export const categories = [
  { value: "electronics", label: "Electronics" },
  { value: "jewelery", label: "Jewelery" },
  { value: "men's clothing", label: "Men's clothing" },
  { value: "women's clothing", label: "Women's clothing" },
];

export const BASE_URL = 'https://fakestoreapi.com'

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

