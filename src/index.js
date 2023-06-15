import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider as UserProvider } from "./user/context";
import { Provider as ProductsProvider } from "./products/context";

import Layout from "./app/layout/Layout";
import HomeScreen from "./app/screens/Home";
import RedeemHistoryScreen from "./app/screens/RedeemHistory";

import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="history" element={<RedeemHistoryScreen />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ProductsProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
