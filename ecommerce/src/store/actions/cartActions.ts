// Action Types
export const SET_CART = 'SET_CART';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';

// Action Creators
export const setCart = (cart: { count: number; product: object }[]) => ({
  type: SET_CART,
  payload: cart
});

export const setPayment = (payment: object) => ({
  type: SET_PAYMENT,
  payload: payment
});

export const setAddress = (address: object) => ({
  type: SET_ADDRESS,
  payload: address
});
