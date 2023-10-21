import { useEffect, useState } from "react";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";
import styles from "./Homapage.module.scss";
import Card from "../../components/Card";
import { categories } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { loadCatgeoryItemsToState } from "../../redux/thunk";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleCategoriesSelection = ({ value, label }) => {
    dispatch(loadCatgeoryItemsToState(value));
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
    if (localStorage.getItem("access-token-products")) {
      dispatch(loadCatgeoryItemsToState());
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    setLoader(state.LOADING || false);
    handleStateChange();
  }, [state]);

  return (
    <main className={styles.container}>
      <div>
        <Toaster />
      </div>
      <section className={styles.center}>
        <h1 className={styles.header}> My products </h1>
        <Select
          className={styles.mx10}
          placeholder={<div>Select Categories</div>}
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
