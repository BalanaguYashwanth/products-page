import { fetchCategoriesProducts } from "../utils/api.action";
import { errorAction, loadProducts, loadingAction } from "../utils/constants";

export const loadCatgeoryItemsToState = (type) => {
  return async (dispatch) => {
    dispatch(loadingAction());
    try {
      const responseJSON = await fetchCategoriesProducts({ type });
      const categories = responseJSON.data;
      dispatch(loadProducts(categories || categories));
    } catch (e) {
      dispatch(errorAction(e?.message));
    }
  };
};
