type ClientState = {
  user: object;
  addressList: object[];
  creditCards: object[];
  roles: string[];
  theme: string;
  language: string;
};

const initialState: ClientState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: 'light',
  language: 'en',
};

export type Action =
  | { type: 'SET_USER'; payload: object }
  | { type: 'SET_ROLES'; payload: string[] }
  | { type: 'SET_THEME'; payload: string }
  | { type: 'SET_LANGUAGE'; payload: string };

const clientReducer = (state = initialState, action: Action): ClientState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_ROLES':
      return { ...state, roles: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default clientReducer;
