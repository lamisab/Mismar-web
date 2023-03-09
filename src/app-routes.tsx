import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { appRoutesObj } from "./app.paths";
import Navbar from "./components/admin/navbar";

const ExamplePage = React.lazy(() => import('./pages/user/example-page'));
const NotFoundPage = React.lazy(() => import('./pages/404'));
const HomePage = React.lazy(() => import('./pages/admin/home-page'));
const AllOrdersPage = React.lazy(() => import('./pages/admin/orders/allOrders-page'));
const CommunicationOrdersPage = React.lazy(() => import('./pages/admin/orders/communicationOrders-page'));
const ReturnOrdersPage = React.lazy(() => import('./pages/admin/orders/returnOrders-page'));

const withSuspense = (WrappedComponent: JSX.Element) => {
  return (
    <Suspense
      fallback={
        <div className="text-primary-200 pt-10">
          Loading...
        </div>
      }
    >
      {WrappedComponent}
    </Suspense>
  );
};

export function AppRouting() {
    return (
      <Suspense
        fallback={
          <div className="text-primary-200 pt-10">
            Loading...
          </div>
        }
      >

        <BrowserRouter>
        <Navbar/>
        
          <Routes>
            <Route
              key="homepage"
              path={appRoutesObj.getBasePath()}
              element={withSuspense(<App />)}
            />
            
            <Route
              key="examplePage"
              path={appRoutesObj.getExamplePagePath()}
              element={withSuspense(<ExamplePage />)}
            />

            
            <Route
              key="notDefined"
              path="*"
              element={withSuspense(<NotFoundPage />)}
            />

            <Route
              key="home"
              path={appRoutesObj.getHomePagePath()}
              element={withSuspense(<HomePage />)}
            />

            <Route
              key="allOrders"
              path={appRoutesObj.getAllOrdersPagePath()}
              element={withSuspense(<AllOrdersPage />)}
            />

            <Route
              key="CommunicationOrders"
              path={appRoutesObj.getCommunicationOrdersPagePath()}
              element={withSuspense(<CommunicationOrdersPage />)}
            />

            <Route
              key="ReturnOrders"
              path={appRoutesObj.getReturnOrdersPagePath()}
              element={withSuspense(<ReturnOrdersPage />)}
            />

         
             
          </Routes>
        </BrowserRouter>
      </Suspense>
    );
  }
  