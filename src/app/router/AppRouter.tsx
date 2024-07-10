import { Navbar } from '@/widgets'
import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes';

interface route {
  path: string,
  element: FC,
  exact?: boolean
}

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        {routes.map(route => 
          <Route 
            path={route.path} 
            element={route.element}
            key={`${route.element}`}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;