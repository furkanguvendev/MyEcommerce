import type { Product } from "../../types&enums/types";

export type CartProduct = {
  count: number;
  product: Product;
};

export type CartState = {
  cart: CartProduct[];
  payment: object;
  address: object;
};

const initialState: CartState = {
  cart: [],
  payment: {},
  address: {},
};

export type Action =
  | { type: 'SET_CART'; payload: CartProduct[] }
  | { type: 'ADD_ITEM'; payload: CartProduct }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'SET_PAYMENT'; payload: object }
  | { type: 'SET_ADDRESS'; payload: object };

const shoppingCartReducer = (state = initialState, action: Action): CartState => {
  switch (action.type) {
    case 'SET_CART':
      return { ...state, cart: action.payload };
    case 'ADD_ITEM':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_ITEM': {
      const updatedCart = state.cart.filter(item => item.product.id !== action.payload);
      return { ...state, cart: updatedCart };
    }
    case 'SET_PAYMENT':
      return { ...state, payment: action.payload };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

export default shoppingCartReducer;
