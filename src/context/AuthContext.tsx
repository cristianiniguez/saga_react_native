import { createContext, FC, ReactNode, useState } from 'react';

import { User } from '../utils/userDB';

type AuthContextType = {
  user: User | undefined;
  login: (user: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const login = (userData: User) => setUser(userData);
  const logout = () => setUser(undefined);

  return <AuthContext.Provider value={{ login, logout, user }}>{children}</AuthContext.Provider>;
};
