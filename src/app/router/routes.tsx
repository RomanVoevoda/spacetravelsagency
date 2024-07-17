import { Main, Mars, HotTours, PriceCalculator, About } from "@/pages";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Layout } from "../Layout";

type route = {
  path: string,
  element: ReactNode
}

export const routes: route[]  = [
  {
    path: '/', 
    element: 
      <Layout>
        <Main />
      </Layout>
  },
  {
    path: '/mars', 
    element: 
      <Layout>
        <Mars />
      </Layout>
  },
  {
    path: '/hottours', 
    element: 
      <Layout>
        <HotTours />
      </Layout>
  },
  {
    path: '/prices', 
    element: 
      <Layout>
        <PriceCalculator />
      </Layout>
  },
  {
    path: '/about', 
    element: 
    <Layout>
      <About />
    </Layout>
  },
  {
    path: '*', 
    element: <Navigate to='/' replace />
  }
]