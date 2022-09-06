import { Layout } from 'antd';
import React, { FC, useEffect } from 'react';
import './App.css'
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

const App: FC = () => {

  const { setUser, setIsAuth, setToken } = useActions();

  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser);
      setIsAuth(true);
      setToken( localStorage.getItem('token') || '' );
    }

  }, [])

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>

  );
}

export default App;
