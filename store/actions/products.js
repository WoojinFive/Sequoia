export const TOGGLE_LIST = 'TOGGLE_LIST';
export const SET_SEARCHTEXT = 'SET_SEARCHTEXT';
export const SET_SELECTEDPRODUCTID = 'SET_SELECTEDPRODUCTID';

export const toggleList = (id) => {
  return { type: TOGGLE_LIST, productId: id };
};
export const setSearchtext = (searchText) => {
  return { type: SET_SEARCHTEXT, searchText: searchText };
};
export const setSelectedProductId = (id) => {
  return { type: SET_SELECTEDPRODUCTID, productId: id };
};
