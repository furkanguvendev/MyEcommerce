import type { Address, Product } from "../../types&enums/types";

export const SET_CART = 'SET_CART';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_COUNT = 'ADD_COUNT';
export const ADD_FAV = 'ADD_FAV';
export const TAKE_COUNT = 'TAKE_COUNT';
export const REMOVE_FAV = 'REMOVE_FAV';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const DELETE_ADDRESS ='DELETE_ADDRESS';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';

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

export const addCount = (id: number) => ({
  type: ADD_COUNT,
  payload: id
})

export const takeCount = (id: number) => ({
  type: TAKE_COUNT,
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

export const setAddress = (addresses: Address[]) => ({
  type: SET_ADDRESS,
  payload: addresses
});

export const addAddress = (address: Address) => ({
  type: ADD_ADDRESS,
  payload: address
})

export const deleteAddress = (id: number) => ({
  type: DELETE_ADDRESS,
  payload: id
})

export const updateAddress = (address: Address) => ({
  type: UPDATE_ADDRESS,
  payload: address
})