import React, { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';

import store from '@/redux/store';
import { setUser, } from '@/redux/userSlice';
import authStorage from '@/server_api/storage';

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    loadUserSession()
  }, []);

  const loadUserSession = async () => {
    const user = await authStorage.getUser();
    if (user) {
      store.dispatch(setUser(user));
    }
  };

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default ReduxProvider;