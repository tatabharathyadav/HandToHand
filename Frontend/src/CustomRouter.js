// src/CustomRouter.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LocationInput from './components/LocationInput';
import AddHomeForm from './components/AddHomeForm';
import Login from './components/Login';
import UpdateHomeStatus from './components/UpdateHomeStatus';

const CustomRouter = () => {
  const routes = [
    { path: '/', component: HomePage, exact: true },
    { path: '/find-homes', component: LocationInput },
    { path: '/add-home', component: AddHomeForm },
    { path: '/login', component: Login },
    { path: '/update-home/:id', component: UpdateHomeStatus },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<route.component />}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
};

export default CustomRouter;
