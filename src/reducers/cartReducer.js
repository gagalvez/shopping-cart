export const initialState = {
  cart: [],
  total: 0,
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":

      return state;

    case "REMOVE_FROM_CART":

      return state;

    case "UPDATE_QUANTITY":

      return state;

    default:
      return state;
  }
}
