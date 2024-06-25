import React, { createContext } from 'react';

export const AuthContext = createContext({
  isLogin: false,
  setIsLogin: () => {},
  handleLogin: () => {},
  handleLogout: () => {}
});