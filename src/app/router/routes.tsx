import { routesEnum } from "@/shared/routes/routes";
import { lazy, ReactNode } from "react";
import { Navigate } from "react-router-dom";

const Main = lazy( () => import('@/pages/Main/ui/Main'));
const Mars = lazy( () => import('@/pages/Mars/ui/Mars'));
const Exoplanets = lazy( () => import('@/pages/Exoplanets/ui/Exoplanets'));
const About = lazy( () => import('@/pages/About/ui/About'));
const ExoplanetIdPage = lazy( () => import('@/pages/ExoplanetIdPage/ui/ExoplanetIdPage'))

type route = {
  path: string,
  element: ReactNode
}

export const routes: route[]  = [
  {
    path: routesEnum.main, 
    element: 
      <Main />
  },
  {
    path: routesEnum.mars, 
    element: 
      <Mars />
  },
  {
    path: routesEnum.exoplanets, 
    element: 
      <Exoplanets />
  },
  {
    path: routesEnum.about, 
    element: 
      <About />
  },
  {
    path: routesEnum.exoplanetById,
    element:
      <ExoplanetIdPage />
  },
  {
    path: '*', 
    element: <Navigate to={ routesEnum.main } replace />
  }
]