import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api.action";
import styles from "./Homapage.module.scss";
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
    <main className={styles.container}>
      <h2 className={styles.header}>My products</h2>
      <hr />
      <section className={styles.cardContainer}>
        {products.map((product, index) => (
          <article key={index} className={styles.marginAuto}>
            {products.length > 0 && (
              <Card title={product?.title} image={product?.image} />
            )}
          </article>
        ))}
      </section>
    </main>
  );
};
export default Homepage;
