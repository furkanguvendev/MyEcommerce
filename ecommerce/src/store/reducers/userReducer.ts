// src/store/reducers/userReducer.ts

import { LOGIN_USER, LOGOUT_USER } from "../actions/userActions";

// Kullanıcı state tipi
export type User = {
  name: string;
  email: string;
  role_id: string;
};

const initialState: User = {
  name: "",
  email: "",
  role_id: ""
};

type Action =
  | { type: typeof LOGIN_USER; payload: User }
  | { type: typeof LOGOUT_USER };

const userReducer = (state = initialState, action: Action): User => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
