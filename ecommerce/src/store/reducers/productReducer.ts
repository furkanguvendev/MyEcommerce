export type Product = {
  id: string;
  name: string;
  // Gerekirse diğer alanları da ekle
};

export type ProductState = {
  categories: object[]; // Daha spesifik tip istersen bunu da detaylandırabiliriz
  productList: Product[];
  total: number;
  limit: number;
  offset: number;
  filter: string;
  fetchState: 'NOT_FETCHED' | 'FETCHING' | 'FETCHED' | 'FAILED';
};

const initialState: ProductState = {
  categories: [],
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: '',
  fetchState: 'NOT_FETCHED',
};

export type Action =
  | { type: 'SET_CATEGORIES'; payload: object[] }
  | { type: 'SET_PRODUCT_LIST'; payload: Product[] }
  | { type: 'SET_TOTAL'; payload: number }
  | { type: 'SET_FETCH_STATE'; payload: ProductState['fetchState'] }
  | { type: 'SET_LIMIT'; payload: number }
  | { type: 'SET_OFFSET'; payload: number }
  | { type: 'SET_FILTER'; payload: string };

const productReducer = (state = initialState, action: Action): ProductState => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'SET_PRODUCT_LIST':
      return { ...state, productList: action.payload };
    case 'SET_TOTAL':
      return { ...state, total: action.payload };
    case 'SET_FETCH_STATE':
      return { ...state, fetchState: action.payload };
    case 'SET_LIMIT':
      return { ...state, limit: action.payload };
    case 'SET_OFFSET':
      return { ...state, offset: action.payload };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default productReducer;
