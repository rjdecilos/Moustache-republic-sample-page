export const ADD_TO_CART = 'cart/ADD_TO_CART';

const initialState = {
  userCart: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        userCart: action.newCart,
      }
    default:
      return state
  }
}

export const addToCart = (size) => {
  return (dispatch, getState) => {
    if (!size) return false;
    const { userCart } = getState().cart;
    const newCart = [];
    let foundSize = false;
    userCart.forEach((uc) => {
      newCart.push({...uc});
      if (uc.size === size) {
        foundSize = true;
        newCart[newCart.length - 1].count = newCart[newCart.length - 1].count + 1;
      }
    });
    if (!foundSize) {
      newCart.push({
        name: 'Classic Tee',
        count: 1,
        amount: '$75.00',
        size,
      });
    }
    dispatch({
      type: ADD_TO_CART,
      newCart,
    })
    return true;
  };
}
