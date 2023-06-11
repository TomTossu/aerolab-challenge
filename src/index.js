import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider as UserProvider } from "./user/context";
import { Provider as ProductsProvider } from "./products/context";

import Layout from "./app/layout/Layout";
import HomeScreen from "./app/screens/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <ProductsProvider>
          <Layout>
            <HomeScreen />
          </Layout>
        </ProductsProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
