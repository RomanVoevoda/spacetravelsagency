import { Main, NewTours, HotTours, PriceCalculator, About } from "@/pages";
import React, { FC, ReactNode } from "react";
import { Navigate, NavigateFunction } from "react-router-dom";

type route = {
  path: string,
  element: ReactNode
}

export const routes: route[]  = [
  {path: '/main', element: <Main />},
  {path: '/newtours', element: <NewTours />},
  {path: '/hottours', element: <HotTours />},
  {path: '/prices', element: <PriceCalculator />},
  {path: '/about', element: <About />},
  {path: '*', element: <Navigate to='/main' replace />}
]