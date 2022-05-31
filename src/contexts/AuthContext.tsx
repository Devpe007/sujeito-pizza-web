import React, { createContext, ReactNode, useState } from 'react';
import { destroyCookie, setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

import { api } from '../services/apiClient';

type UserProps = {
  id: string;
  name: string;
  email: string;
};

type SignInProps = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, '@nextauth.token');

    Router.push('/');
  } catch {
    console.log('Erro ao deslogar');
  };
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post('/session', {
        email,
        password,
      });

      const { id, name, token } = response.data;

      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // Expira em 1 mês;
        path: '/', // Quais caminhos terão acesso ao cookie;
      });

      setUser({
        id,
        name,
        email,
      });

      // Passar para proximas requisições o nosso token;
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      Router.push('/dashboard');
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      signIn,
      signOut,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};
