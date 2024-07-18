import { lazy, ReactNode } from "react";
import { Navigate } from "react-router-dom";

const Main = lazy( () => import('@/pages/Main/ui/Main'));
const Mars = lazy( () => import('@/pages/Mars/ui/Mars'));
const HotTours = lazy( () => import('@/pages/HotTours/ui/HotTours'));
const PriceCalculator = lazy( () => import('@/pages/PriceCalculator/ui/PriceCalculator'));
const About = lazy( () => import('@/pages/About/ui/About'));

type route = {
  path: string,
  element: ReactNode
}

export const routes: route[]  = [
  {
    path: '/main', 
    element: 
      <Main />
  },
  {
    path: '/mars', 
    element: 
      <Mars />
  },
  {
    path: '/hottours', 
    element: 
      <HotTours />
  },
  {
    path: '/prices', 
    element: 
      <PriceCalculator />
  },
  {
    path: '/about', 
    element: 
      <About />
  },
  {
    path: '*', 
    element: <Navigate to='/main' replace />
  }
]