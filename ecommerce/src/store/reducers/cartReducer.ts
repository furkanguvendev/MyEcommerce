import type { Address, CreditCard, LastOrder, Product } from "../../types&enums/types";

export type CartProduct = {
  count: number;
  product: Product;
};

export type CartState = {
  cart: CartProduct[];
  favorite: Product[];
  payment: CreditCard[];
  address: Address[];
  order: LastOrder;
};

const initialState: CartState = {
  cart: [],
  favorite: [],
  payment: [],
  address: [],
  order: {
    address_id: 0,
    order_date: "",
    card_no: 0,
    card_name: "",
    card_expire_month: 0,
    card_expire_year: 0,
    card_ccv: 0,
    price: 0,
    products: []
  },
};

export type Action =
  | { type: 'SET_CART'; payload: CartProduct[] }
  | { type: 'ADD_ITEM'; payload: CartProduct }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'ADD_COUNT'; payload: number }
  | { type: 'TAKE_COUNT'; payload: number }
  | { type: 'ADD_FAV', payload: Product }
  | { type: 'REMOVE_FAV', payload: number}
  | { type: 'SET_PAYMENT'; payload: CreditCard[] }
  | { type: 'ADD_PAYMENT'; payload: CreditCard }
  | { type: 'SET_ADDRESS'; payload: Address[] }
  | { type: 'ADD_ADDRESS'; payload: Address }
  | { type: 'DELETE_ADDRESS'; payload: number}
  | { type: 'UPDATE_ADDRESS'; payload: Address}
  | { type: 'CREATE_ORDER'; payload: LastOrder}
  | { type: 'DELETE_ORDER'};

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
    case 'ADD_COUNT': 
    return { ...state, cart: state.cart.map(item => {
      if(item.product.id === action.payload) {
        return {
          ...item,
          count: item.count + 1
        };
      }
      return item;
    })};
    case 'TAKE_COUNT': 
    return { ...state, cart: state.cart.map(item => {
      if(item.product.id === action.payload) {
        return {
          ...item,
          count: item.count > 1 ? item.count - 1 : 1
        };
      }
      return item;
    })};
    case 'ADD_FAV':
      return { ...state, favorite: [...state.favorite, action.payload]};
    case 'REMOVE_FAV': {
      const updatedFav = state.favorite.filter(item => item.id !== action.payload);
      return { ...state, favorite: updatedFav};
    };
    case 'SET_PAYMENT':
      return { ...state, payment: action.payload };
    case 'ADD_PAYMENT':
      return {
        ...state,
        payment: [ ...state.payment, action.payload]
      };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    case 'ADD_ADDRESS':
      return { ...state, address: [ ...state.address, action.payload ]};
    case 'DELETE_ADDRESS':
      return {
        ...state,
        address: state.address.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_ADDRESS':
      return {
        ...state,
        address: state.address.map((addr) =>
        addr.id === action.payload.id ? action.payload : addr
        ),
      };
    case 'CREATE_ORDER':
      return {
        ...state,
        order: action.payload,
      };
    case 'DELETE_ORDER':
      return {
        ...state,
        order: initialState.order,
      }
    default:
      return state;
  }
};

export default shoppingCartReducer;
