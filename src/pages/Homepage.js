import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api.action";
import styles from "./Homapage.module.scss";
import Card from "../components/Card";
import Select from "react-select";
import { categories } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { loadCatgeoryItemsToState } from "../redux/thunk";
import toast, { Toaster } from "react-hot-toast";

const Homepage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const state = useSelector((state) => state);
  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleCategoriesSelection = ({ value, label }) => {
    dispatch(loadCatgeoryItemsToState(value));
  };

  const getProductsFromAPI = async () => {
    try {
      setLoader(true);
      const productsJSON = await fetchProducts();
      setProducts(productsJSON?.data || []);
    } catch (err) {
      toast.error(err?.message);
    } finally {
      setLoader(false);
    }
  };

  const handleStateChange = () => {
    try {
      if (state?.PRODUCTS?.length) {
        setProducts(state.PRODUCTS);
      }
      if (state?.ERROR) {
        toast.error(state?.ERROR);
      }
    } catch (err) {
      toast.error(err?.message);
    }
  };

  useEffect(() => {
    getProductsFromAPI();
  }, []);

  useEffect(() => {
    setLoader(state.LOADING || false)
    handleStateChange();
  }, [state]);

  return (
    <main className={styles.container}>
      <div>
        <Toaster />
      </div>
      <section>
        <h1 className={styles.header}> My products </h1>
        <Select
          placeholder={<div>Select Categories</div>}
          defaultValue={selectedOption}
          onChange={handleCategoriesSelection}
          options={categories}
        />
      </section>
      <hr />
      {loader && <p> loading... </p>}
      {!loader && products.length > 0 && (
        <section className={styles.cardContainer}>
          {products.map((product, index) => (
            <article key={index} className={styles.marginAuto}>
              {products.length > 0 && (
                <Card title={product?.title} image={product?.image} />
              )}
            </article>
          ))}
        </section>
      )}
    </main>
  );
};
export default Homepage;
