export type CartProduct = {
  count: number;
  product: {
    id: string;
    name?: string;
    // Ek alanlar varsa buraya ekleyebilirsin
  };
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
  | { type: 'SET_PAYMENT'; payload: object }
  | { type: 'SET_ADDRESS'; payload: object };

const shoppingCartReducer = (state = initialState, action: Action): CartState => {
  switch (action.type) {
    case 'SET_CART':
      return { ...state, cart: action.payload };
    case 'SET_PAYMENT':
      return { ...state, payment: action.payload };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

export default shoppingCartReducer;
