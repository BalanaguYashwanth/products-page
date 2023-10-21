import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api.action";
import Card from "../components/Card";


const Homepage = () => {
  const [products, setProducts] = useState([]);

  const getProductsFromAPI = async () => {
    const productsJSON = await fetchProducts();
    setProducts(productsJSON?.data || []);
  };

  useEffect(() => {
    getProductsFromAPI();
  }, []);

  return (
    <main>
      <h2>My products</h2>
      <hr />
      {products.map((product, index) => (
        <section key={index}>
          {products.length > 0 && (
            <Card title={product?.title} image={product?.image} />
          )}
        </section>
      ))}
    </main>
  );
};
export default Homepage;
