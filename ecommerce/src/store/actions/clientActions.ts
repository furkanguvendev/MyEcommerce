// Action Types
export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';

// Action Creators
export const setUser = (user: object) => ({
  type: SET_USER,
  payload: user
});

export const setRoles = (roles: string[]) => ({
  type: SET_ROLES,
  payload: roles
});

export const setTheme = (theme: string) => ({
  type: SET_THEME,
  payload: theme
});

export const setLanguage = (language: string) => ({
  type: SET_LANGUAGE,
  payload: language
});
