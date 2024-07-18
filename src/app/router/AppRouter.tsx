import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes';
import { Layout } from '../Layout';

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {routes.map(route =>
            <Route 
              path={route.path} 
              element={route.element}
              key={`${route.element}`}
            />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;