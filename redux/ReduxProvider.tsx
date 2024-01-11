import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Provider, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import store, { RootState } from '@/redux/store';
import { setUser, } from '@/redux/userSlice';
import authStorage, { getData, storeData } from '@/server_api/storage';

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    loadUserSession();
    loadUuID();
  }, []);

  const loadUserSession = async () => {
    const user = await authStorage.getUser();
    if (user) {
      store.dispatch(setUser(user));
    }
  };

  const loadUuID = async () => {
    const getuuid = await getData('medon_uuid');
    if (!getuuid) {
      const uuid = uuidv4();
      storeData('medon_uuid', uuid);
    }
  };

 
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default ReduxProvider;