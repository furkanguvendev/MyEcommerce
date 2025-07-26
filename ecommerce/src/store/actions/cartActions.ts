import type { Product } from "../../types&enums/types";

export const SET_CART = 'SET_CART';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';

export const setCart = (cart: { count: number; product: object }[]) => ({
  type: SET_CART,
  payload: cart
});

export const addItem = (item: {count: number; product: Product}) => ({
  type: ADD_ITEM,
  payload: item
})
 
export const removeItem = (id: number) => ({
  type: REMOVE_ITEM,
  payload: id
})

export const addFav = (item: Product) => ({
  type: ADD_FAV,
  payload: item
})

export const removeFav = (id: number) => ({
  type: REMOVE_FAV,
  payload: id 
})

export const setPayment = (payment: object) => ({
  type: SET_PAYMENT,
  payload: payment
});

export const setAddress = (address: object) => ({
  type: SET_ADDRESS,
  payload: address
});
