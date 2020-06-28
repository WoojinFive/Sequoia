import { PRODUCTS } from '../../data/dummy-data';
import {
  TOGGLE_LIST,
  SET_SEARCHTEXT,
  SET_SELECTEDPRODUCTID,
} from '../actions/products';

const initialState = {
  products: PRODUCTS,
  searchText: '',
  selectedId: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIST:
      const index = state.products.findIndex(
        (product) => product.id === action.productId
      );
      let updatedProducts = [...state.products];
      Object.assign(updatedProducts[index], {
        isInList: !updatedProducts[index].isInList,
      });
      return { ...state, products: updatedProducts };
    case SET_SEARCHTEXT:
      return { ...state, searchText: action.searchText };
    case SET_SELECTEDPRODUCTID:
      return { ...state, selectedId: action.productId };
    default:
      return state;
  }
  return state;
};

export default productsReducer;
