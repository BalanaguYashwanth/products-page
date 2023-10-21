import { fetchCategoriesProducts, fetchProducts } from "../utils/api.action";
import { errorAction, loadProducts, loadingAction } from "../utils/constants";

export const loadCatgeoryItemsToState = (type) => {
  return async (dispatch) => {
    dispatch(loadingAction());
    try {
      let responseJSON;
      if (type) {
        responseJSON = await fetchCategoriesProducts({ type });
      } else {
        responseJSON = await fetchProducts();
      }
      const products = responseJSON.data;
      dispatch(loadProducts(products || []));
    } catch (e) {
      dispatch(errorAction(e?.message));
    }
  };
};
