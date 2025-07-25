// src/store/actions/userActions.ts

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

// Kullanıcı payload tipi (token reducer'a eklenmeyecekse burada tutulur)
export type UserPayload = {
  token: string;
  name: string;
  email: string;
  role_id: string;
};

// Sadece Redux'a gönderilecek olan kısmı (token reducer'da tutulmuyor)
export const loginUser = (user: UserPayload) => {
  return {
    type: LOGIN_USER,
    payload: {
      name: user.name,
      email: user.email,
      role_id: user.role_id
    }
  };
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  return {
    type: LOGOUT_USER
  };
};
