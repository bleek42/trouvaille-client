import React, { useReducer, createContext, useContext } from 'react';

const initState = {
  user: null,
  token: null,
  loading: false,
  error: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'REGISTER_REQ':
      return {
        ...state,
        loading: true,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false
      };
    case 'REGISTER FAIL': {
      return {
        ...state,
        loading: false,
        error: action.payload.error || 'Error registering new user'
      };
    }
    case 'LOGIN_REQ':
      return {
        ...state,
        loading: true
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false
      };
    case 'LOGOUT':
      return {
        ...state,
        user: '',
        token: ''
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload.error || 'Error logging in user'
      };
    default:
      throw new Error('Unknown action type...');
  }
};

const AuthContext = createContext([initState, () => { }]);

export const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={useReducer(reducer, initState)}>
    {children}
  </AuthContext.Provider>
);

export const useAuth = () => useContext(AuthContext);