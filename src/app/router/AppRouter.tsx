import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes';

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
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